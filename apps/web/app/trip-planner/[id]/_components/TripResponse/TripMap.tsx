'use client';
import { AwsMap } from '@tripie-pyotato/design-system/@components/x';
import { AiTripPlanResponse } from 'app/api/openai/getTripPlan';
import { API_KEY } from 'constants/maps';
import useAwsMap from 'hooks/awsMap/useAwsMap';
import { Coordinate } from 'models/Geo';
import { useContext, useEffect } from 'react';
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
    <AwsMap.WithContext
      apiKey={API_KEY}
      style={{ height: '100vh', border: 'none' }}
      interactive={true}
      center={center[currentDate]}
      TabContext={TabContext}
      locationMarker={locationMarker[currentDate]}
    />
  );
};

export default TripMap;
