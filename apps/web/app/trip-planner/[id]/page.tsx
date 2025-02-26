'use server';

import firestoreService from 'app/api/firebase';
import { sharedMetaData } from 'app/shared-metadata';
import API from 'constants/api-routes';
import { CHAT_DB_NAME } from 'constants/auth';
import ROUTE from 'constants/routes';
import { Metadata } from 'next';
import TripResponse from './_components/TripResponse';
import { ChatResponseData } from './_components/TripResponse/MapTab';

// https://nextjs.org/docs/app/building-your-application/optimizing/metadata
type Props = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const id = (await params).id;
  const { data } = await firestoreService.getItem(CHAT_DB_NAME, decodeURIComponent(id));

  const parsedData = JSON.parse(data) as ChatResponseData;
  const title = parsedData.plans.name;
  const day1tripPlan = parsedData.plans.trips[0];

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
  const { data } = await firestoreService.getItem(CHAT_DB_NAME, decodeURIComponent(id));

  return <TripResponse data={JSON.parse(data) as ChatResponseData} />;
};

export default TripPlan;
