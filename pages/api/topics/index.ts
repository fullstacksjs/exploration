import { isNullOrEmpty } from '@fullstacksjs/toolbox';
import type { NextApiHandler } from 'next';

import { apiHandler } from '../../../lib/apiHandler';
import { env } from '../../../lib/env';
import { report } from '../../../lib/error';
import prisma from '../../../lib/prisma';

function isBasicAuthorized(authorization: string | undefined) {
  if (authorization == null) return false;

  const token = authorization?.split(' ')[1];
  if (isNullOrEmpty(token)) return false;

  const [username, password] = Buffer.from(token, 'base64')
    .toString('ascii')
    .split(':');

  return username === env.datoUsername && password === env.datoPassword;
}

const datoCMSNewTopicHandler: NextApiHandler<ApiError | TopicVote> = async (
  req,
  res,
) => {
  const isAuthorized = isBasicAuthorized(req.headers.authorization);

  try {
    if (!isAuthorized) {
      res.status(401).end();
      return;
    }

    const body: PublishEventBody = req.body;
    const topic = body.entity;
    const isTopicExists = await prisma.topic.findUnique({
      where: { id: topic.id },
    });

    if (isTopicExists) {
      res.status(200).end();
      return;
    }

    await prisma.topic.create({ data: { id: topic.id } });
    res.status(200).end();
  } catch (e) {
    res.status(500).json({ error: 'Internal Server Error' });
    report(e);
  }
};

const handler = apiHandler({
  post: datoCMSNewTopicHandler,
});

export default handler;
