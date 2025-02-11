import { increment } from '@firebase/firestore';
import { useQuery } from '@tanstack/react-query';

import { getTripPlan } from 'app/api/chat/route';
import firestoreService from 'app/api/firebase';
import API from 'constants/api-routes';
import { CHAT_DB_NAME, DB_NAME } from 'constants/auth';

import { TripPlanner } from 'models/Aws';
import { Continentl } from 'models/Continentl';

const useChat = (chatItems: TripPlanner, id: string) => {
  const res = useQuery({
    queryKey: useChat.queryKey(chatItems),
    queryFn: async () => {
      const { serverTime } = await fetch(`${API.BASE}${API.SERVER_TIME}`).then(v => v.json());
      if (id != null) {
        const user = await firestoreService.getItem(DB_NAME, id);
        if (user != null) {
          // return await firestoreService.getListWithIds('continentl')
          return await firestoreService.getListWithIds('continentl').then(async countries => {
            // iso31661로 같은 code의 세자리 버전을 aws에 FilterCountry로 넘겨 검색 정확도를 높이기 위해 국가 코드 두자리를 code로 넘겨줍니다.
            const { code } = countries?.filter((place: Continentl) => place.id === chatItems.country)[0] as Continentl;
            const data = await getTripPlan({ ...chatItems, code });
            if (data != null) {
              await firestoreService.updateItem(DB_NAME, id, {
                usedTokens: increment(1),
              });
              const {
                duration,
                companion,
                continent,
                country,
                preference,
                city: { selected },
              } = chatItems;
              await firestoreService.addItem(CHAT_DB_NAME, {
                duration,
                data: JSON.stringify(data),
                id: `${serverTime}-${id}`,
                city: selected,
                companion: companion.split(','),
                continent,
                country,
                createdAt: serverTime,
                createdBy: id,
                preference,
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
