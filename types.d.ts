interface ApiError {
  error: string;
}

type Topic = TopicsQuery['allTopics'][number];

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

interface DatoFile {
  alt?: string;
  author?: string;
  basename: string;
  filename: string;
  format: string;
  height?: number;
  id: string;
  md5: string;
  mimeType: string;
  notes?: string;
  responsiveImage?: any;
  size: number;
  smartTags: string;
  tags: string;
  title?: string;
  url: string;
  width?: number;
}

interface DatoLecturer {
  avatar: DatoFile[];
  createdAt: string;
  id: string;
  name: string;
  slug: string;
  updatedAt: string;
}

interface DatoTopic {
  title: string;
  description: string;
  slug: string;
  lecturers: DatoLecturer[];
  icon: DatoFile[];
  updated_at: string;
  created_at: string;
}

interface PublishEventBody {
  environment: 'main';
  entity_type: 'item';
  event_type: 'publish';
  entity: {
    id: string;
    type: 'item';
    attributes: DatoTopic;
    relationships: { item_type: any; creator: any };
    meta: {
      created_at: string;
      updated_at: string;
      published_at: string;
      publication_scheduled_at: string | null;
      unpublishing_scheduled_at: string | null;
      first_published_at: string;
      is_valid: true;
      status: 'published';
      current_version: string;
      stage: any | null;
    };
  };
}
