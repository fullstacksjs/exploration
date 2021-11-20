export interface NotFoundError {
  name: 'NotFoundError';
  message: string;
}

export const isNotFoundError = (x: unknown): x is NotFoundError =>
  // @ts-expect-error PENDING: TS problem 🤷‍♂️
  typeof x === 'object' && 'name' in x && x.name === 'NotFoundError';
