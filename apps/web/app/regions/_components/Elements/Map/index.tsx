'use client';

import 'maplibre-gl/dist/maplibre-gl.css';
import './marker.scss';

import { DEFAULT_STYLE, MAP_ID, STYLE } from 'constants/maps';

import classNames from 'classnames/bind';

import { ChipMarker } from '@tripie-pyotato/design-system';
import { LocationMarker } from 'models/Geo';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { Map, Marker } from 'react-map-gl/maplibre';
import Lines from 'shared/components/AwsMap/Lines';
import Style from './map.module.scss';
export type AwsMapCenter = { longitude: number; latitude: number };

const cx = classNames.bind(Style);

function AwsMap({
  locations,
  center,
  current,
  setCurrent,
  zoom = 10,
}: Readonly<{
  current: string;
  setCurrent?: Dispatch<SetStateAction<string>>;
  locations: LocationMarker[];
  center: AwsMapCenter;
  zoom?: number;
}>) {
  const [popup, setPopup] = useState<string>('');

  useEffect(() => {
    scrollTo({ top: 0 });
  }, []);

  useEffect(() => {
    setPopup(current);
  }, [current]);

  return (
    <Map
      id={MAP_ID}
      initialViewState={{
        ...center,
        zoom,
      }}
      interactive={true}
      style={DEFAULT_STYLE}
      mapStyle={STYLE}
    >
      {locations.map((marker, index) => (
        <Marker
          key={`location-${marker.lng} + ${marker.lat}+${index}`}
          longitude={marker.lng as number}
          latitude={marker.lat as number}
          anchor="bottom"
          onClick={() => {
            if (setCurrent) {
              setCurrent(marker.index);
            }
            setPopup(marker.index);
          }}
        >
          <ChipMarker className={cx(marker.label)} selected={current === marker.index} popup={popup}>
            {marker.index}
          </ChipMarker>
        </Marker>
      ))}
      <Lines locationMarker={locations} />
    </Map>
  );
}

export default AwsMap;
