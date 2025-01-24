import { useQuery } from '@tanstack/react-query';

import { getTripPlan } from 'app/api/chat/route';
import getContinentlList from 'app/api/firebase/getContinentl';
import getTokenUse from 'app/api/firebase/getTokenUse';
import increaseTokenUse from 'app/api/firebase/increaseTokenUse';

import { TripPlanner } from 'models/Aws';
import { Continentl } from 'models/Continentl';

const useChat = (chatItems: TripPlanner, id: string) => {
  const res = useQuery({
    queryKey: useChat.queryKey(chatItems),
    queryFn: async () => {
      if (id != null) {
        const user = await getTokenUse(id);
        if (user != null) {
          return await getContinentlList().then(async countries => {
            // iso31661로 같은 code의 세자리 버전을 aws에 FilterCountry로 넘겨 검색 정확도를 높이기 위해 국가 코드 두자리를 code로 넘겨줍니다.
            const { code } = countries?.filter(place => place.id === chatItems.country)[0] as Continentl;

            const data = await getTripPlan({ ...chatItems, code });
            if (data != null) {
              await increaseTokenUse(id);
            }
            return data;
          });
        }
      }
      return null;
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
