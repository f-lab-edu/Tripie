'use client';
import 'maplibre-gl/dist/maplibre-gl.css';
import { classNames } from 'wrapper';
import Style from './trip-results.module.scss';

import { AI_PLAN } from '../constants/selected';

import { Stack } from '@tripie-pyotato/design-system/@core';
import ChatTab from 'app/trip-planner/[id]/_components/TripResponse/TripTab';
import useAwsMap from 'hooks/awsMap/useAwsMap';
import AwsMap from 'shared/components/AwsMap';

const cx = classNames.bind(Style);

const currentDate = 0;

const TripResultExample = () => {
  const { center, locationMarker } = useAwsMap({
    coordinates: AI_PLAN.coordinates,
    plans: AI_PLAN.plans,
  });

  return (
    <Stack margin="none" className={cx('tab-wrap')}>
      <ChatTab data={AI_PLAN.plans} scrollIntoView={false} country={'South Korea'} />
      <AwsMap
        center={center[currentDate]}
        interactive={false}
        style={{ height: '85vh' }}
        initialViewState={{
          zoom: 9,
          ...center[currentDate],
        }}
        locationMarker={locationMarker[currentDate]}
        focusAfterOpen={false}
      />
    </Stack>
  );
};
export default TripResultExample;
