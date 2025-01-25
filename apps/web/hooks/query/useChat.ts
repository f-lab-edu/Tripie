import { increment } from '@firebase/firestore';
import { useQuery } from '@tanstack/react-query';

import { getTripPlan } from 'app/api/chat/route';
import firestoreService from 'app/api/firebase';
import { DB_NAME } from 'constants/auth';

import { TripPlanner } from 'models/Aws';
import { Continentl } from 'models/Continentl';

const useChat = (chatItems: TripPlanner, id: string) => {
  const res = useQuery({
    queryKey: useChat.queryKey(chatItems),
    queryFn: async () => {
      if (id != null) {
        const user = await firestoreService.getItem(DB_NAME, id);
        if (user != null) {
          return await firestoreService.getListWithIds('continentl').then(async countries => {
            // iso31661로 같은 code의 세자리 버전을 aws에 FilterCountry로 넘겨 검색 정확도를 높이기 위해 국가 코드 두자리를 code로 넘겨줍니다.
            const { code } = countries?.filter((place: Continentl) => place.id === chatItems.country)[0] as Continentl;

            const data = await getTripPlan({ ...chatItems, code });
            if (data != null) {
              await firestoreService.updateItem(DB_NAME, id, {
                usedTokens: increment(1),
              });
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
