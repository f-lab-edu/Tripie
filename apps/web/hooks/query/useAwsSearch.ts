import { useQuery } from '@tanstack/react-query';
import { postAwsPlace } from 'app/api/aws/place';
import { ChatFunnelProps } from 'app/trip-planner/_components/Chat';
import { iso31661 } from 'iso-3166';

const useAwsSearch = (data: string[], context: ChatFunnelProps['context']) => {
  const res = useQuery({
    queryKey: useAwsSearch.queryKey(data),
    queryFn: async () => {
      return await data.map(
        async place => await postAwsPlace(place, iso31661.find(item => item.name === context.country)?.alpha3 as string)
      );
    },
    staleTime: Infinity, // never be considered stale
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });
  return res;
};

useAwsSearch.queryKey = (chatItems: string[]) => {
  return Object.values(chatItems);
};

export default useAwsSearch;
