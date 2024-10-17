import { useQuery } from '@tanstack/react-query';

import { getTripPlan } from 'app/api/chat/route';
import { TripPlanner } from 'models/Aws';

const useChat = (chatItems: TripPlanner) => {
  const res = useQuery({
    queryKey: useChat.queryKey(chatItems),
    queryFn: () => {
      const data = getTripPlan(chatItems);
      return data;
    },
    staleTime: Infinity, // never be considered stale
    refetchOnWindowFocus: false,
  });
  return res;
};

useChat.queryKey = (chatItems: TripPlanner) => {
  return Object.values(chatItems);
};

export default useChat;
