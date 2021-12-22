import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';
import { report } from '../../../../lib/error';
import { getSession } from 'next-auth/react';
import { apiHandler } from '../../../../lib/apiHandler';

async function getTopic(
  req: NextApiRequest,
  res: NextApiResponse<ApiError | TopicVote>,
) {
  const client = new PrismaClient();
  const session = await getSession({ req });
  const { id } = req.query as { id: string };
  try {
    const votesCount = await client.vote.count({
      where: { topicId: id },
    });
    const isVoted = await (session
      ? client.topic
          .findFirst({
            where: { Votes: { some: { userEmail: session.user?.email } } },
            select: { id: true },
          })
          .then(Boolean)
      : Promise.resolve(null));

    res.json({ id, votesCount, isVoted });
  } catch (e) {
    res.status(500).json({ error: 'Internal Server Error' });
    report(e);
  }
}

const handler = apiHandler({
  get: getTopic,
});

export default handler;
