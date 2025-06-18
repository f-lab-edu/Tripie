'use client';
import Carousel from '@tripie-pyotato/design-system/@components/Carousel';
import Chip from '@tripie-pyotato/design-system/@components/Chip';
import { AwsMap } from '@tripie-pyotato/design-system/@components/x';
import Container from '@tripie-pyotato/design-system/@core/Container';
import Stack from '@tripie-pyotato/design-system/@core/Stack';
import Text from '@tripie-pyotato/design-system/@core/Text';
import { classNames } from '@tripie-pyotato/design-system/@wrappers';

import TabList from 'app/trip-planner/[id]/_components/TripResponse/TabList';
import { API_KEY } from 'constants/maps';
import useAwsMap from 'hooks/awsMap/useAwsMap';
import { AI_PLAN } from '../constants/selected';
import Style from './trip-results.module.scss';

const cx = classNames.bind(Style);

const currentDate = 0;

const TripResultExample = () => {
  const { center, locationMarker } = useAwsMap({
    coordinates: AI_PLAN.coordinates,
    plans: AI_PLAN.plans,
  });

  return (
    <Stack margin="none" className={cx('tab-wrap')} gap="l">
      <Container margin="none" padding="none" withBorder={true} className={cx('chat-tab-wrap')}>
        <Stack direction="column" gap="l" margin="none" alignItems="start" padding="m">
          <Text size={'h2'} bold={true}>
            {AI_PLAN.plans.name}
          </Text>
          <Carousel.Controlled>
            {AI_PLAN.plans.trips.map(trip => (
              <Chip selected={currentDate === trip.day - 1} key={trip.date + trip.day}>
                {trip.day}일차
              </Chip>
            ))}
          </Carousel.Controlled>
          <TabList
            country={'South Korea'}
            scrollIntoView={false}
            key={AI_PLAN.plans.trips[currentDate].date + AI_PLAN.plans.trips[currentDate].day}
            trip={AI_PLAN.plans.trips[currentDate]}
          />
        </Stack>
      </Container>
      <AwsMap
        apiKey={API_KEY}
        center={center[currentDate]}
        interactive={false}
        style={{ height: '85vh' }}
        initialViewState={{
          zoom: 9,
          ...center[currentDate],
        }}
        locationMarker={locationMarker[currentDate]}
        currentMarker={'0-0'}
        setCurrentMarker={() => null}
      />
    </Stack>
  );
};
export default TripResultExample;
