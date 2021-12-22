import { useQuery } from 'react-query';
import { apiClient } from '../lib/apiClient';

const getTopic = (id: string) => apiClient.get<TopicVote>(`/topics/${id}`);

export const useTopic = (
  id: string,
  options?: QueryOptions<typeof getTopic, ['topics', string]>,
) => useQuery(['topics', id], () => getTopic(id), options);
