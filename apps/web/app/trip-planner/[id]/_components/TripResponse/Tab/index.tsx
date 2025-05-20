'use client';
import { AiTripPlanResponse } from 'app/api/openai/getTripPlan';
import { useContext, useEffect } from 'react';

import { Drawer } from '@tripie-pyotato/design-system/@components';
import { SelectedDateContext, TabContext } from '..';
import TripTab from './TripTab';

export type ChatResponseData = {
  plans: AiTripPlanResponse;
  placeSet: {
    name: string;
    selectedCities: string;
  }[];
  places: string[][];
};

const TripDetails = ({
  data,
  isOpen,
  toggleOpen,
}: {
  data: ChatResponseData['plans'];
  isOpen: boolean;
  toggleOpen: (index?: number) => void;
}) => {
  const { currentDate } = useContext(SelectedDateContext);
  const { cycle } = useContext(TabContext);

  useEffect(() => {
    cycle(`${currentDate}-0`);
  }, [currentDate]);

  return (
    <Drawer.Content isOpen={isOpen} toggleOpen={() => toggleOpen()} position="left" exposePercentage={30} margin="none">
      <TripTab data={data} />
    </Drawer.Content>
  );
};

export default TripDetails;
