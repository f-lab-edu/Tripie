'use client';
import { Container } from '@tripie-pyotato/design-system';
import classNames from 'classnames/bind';
import 'maplibre-gl/dist/maplibre-gl.css';
import Style from './trip-results.module.scss';

import ChatTab from 'app/trip-planner/_components/Chat/Tab';
import { Map } from 'react-map-gl/maplibre';

import { AI_PLAN } from '../constants/selected';

import Lines from 'app/trip-planner/_components/Chat/AwsMap/Lines';
import Markers from 'app/trip-planner/_components/Chat/AwsMap/Marker';
import { MAP_ID, STYLE } from 'constants/maps';
import useAwsMap from 'hooks/awsMap/useAwsMap';

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
      <Map
        id={MAP_ID}
        interactive={false}
        initialViewState={{
          zoom: 9,
          ...center[currentDate],
        }}
        style={{ width: '100%', height: '85vh', display: 'inline-block', borderRadius: '8px' }}
        mapStyle={STYLE}
      >
        <Markers locationMarker={locationMarker[currentDate]} focusAfterOpen={false} />
        <Lines locationMarker={locationMarker[currentDate]} />
      </Map>
    </Container>
  );
};
export default TripResultExample;
