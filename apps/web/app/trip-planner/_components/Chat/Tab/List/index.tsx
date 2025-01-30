'use client';
import classNames from 'classnames/bind';

import { Headings } from '@tripie-pyotato/design-system';

import List from 'shared/components/List/List';
import Style from './tab-list.module.scss';

import { TripContent } from 'models/Aws';
import TabCard from '../Card/TabCard';

const cx = classNames.bind(Style);

const TabList = ({ trip, scrollIntoView }: { trip: TripContent; scrollIntoView?: boolean }) => {
  return (
    <List className={cx('list-wrap')}>
      <li>
        <Headings.H3 className={cx('accented')}>Day {trip.day}</Headings.H3>
      </li>
      <li>{trip.date}</li>
      <li className={cx('trip-item')}>
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
      </li>
    </List>
  );
};

export default TabList;
