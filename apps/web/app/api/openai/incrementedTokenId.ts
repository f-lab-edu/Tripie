import { TripPlanner } from 'models/Aws';

import { CHAT_CACHE_DB_NAME, DB_NAME, IP_TOKEN_DB_NAME } from 'constants/auth';
import firestoreService from '../firebase';
import { SuccessResponse } from './getTripPlan';

async function incrementedTokenId(
  chatItems: TripPlanner,
  id: string,
  data: SuccessResponse['data'],
  serverTime: string,
  ip?: string
) {
  // For test users (with IP), increment IP-based token counter
  // For OAuth users, increment individual token counter
  if (ip) {
    await firestoreService.incrementIpToken(IP_TOKEN_DB_NAME, ip);
  } else {
    await firestoreService.increment(DB_NAME, id, 'usedTokens');
  }

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
