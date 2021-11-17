import { getRequiredEnv } from '@fullstacksjs/toolbox';
import { GraphQLClient } from 'graphql-request';

const apiToken = getRequiredEnv('NEXT_DATOCMS_API_TOKEN');
const options = { headers: { authorization: `Bearer ${apiToken}` } };
const previewClient = new GraphQLClient(
  `https://graphql.datocms.com/preview`,
  options,
);

const publishedClient = new GraphQLClient(
  `https://graphql.datocms.com`,
  options,
);

export function getClient(preview?: boolean) {
  return preview ? previewClient : publishedClient;
}
