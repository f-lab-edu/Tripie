'use client';
import { AiTripPlanResponse } from 'app/api/openai/getTripPlan';
import useAwsMap from 'hooks/awsMap/useAwsMap';
import { Coordinate } from 'models/Geo';
import { useContext, useEffect } from 'react';
import AwsMap from 'shared/components/AwsMap';

import { SelectedDateContext, TabContext } from '.';

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

  return (
    <AwsMap
      style={{ height: '100vh', border: 'none' }}
      interactive={true}
      center={center[currentDate]}
      locationMarker={locationMarker[currentDate]}
    />
  );
};

export default TripMap;
