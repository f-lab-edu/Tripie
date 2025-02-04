'use server';

import firestoreService from 'app/api/firebase';
import { CHAT_DB_NAME } from 'constants/auth';
import TripResponse from './_components/TripResponse';
import { ChatResponseData } from './_components/TripResponse/MapTab';

const TripPlan = async ({ params }: { params: Promise<{ id: string }> }) => {
  const id = (await params).id;
  const { data } = await firestoreService.getItem(CHAT_DB_NAME, decodeURIComponent(id));

  return <TripResponse data={JSON.parse(data) as ChatResponseData} />;
};

export default TripPlan;
