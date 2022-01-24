import type { NextApiRequest, NextApiResponse } from 'next';
import { getSession } from 'next-auth/react';

import { apiHandler } from '../../../../lib/apiHandler';
import { report } from '../../../../lib/error';
import prisma from '../../../../lib/prisma';

async function getTopic(
  req: NextApiRequest,
  res: NextApiResponse<ApiError | TopicVote>,
) {
  const session = await getSession({ req });
  const { id } = req.query as { id: string };
  try {
    const votesCount = await prisma.vote.count({
      where: { topicId: id },
    });

    if (!session) return res.json({ id, votesCount, isVoted: null });

    const isVoted = await prisma.vote
      .findUnique({
        where: {
          userEmail_topicId: { topicId: id, userEmail: session.user!.email! },
        },
        select: { id: true },
      })
      .then(Boolean);

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
