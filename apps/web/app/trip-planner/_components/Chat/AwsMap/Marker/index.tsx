'use client';

import { Marker, Popup, useMap } from 'react-map-gl/maplibre';

import classNames from 'classnames/bind';
import 'maplibre-gl/dist/maplibre-gl.css';
import { useContext, useEffect, useMemo, useState } from 'react';
import Chip from 'shared/components/Chip/Chip';
import { LocationMarker, TabContext } from '../..';
import Style from './marker.module.scss';
import './marker.scss';

const cx = classNames.bind(Style);

const Markers = ({ locationMarker }: { locationMarker: LocationMarker[] }) => {
  const { current, cycle } = useContext(TabContext);
  const { current: map } = useMap();
  const [popup, setPopup] = useState<string>('');

  // 클릭한 좌표에 따라 중심 변경.
  useEffect(() => {
    if (map) {
      const selectedAreas = locationMarker.filter(v => v.parent === current);
      const center = selectedAreas.reduce(
        (acc, curr, index) => {
          acc.lat += curr.lat;
          acc.lng += curr.lng;
          if (index === selectedAreas.length - 1) {
            acc.lat /= selectedAreas.length;
            acc.lng /= selectedAreas.length;
          }
          return acc;
        },
        { lat: 0, lng: 0 }
      );
      map.flyTo({ center: [center.lng, center.lat] });
    }
  }, [current]);

  // 좌표가 아닌 탭 카드를 클릭시에도 팝업이 되도록
  useEffect(() => {
    setPopup(current);
  }, [current]);

  // 직접 좌표 클릭 또는 탭 카드 클릭으로 인해 팝업을 보여줄 마커들,
  const popupMarkers = useMemo(() => {
    return locationMarker.filter(v => v.parent === current);
  }, [current, popup]);

  return (
    <>
      {popup === current &&
        popupMarkers.map((markers, index) => (
          <Popup
            longitude={markers.lng}
            latitude={markers.lat}
            anchor="bottom"
            offset={24}
            key={`popup-${markers.lng} + ${markers.lat}+${index}`}
            className={cx('popup')}
          >
            {JSON.stringify(markers.info)}
          </Popup>
        ))}
      {locationMarker.map((marker, index) => (
        <Marker
          key={`location-${marker.lng} + ${marker.lat}+${index}`}
          longitude={marker.lng}
          latitude={marker.lat}
          anchor="bottom"
          onClick={() => {
            cycle(marker.parent);
            setPopup(current);
          }}
        >
          <Chip.Marker className={marker.label + 1} marker={marker} popup={popup} />
        </Marker>
      ))}
    </>
  );
};

export default Markers;
