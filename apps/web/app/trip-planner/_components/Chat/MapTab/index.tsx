'use client';

import { AiTripPlanResponse } from 'app/api/chat/route';
import useAwsMap from 'hooks/awsMap/useAwsMap';
import { Coordinate } from 'models/Geo';
import { useContext, useEffect } from 'react';
import { SelectedDateContext, TabContext } from '..';
import AwsMap from '../AwsMap';
import ChatTab from '../Tab';

export type ChatResponseData = {
  plans: AiTripPlanResponse;
  placeSet: {
    name: string;
    selectedCities: string;
  }[];
  places: string[][];
};

const MapTab = ({ data, coordinates }: { data: ChatResponseData['plans']; coordinates: Coordinate[][] }) => {
  const { currentDate } = useContext(SelectedDateContext);
  const { cycle } = useContext(TabContext);
  const { center, locationMarker } = useAwsMap({ coordinates, plans: data });

  useEffect(() => {
    cycle(`${currentDate}-0`);
  }, [currentDate]);

  return (
    <>
      <ChatTab data={data} />
      <AwsMap center={center[currentDate]} locationMarker={locationMarker[currentDate]} />
    </>
  );
};

export default MapTab;
