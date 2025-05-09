'use client';

import { Headings, List, Stack, Text } from '@tripie-pyotato/design-system/@core';

import { TripContent } from 'models/Aws';
import TabCard from './Card/TabCard';

const TabList = ({ trip, scrollIntoView }: { trip: TripContent; scrollIntoView?: boolean }) => {
  return (
    <List view={'column'} gap="l">
      <List.Item>
        <Headings.H3>
          <Text.Accented>Day {trip.day}</Text.Accented>
        </Headings.H3>
      </List.Item>
      <List.Item>{trip.date}</List.Item>
      <List.Item>
        <Stack direction="column" gap="l" margin="none">
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
      </List.Item>
    </List>
  );
};

export default TabList;
