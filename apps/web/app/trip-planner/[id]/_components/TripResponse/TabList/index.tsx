'use client';

import { Container, Stack } from '@tripie-pyotato/design-system/@core';
import { classNames } from '@tripie-pyotato/design-system/@wrappers';

import { TripContent } from 'models/Aws';
import TabCard from '../TabCard';

import Style from './tab-list.module.scss';

const cx = classNames.bind(Style);

const TabList = ({
  trip,
  scrollIntoView,
  country,
}: {
  country: string;
  trip: TripContent;
  scrollIntoView?: boolean;
}) => {
  return (
    <Container margin="none" className={cx('over-flow-wrap')}>
      <Stack
        className={cx('trip-list-wrap')}
        direction="column"
        gap="l"
        margin="m"
        applyMargin="bottom"
        padding="none"
        applyPadding="bottom"
      >
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
            country={country}
          />
        ))}
      </Stack>
    </Container>
  );
};

export default TabList;
