'use client';
import { AiTripPlanResponse } from 'app/api/openai/getTripPlan';
import { useContext, useEffect } from 'react';

import { SelectedDateContext, TabContext } from '.';
import TripTab from './TripTab';

export type ChatResponseData = {
  plans: AiTripPlanResponse;
  placeSet: {
    name: string;
    selectedCities: string;
  }[];
  places: string[][];
};

const TripDetails = ({ data, country }: { data: ChatResponseData['plans']; country: string }) => {
  const { currentDate } = useContext(SelectedDateContext);
  const { cycle } = useContext(TabContext);

  useEffect(() => {
    cycle(`${currentDate}-0`);
  }, [currentDate]);

  return <TripTab data={data} country={country} />;
};

export default TripDetails;
