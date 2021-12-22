import type { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';
import { report } from '../../../../lib/error';
import { getSession } from 'next-auth/react';
import { apiHandler } from '../../../../lib/apiHandler';

async function voteDown(
  req: NextApiRequest,
  res: NextApiResponse<ApiError | TopicVote>,
) {
  const session = await getSession({ req });
  if (!session?.user?.email) return res.status(401).end();

  const client = new PrismaClient();
  const { id } = req.query as { id: string };

  console.log({
    topicId: id,
    userEmail: session.user.email,
  });

  try {
    const isVoted = await client.vote.findUnique({
      where: {
        userEmail_topicId: { topicId: id, userEmail: session.user.email },
      },
    });

    if (!isVoted)
      return res.status(400).json({ error: "You dont't have a vote" });

    const topic = await client.vote.delete({
      where: {
        userEmail_topicId: { userEmail: session.user.email, topicId: id },
      },
    });

    const votesCount = await client.vote.count({
      where: { topicId: id },
    });

    res.status(200).json({ id: topic.id, votesCount, isVoted: false });
  } catch (e) {
    res.status(500).json({ error: 'Internal Server Error' });
    report(e);
  }
}

const handler = apiHandler({
  put: voteDown,
});

export default handler;
