'use server';

import firestoreService from 'app/api/firebase';
import { sharedMetaData } from 'app/shared-metadata';
import API from 'constants/api-routes';
import { CHAT_CACHE_DB_NAME } from 'constants/auth';
import ROUTE from 'constants/routes';
import { TripContent } from 'models/Aws';
import { Metadata } from 'next';
import Error from 'shared/components/Error';
import TripResponse from './_components/TripResponse';
import { ChatResponseData } from './_components/TripResponse/TripDetails';

// https://nextjs.org/docs/app/building-your-application/optimizing/metadata
type Props = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const id = (await params).id;

  const plan = await firestoreService.getItem(CHAT_CACHE_DB_NAME, decodeURIComponent(id));

  if (plan?.data == null) {
    return { title: sharedMetaData?.title, description: sharedMetaData?.description, openGraph: sharedMetaData };
  }

  const parsedData = JSON.parse(plan.data) as ChatResponseData;
  const title = parsedData.plans.name;
  const day1tripPlan: TripContent = parsedData.plans.trips[0];

  const description = `${title} ${parsedData.plans.trips.length}일 여행\n <${day1tripPlan.day} 일차> ${day1tripPlan.date}\n${day1tripPlan.activities.map(plan => `${plan.time} | ${plan.activity} | ${plan.comments}\n`).join('')} ...\n👉 트리피에서 자세히 알아보기!`;

  return {
    title,
    description,
    openGraph: {
      ...sharedMetaData,
      title,
      description,
      url: `${API.BASE_URL}${ROUTE.TRIP_PLANNER.href}/${id}`,
    },
  };
}

const TripPlan = async ({ params }: { params: Promise<{ id: string }> }) => {
  const id = (await params).id;

  const plan = await firestoreService.getItem(CHAT_CACHE_DB_NAME, decodeURIComponent(id));

  if (plan?.data == null) {
    return <Error message="trip plan does not exist" />;
  }

  return <TripResponse country={plan.country} data={JSON.parse(plan.data) as ChatResponseData} />;
};

export default TripPlan;
