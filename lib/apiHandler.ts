import type { NextApiHandler, NextApiRequest, NextApiResponse } from 'next';

type HttpMethod = 'delete' | 'get' | 'post' | 'put';

type Handler<T> = Partial<Record<HttpMethod, NextApiHandler<T>>>;

export const apiHandler =
  <T>(handlers: Handler<T>) =>
  (
    req: NextApiRequest,
    res: NextApiResponse<T>,
  ): Promise<NextApiResponse<ApiError | TopicVote> | void> | void => {
    const method = req.method!.toLowerCase() as HttpMethod;
    const handler = handlers[method];
    if (!handler) {
      res.status(405).end(`Method ${req.method} Not Allowed`);
      return;
    }

    return handler(req, res);
  };
