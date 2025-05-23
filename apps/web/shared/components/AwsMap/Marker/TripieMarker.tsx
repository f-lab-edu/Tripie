'use client';

import { Chip } from '@tripie-pyotato/design-system/@components';
import 'maplibre-gl/dist/maplibre-gl.css';
import { LocationMarker } from 'models/Geo';
import { classNames, Marker } from 'wrapper';
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
      <Chip.Marker variant={marker.label} selected={current === marker.index}>
        {+marker.index.split('-')[1] + 1}
      </Chip.Marker>
    </Marker>
  );
};

export default TripieMarker;
