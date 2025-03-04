'use client';
import { Container } from '@tripie-pyotato/design-system';
import classNames from 'classnames/bind';
import 'maplibre-gl/dist/maplibre-gl.css';
import Style from './trip-results.module.scss';

import { AI_PLAN } from '../constants/selected';

import ChatTab from 'app/trip-planner/[id]/_components/TripResponse/Tab';
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
    <Container margin="none" className={cx('map-wrap')}>
      <ChatTab data={AI_PLAN.plans} scrollIntoView={false} />
      <AwsMap
        center={center[currentDate]}
        interactive={false}
        style={{ height: '80vh' }}
        initialViewState={{
          zoom: 9,
          ...center[currentDate],
        }}
        locationMarker={locationMarker[currentDate]}
        focusAfterOpen={false}
      />
    </Container>
  );
};
export default TripResultExample;
