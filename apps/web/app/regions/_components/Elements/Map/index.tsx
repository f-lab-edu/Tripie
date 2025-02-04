'use client';

import 'maplibre-gl/dist/maplibre-gl.css';
import './marker.scss';

import { DEFAULT_STYLE, MAP_ID, STYLE } from 'constants/maps';

import classNames from 'classnames/bind';

import { LocationMarker } from 'models/Geo';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { Map, Marker, useMap } from 'react-map-gl/maplibre';
import Lines from 'shared/components/AwsMap/Lines';
import Chip from 'shared/components/Chip/Chip';
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
  const { current: map } = useMap();
  const [popup, setPopup] = useState<string>('');

  // 선택한 여행 일정 카드 (TabCard)의 컨텍스트가 변경되었을 경우 해당 좌표로 포커스
  useEffect(() => {
    const coord = locations.filter(place => place.index === current)[0];
    if (map != null) {
      map.flyTo({ center: [coord.lng, coord.lat] });
    }
  }, [map, current]);

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
          <Chip.Marker
            className={cx('label', marker.index === current ? 'selected' : marker.label)}
            marker={marker}
            popup={popup}
          />
        </Marker>
      ))}
      <Lines locationMarker={locations} />
    </Map>
  );
}

export default AwsMap;
