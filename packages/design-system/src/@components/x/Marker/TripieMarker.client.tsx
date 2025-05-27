'use client';

import 'maplibre-gl/dist/maplibre-gl.css';

import { Marker } from 'wrappers';
import { Chip } from '../../data-display';
import { LocationMarker } from '../Map/Map.client';
import './marker.scss';

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
