'use client';
import { classNames } from 'wrapper';

import { Card, Carousel, Chip } from '@tripie-pyotato/design-system/@components';
import { Headings } from '@tripie-pyotato/design-system/@core';

import { useContext } from 'react';

import { AiTripPlanResponse } from 'app/api/openai/getTripPlan';
import { SelectedDateContext } from '..';
import TabList from './List';
import Style from './tab-chat.module.scss';
import TokenStatus from './TokenStatus';

const cx = classNames.bind(Style);

const TripTab = ({ data, scrollIntoView = true }: { data: AiTripPlanResponse; scrollIntoView?: boolean }) => {
  // 일정 중 선택한 여행 날짜 컨텍스트
  const { currentDate, dateCycle } = useContext(SelectedDateContext);

  return (
    <Card sizes={'full'} margin={'none'} className={cx('trip-tab-wrap')} padding="md" applyPadding={'top'}>
      <Card.Description padding={'md'} margin="l" applyPadding={'all'} applyMargin="top">
        <TokenStatus />
        <Headings.H2> {data.name}</Headings.H2>
        <Carousel.Controlled>
          {data.trips.map(trip => (
            <Chip
              className={cx('chip')}
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
          scrollIntoView={scrollIntoView}
          key={data.trips[currentDate].date + data.trips[currentDate].day}
          trip={data.trips[currentDate]}
        />
      </Card.Description>
    </Card>
  );
};

export default TripTab;
