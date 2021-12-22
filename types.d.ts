interface ApiError {
  error: string;
}

interface TopicVote {
  id: string;
  votesCount: number;
  isVoted: boolean | null;
}

type AsyncReturnType<T extends (...args: any) => Promise<any>> = T extends (
  ...args: any
) => Promise<infer R>
  ? R
  : any;

type QueryOptions<
  T extends (...args: any) => any,
  U extends unknown[] | string = unknown[],
> = import('react-query').UseQueryOptions<
  AsyncReturnType<T>,
  import('axios').AxiosError<ApiError>,
  AsyncReturnType<T>,
  U
>;

type MutationOptions<T extends (...args: any) => any> = T extends (
  args: infer Args,
  ...any: unknown[]
) => unknown
  ? import('react-query').UseMutationOptions<
      AsyncReturnType<T>,
      import('axios').AxiosError<ApiError>,
      Args,
      unknown
    >
  : never;
