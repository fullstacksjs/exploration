import { isNullOrEmpty } from '@fullstacksjs/toolbox';
import prisma from '../../../lib/prisma';
import type { NextApiRequest, NextApiResponse } from 'next';
import { apiHandler } from '../../../lib/apiHandler';
import { env } from '../../../lib/env';
import { report } from '../../../lib/error';

function isBasicAuthorized(authorization: string | undefined) {
  if (authorization == null) return false;

  const token = authorization?.split(' ')[1];
  if (isNullOrEmpty(token)) return false;

  const [username, password] = Buffer.from(token, 'base64')
    .toString('ascii')
    .split(':');

  return username === env.datoUsername && password === env.datoPassword;
}

async function datoCMSNewTopicHandler(
  req: NextApiRequest,
  res: NextApiResponse<ApiError | TopicVote>,
) {
  const isAuthorized = isBasicAuthorized(req.headers.authorization);

  try {
    if (!isAuthorized) return res.status(401).end();

    const body: PublishEventBody = req.body;
    const topic = body.entity;
    const isTopicExists = await prisma.topic.findUnique({
      where: { id: topic.id },
    });

    if (isTopicExists) return res.status(200).end();

    await prisma.topic.create({ data: { id: topic.id } });
    return res.status(200).end();
  } catch (e) {
    res.status(500).json({ error: 'Internal Server Error' });
    report(e);
  }
}

const handler = apiHandler({
  post: datoCMSNewTopicHandler,
});

export default handler;
