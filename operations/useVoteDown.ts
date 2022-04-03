import { useMutation, useQueryClient } from 'react-query';

import { apiClient } from '../lib/apiClient';

const voteDown = (id: string) =>
  apiClient.put<TopicVote>(`/topics/${id}/votedown`, undefined);

export const useVoteDown = (options?: MutationOptions<typeof voteDown>) => {
  const queryClient = useQueryClient();

  return useMutation(voteDown, {
    onSuccess(_, id) {
      queryClient.setQueryData<TopicVote>(['topics', id], (topic) => ({
        ...(topic ?? {}),
        id,
        votesCount: (topic?.votesCount ?? 1) - 1,
        isVoted: false,
      }));
    },
    ...options,
  });
};
