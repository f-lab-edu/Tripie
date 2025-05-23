'use client';

import { Container, Stack, Text } from '@tripie-pyotato/design-system/@core';

import { TripContent } from 'models/Aws';
import TabCard from './TabCard';

import Style from './tab-chat.module.scss';

import { classNames } from 'wrapper';

const cx = classNames.bind(Style);

const TabList = ({ trip, scrollIntoView }: { trip: TripContent; scrollIntoView?: boolean }) => {
  return (
    <Stack direction={'column'} gap="l" alignItems="start" margin="none">
      <Stack direction={'column'} margin="m" gap="none" applyMargin="top">
        {trip.date}
        <Text size="h3" bold={true} isButtonText={true}>
          <Text.Accented>Day {trip.day}</Text.Accented>
        </Text>
      </Stack>
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
            />
          ))}
        </Stack>
      </Container>
    </Stack>
  );
};

export default TabList;
