'use client';

import 'maplibre-gl/dist/maplibre-gl.css';

import { Chip } from '../../data-display';
import { LocationMarker } from '../Map/Map.client';
import Marker, { MarkerAnchor } from './Marker.client';
import './marker.scss';

const TripieMarker = ({
  marker,
  action,
  current,
  anchor = 'bottom',
}: {
  marker: LocationMarker;
  action: () => void;
  current: LocationMarker['index'];
  anchor?: MarkerAnchor;
}) => {
  return (
    <Marker coordinates={{ lat: marker.lat, lng: marker.lng }} anchor={anchor} onClick={action}>
      <Chip.Marker variant={marker.label} selected={current === marker.index}>
        {+marker.index.split('-')[1] + 1}
      </Chip.Marker>
    </Marker>
  );
};

export default TripieMarker;
