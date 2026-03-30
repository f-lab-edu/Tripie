'use client';

import { AiTripPlanResponse } from 'app/api/openai/getTripPlan';
import useAwsMap from 'hooks/awsMap/useAwsMap';
import { Coordinate } from 'models/Geo';
import dynamic from 'next/dynamic';
import { useContext, useEffect } from 'react';
import { SelectedDateContext, TabContext } from '.';

const AwsMap = dynamic(() => import('../../../../../shared/components/AwsMap').then(mod => mod.default), {
  ssr: false,
});

export type ChatResponseData = {
  plans: AiTripPlanResponse;
  placeSet: {
    name: string;
    selectedCities: string;
  }[];
  places: string[][];
};

const TripMap = ({ data, coordinates }: { data: ChatResponseData['plans']; coordinates: Coordinate[][] }) => {
  const { currentDate } = useContext(SelectedDateContext);
  const { cycle } = useContext(TabContext);
  const { center, locationMarker } = useAwsMap({ coordinates, plans: data });

  useEffect(() => {
    cycle(`${currentDate}-0`);
  }, [currentDate]);

  return <AwsMap center={center[currentDate]} TabContext={TabContext} locationMarker={locationMarker[currentDate]} />;
};

export default TripMap;
