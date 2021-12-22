import { useMutation, useQueryClient } from 'react-query';
import { apiClient } from '../lib/apiClient';

const voteUp = (id: string) =>
  apiClient.put<TopicVote>(`/topics/${id}/voteup`, undefined);

export const useVoteUp = (options?: MutationOptions<typeof voteUp>) => {
  const queryClient = useQueryClient();

  return useMutation(voteUp, {
    onSuccess(_, id) {
      queryClient.setQueryData<TopicVote>(['topics', id], (topic) => ({
        ...(topic ?? {}),
        id,
        votesCount: (topic?.votesCount ?? 0) + 1,
        isVoted: true,
      }));
    },
    ...options,
  });
};
