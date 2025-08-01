'use client';
import { Button, Carousel, Divider } from '@tripie-pyotato/design-system/@components';
import { Headings, Stack, Text } from '@tripie-pyotato/design-system/@core';
import { classNames } from '@tripie-pyotato/design-system/@wrappers';

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
      fillAvailable={false}
      margin="m"
      alignItems="start"
      applyMargin="all"
      padding="sm"
      applyPadding="top"
      className={cx('trip-tab-content-wrap')}
    >
      <Stack
        className={cx('sticky')}
        direction="column"
        gap="l"
        margin="none"
        padding="m"
        alignItems="start"
        applyPadding="top"
      >
        <Headings.H2>{data.name}</Headings.H2>
        <Carousel.Controlled>
          {data.trips.map(trip => (
            <Button
              className={cx('trip-tab-day-button')}
              onClick={() => {
                dateCycle(trip.day - 1);
              }}
              key={trip.date + trip.day}
              selected={currentDate === trip.day - 1}
            >
              {trip.day}일차
            </Button>
          ))}
        </Carousel.Controlled>

        <Text size="h3" bold={true} noGapUnderText={true}>
          <Text.Accented>Day {data.trips[currentDate].day}</Text.Accented>
          <Text size="small">&nbsp;| {data.trips[currentDate].date}</Text>
        </Text>
        <Divider />
      </Stack>

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
