'use client';
import { classNames } from 'wrapper';

import { Carousel, Chip } from '@tripie-pyotato/design-system/@components';
import { Headings, Stack } from '@tripie-pyotato/design-system/@core';

import { useContext } from 'react';

import { AiTripPlanResponse } from 'app/api/openai/getTripPlan';
import { SelectedDateContext } from '..';
import TabList from '../TabList';

import Style from './trip-tab.module.scss';

const cx = classNames.bind(Style);

const TripTab = ({
  data,
  country,
  scrollIntoView = true,
}: {
  data: AiTripPlanResponse;
  country: string;
  scrollIntoView?: boolean;
}) => {
  // 일정 중 선택한 여행 날짜 컨텍스트
  const { currentDate, dateCycle } = useContext(SelectedDateContext);

  return (
    <Stack
      direction="column"
      gap="l"
      margin="m"
      alignItems="start"
      applyMargin="all"
      padding="sm"
      applyPadding="top"
      className={cx('trip-tab-content-wrap')}
    >
      {/* <TokenStatus /> */}
      <Headings.H2> {data.name}</Headings.H2>
      <Carousel.Controlled>
        {data.trips.map(trip => (
          <Chip
            selected={currentDate === trip.day - 1}
            onClick={() => {
              dateCycle(trip.day - 1);
            }}
            key={trip.date + trip.day}
          >
            {trip.day}일차
          </Chip>
        ))}
      </Carousel.Controlled>
      <TabList
        country={country}
        scrollIntoView={scrollIntoView}
        key={data.trips[currentDate].date + data.trips[currentDate].day}
        trip={data.trips[currentDate]}
      />
    </Stack>
  );
};

export default TripTab;
