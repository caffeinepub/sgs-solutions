import { useQuery } from '@tanstack/react-query';
import { useActor } from './useActor';
import type { ContactSubmission } from '../backend';

export function useGetSubmissions(limit: number) {
  const { actor, isFetching } = useActor();

  return useQuery<ContactSubmission[]>({
    queryKey: ['submissions', limit],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getSubmissions(BigInt(limit));
    },
    enabled: !!actor && !isFetching,
  });
}

