'use client';
import { classNames } from 'wrapper';

import { List } from '@tripie-pyotato/design-system/@components';
import { Headings, Text } from '@tripie-pyotato/design-system/@components/core';

import Style from './tab-list.module.scss';

import { TripContent } from 'models/Aws';
import TabCard from '../Card/TabCard';

const cx = classNames.bind(Style);

const TabList = ({ trip, scrollIntoView }: { trip: TripContent; scrollIntoView?: boolean }) => {
  return (
    <List view={'column'} gap="l">
      <List.Item>
        <Headings.H3>
          <Text.Accented>Day {trip.day}</Text.Accented>
        </Headings.H3>
      </List.Item>
      <List.Item>{trip.date}</List.Item>
      <List.Item className={cx('trip-item')}>
        {trip.activities.map(({ activity, comments, label, place }, index) => (
          <TabCard
            label={label}
            trip={trip}
            index={index}
            activity={activity}
            comments={comments}
            key={label + index}
            place={place}
            scrollIntoView={scrollIntoView}
          />
        ))}
      </List.Item>
    </List>
  );
};

export default TabList;
