'use client';

import 'maplibre-gl/dist/maplibre-gl.css';

import { Key, ReactNode } from 'react';
import { COLORS } from 'shared';
import { MapLibreMarker, classNames } from '../../../wrappers';
import { LocationMarker } from '../Map';
import Style from './marker.module.scss';
import Markers from './Markers.client';

const cx = classNames.bind(Style);

export type MarkerAnchor =
  | 'center'
  | 'left'
  | 'right'
  | 'top'
  | 'bottom'
  | 'top-left'
  | 'top-right'
  | 'bottom-left'
  | 'bottom-right'
  | undefined;

const Marker = ({
  coordinates,
  key,
  anchor = 'bottom',
  onClick,
  children,
  color = COLORS['50'],
}: {
  coordinates: { lng: LocationMarker['lng']; lat: LocationMarker['lat'] };
  key?: Key;
  anchor?: MarkerAnchor;
  onClick?: () => void;
  children?: ReactNode;
  color?: string;
}) => {
  return (
    <MapLibreMarker
      color={color}
      key={key}
      longitude={coordinates.lng}
      latitude={coordinates.lat}
      anchor={anchor}
      onClick={onClick}
      className={cx('marker')}
    >
      {children ?? null}
    </MapLibreMarker>
  );
};

Marker.WithTabContext = Markers;

export default Marker;
