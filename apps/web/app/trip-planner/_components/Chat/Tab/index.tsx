'use client';
import classNames from 'classnames/bind';

import { Headings } from '@tripie-pyotato/design-system';
import { AiTripPlanResponse } from 'app/api/chat/route';
import { useContext } from 'react';
import Card from 'shared/components/Card/Card';
import List from 'shared/components/List/List';
import Style from './tab-chat.module.scss';

import Chip from 'shared/components/Chip/Chip';

import { SelectedDateContext } from '..';
import TabList from './List';

const cx = classNames.bind(Style);

const ChatTab = ({ data, scrollIntoView = true }: { data: AiTripPlanResponse; scrollIntoView?: boolean }) => {
  // 일정 중 선택한 여행 날짜 컨텍스트
  const { currentDate, dateCycle } = useContext(SelectedDateContext);
  return (
    <Card.Content className={cx('text-left', 'card-wrap', 'trip-list-wrap')}>
      <Headings.H2> {data.name}</Headings.H2>
      <List className={cx('trip-days-chips-wrap')}>
        {data.trips.map(trip => (
          <Chip
            className={cx('chip')}
            key={trip.date + trip.day}
            selected={currentDate === trip.day - 1}
            onClick={() => dateCycle(trip.day - 1)}
          >
            {trip.day}일차
          </Chip>
        ))}
      </List>
      <TabList
        scrollIntoView={scrollIntoView}
        key={data.trips[currentDate].date + data.trips[currentDate].day}
        trip={data.trips[currentDate]}
      />
    </Card.Content>
  );
};

export default ChatTab;
