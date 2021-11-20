import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

export interface TopicVote {
  id: string;
  votesCount: number;
}

export interface ApiError {
  error: string;
}

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ApiError | TopicVote>,
) {
  const client = new PrismaClient();
  const { id } = req.query as { id: string };
  try {
    const votesCount = await client.vote.count({
      where: { topicId: id },
    });

    res.json({ id, votesCount });
  } catch (e) {
    res.status(500).json({ error: 'Internal Server Error' });
    // TODO: We need error reporting service
    console.error(e);
  }
}

export default handler;
