import type { NextApiHandler } from 'next';
import { getSession } from 'next-auth/react';

import { apiHandler } from '../../../../lib/apiHandler';
import { report } from '../../../../lib/error';
import prisma from '../../../../lib/prisma';

const voteDown: NextApiHandler<ApiError | TopicVote> = async (req, res) => {
  const session = await getSession({ req });
  if (!session?.user?.email) {
    res.status(401).end();
    return;
  }

  const { id } = req.query as { id: string };

  console.log({
    topicId: id,
    userEmail: session.user.email,
  });

  try {
    const isVoted = await prisma.vote.findUnique({
      where: {
        userEmail_topicId: { topicId: id, userEmail: session.user.email },
      },
    });

    if (!isVoted) {
      res.status(400).json({ error: "You dont't have a vote" });
      return;
    }

    const topic = await prisma.vote.delete({
      where: {
        userEmail_topicId: { userEmail: session.user.email, topicId: id },
      },
    });

    const votesCount = await prisma.vote.count({
      where: { topicId: id },
    });

    res.status(200).json({ id: topic.id, votesCount, isVoted: false });
  } catch (e) {
    res.status(500).json({ error: 'Internal Server Error' });
    report(e);
  }
};

const handler = apiHandler({
  put: voteDown,
});

export default handler;
