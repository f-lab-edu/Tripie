import API from 'constants/api-routes';
import { CHAT_CACHE_DB_NAME, DB_NAME } from 'constants/auth';
import { TripPlanner } from 'models/Aws';
import firestoreService from '../firebase';
import { SuccessResponse } from './getTripPlan';

async function incrementedTokenId(chatItems: TripPlanner, id: string, data: SuccessResponse['data']) {
  const { serverTime } = await fetch(`${API.BASE}${API.SERVER_TIME}`).then(v => v.json());
  await firestoreService.increment(DB_NAME, id, 'usedTokens');
  const {
    duration,
    companion,
    continent,
    country,
    preference,
    city: { selected },
  } = chatItems;

  return (
    (await firestoreService.getAddedItemId(CHAT_CACHE_DB_NAME, {
      duration,
      data: JSON.stringify(data),
      city: selected,
      companion: companion.split(','),
      continent,
      country,
      createdAt: serverTime,
      createdBy: id,
      preference,
    })) ?? null
  );
}

export default incrementedTokenId;
