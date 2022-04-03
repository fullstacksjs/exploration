import type { NextApiRequest, NextApiResponse } from 'next';
import { getSession } from 'next-auth/react';

import { apiHandler } from '../../../../lib/apiHandler';
import { report } from '../../../../lib/error';
import prisma from '../../../../lib/prisma';

async function voteUp(
  req: NextApiRequest,
  res: NextApiResponse<ApiError | TopicVote>,
) {
  const session = await getSession({ req });
  if (!session?.user?.email) {
    res.status(401).end();
    return;
  }

  const { id } = req.query as { id: string };

  try {
    const isVoted = await prisma.vote.findUnique({
      where: {
        userEmail_topicId: { topicId: id, userEmail: session.user.email },
      },
    });

    if (isVoted) {
      res.status(400).json({ error: 'Already voted' });
      return;
    }

    const topic = await prisma.topic.update({
      where: { id },
      data: { Votes: { create: { userEmail: session.user.email } } },
      select: { id: true, _count: { select: { Votes: true } } },
    });
    res
      .status(200)
      .json({ id: topic.id, votesCount: topic._count.Votes, isVoted: true });
  } catch (e) {
    res.status(500).json({ error: 'Internal Server Error' });
    report(e);
  }
}

const handler = apiHandler({
  put: voteUp,
});

export default handler;
