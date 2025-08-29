'use client';
import Carousel from '@tripie-pyotato/design-system/@components/Carousel';
import Chip from '@tripie-pyotato/design-system/@components/Chip';
import Container from '@tripie-pyotato/design-system/@core/Container';
import Stack from '@tripie-pyotato/design-system/@core/Stack';
import Text from '@tripie-pyotato/design-system/@core/Text';
import TabList from 'app/trip-planner/[id]/_components/TripResponse/TabList';
import useAwsMap from 'hooks/awsMap/useAwsMap';
import dynamic from 'next/dynamic';
import { classNames } from '../../../../../../wrapper/classNames';
import { AI_PLAN } from '../constants/selected';
import Style from './trip-results.module.scss';

const cx = classNames.bind(Style);

const currentDate = 0;

const AwsMap = dynamic(() => import('../../../../../../shared/components/AwsMap').then(mod => mod.default), {
  ssr: false,
});

const TripResultExample = () => {
  const { center, locationMarker } = useAwsMap({
    coordinates: AI_PLAN.coordinates,
    plans: AI_PLAN.plans,
  });

  return (
    <Stack
      margin="none"
      dimension={[{ apply: 'h', size: 48, unit: 'vh' }]}
      className={cx('tab-wrap')}
      gap="l"
      flexWrapOn={'wrap-md'}
    >
      <Container
        margin="none"
        padding="none"
        withBorder={true}
        className={cx('chat-tab-wrap')}
        dimension={[{ apply: 'h', size: 48, unit: 'vh' }]}
      >
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
        center={center[currentDate]}
        interactive={false}
        height="48vh"
        zoom={9}
        locationMarker={locationMarker[currentDate]}
        currentMarker={'0-0'}
        setCurrentMarker={() => null}
      />
    </Stack>
  );
};
export default TripResultExample;
