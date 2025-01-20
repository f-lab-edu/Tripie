import { useQuery } from '@tanstack/react-query';

import { getTripPlan } from 'app/api/chat/route';
import getContinentlList from 'app/api/firebase/getContinentl';

import { TripPlanner } from 'models/Aws';
import { Continentl } from 'models/Continentl';

const useChat = (chatItems: TripPlanner) => {
  const res = useQuery({
    queryKey: useChat.queryKey(chatItems),
    queryFn: async () => {
      return await getContinentlList().then(async countries => {
        // iso31661로 같은 code의 세자리 버전을 aws에 FilterCountry로 넘겨 검색 정확도를 높이기 위해 국가 코드 두자리를 code로 넘겨줍니다.
        const { code } = countries?.filter(place => place.id === chatItems.country)[0] as Continentl;
        const data = await getTripPlan({ ...chatItems, code });
        return data;
      });
    },
    staleTime: Infinity, // never be considered stale
    refetchOnWindowFocus: false,
    retryDelay: 3,
  });

  return res;
};

useChat.queryKey = (chatItems: TripPlanner) => {
  return Object.values(chatItems);
};

export default useChat;
