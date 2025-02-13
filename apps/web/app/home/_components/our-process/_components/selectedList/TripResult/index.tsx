'use client';
import { TripieContainer } from '@tripie-pyotato/design-system';
import classNames from 'classnames/bind';
import 'maplibre-gl/dist/maplibre-gl.css';
import Style from './trip-results.module.scss';

import { Map } from 'react-map-gl/maplibre';

import { AI_PLAN } from '../constants/selected';

import ChatTab from 'app/trip-planner/[id]/_components/TripResponse/Tab';
import { FULL_MAP_STYLE, MAP_ID, STYLE } from 'constants/maps';
import useAwsMap from 'hooks/awsMap/useAwsMap';
import Lines from 'shared/components/AwsMap/Lines';
import Markers from 'shared/components/AwsMap/Marker';

const cx = classNames.bind(Style);

const currentDate = 0;

const TripResultExample = () => {
  const { center, locationMarker } = useAwsMap({
    coordinates: AI_PLAN.coordinates,
    plans: AI_PLAN.plans,
  });

  return (
    <TripieContainer margin="none" className={cx('map-wrap')}>
      <ChatTab data={AI_PLAN.plans} scrollIntoView={false} />
      <Map
        id={MAP_ID}
        interactive={false}
        initialViewState={{
          zoom: 9,
          ...center[currentDate],
        }}
        style={FULL_MAP_STYLE}
        mapStyle={STYLE}
      >
        <Markers locationMarker={locationMarker[currentDate]} focusAfterOpen={false} />
        <Lines locationMarker={locationMarker[currentDate]} />
      </Map>
    </TripieContainer>
  );
};
export default TripResultExample;
