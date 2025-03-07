'use client';

import { Marker } from 'react-map-gl/maplibre';

import { ChipMarker } from '@tripie-pyotato/design-system';
import classNames from 'classnames/bind';
import 'maplibre-gl/dist/maplibre-gl.css';
import { LocationMarker } from 'models/Geo';
import Style from './marker.module.scss';
import './marker.scss';

const cx = classNames.bind(Style);

const TripieMarker = ({
  marker,
  action,
  current,
}: {
  marker: LocationMarker;
  action: () => void;
  current: LocationMarker['index'];
}) => {
  return (
    <Marker
      key={`location-${marker.lng} + ${marker.lat}+${marker.index}`}
      longitude={marker.lng}
      latitude={marker.lat}
      anchor="bottom"
      onClick={action}
    >
      <ChipMarker className={cx(marker.label)} selected={current === marker.index}>
        {marker.index}
      </ChipMarker>
    </Marker>
  );
};

export default TripieMarker;
