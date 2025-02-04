'use client';

import { Marker, Popup, useMap } from 'react-map-gl/maplibre';

import { TabContext } from 'app/trip-planner/[id]/_components/TripResponse';
import classNames from 'classnames/bind';
import usePopUp from 'hooks/awsMap/usePopUp';
import 'maplibre-gl/dist/maplibre-gl.css';
import { LocationMarker } from 'models/Geo';
import { useContext, useEffect } from 'react';
import Chip from 'shared/components/Chip/Chip';
import getMarkerLabel from 'utils/marker';
import Style from './marker.module.scss';
import './marker.scss';

const cx = classNames.bind(Style);

const Markers = ({
  locationMarker,
  focusAfterOpen,
}: {
  locationMarker: LocationMarker[];
  focusAfterOpen?: boolean;
}) => {
  const { current, cycle } = useContext(TabContext);
  const { setPopup, popup, setCurrentSelected, popupMarkers } = usePopUp({ locationMarker, current });
  const { current: map } = useMap();

  // 선택한 여행 일정 카드 (TabCard)의 컨텍스트가 변경되었을 경우 해당 좌표로 포커스
  useEffect(() => {
    const coord = locationMarker.filter(place => place.index === current)[0];
    if (map != null) {
      map.flyTo({ center: [coord.lng, coord.lat] });
    }
  }, [map, current]);

  return (
    <>
      {popup === current &&
        popupMarkers.map((markers, index) => (
          <Popup
            longitude={markers.lng}
            latitude={markers.lat}
            anchor="bottom"
            offset={24}
            focusAfterOpen={focusAfterOpen}
            key={`popup-${markers.lng} + ${markers.lat}+${index}`}
            className={cx('popup')}
          >
            {JSON.stringify(markers.info)}
          </Popup>
        ))}
      {locationMarker.map(marker => (
        <Marker
          key={`location-${marker.lng} + ${marker.lat}+${marker.index}`}
          longitude={marker.lng}
          latitude={marker.lat}
          anchor="bottom"
          onClick={() => {
            cycle(marker.index);
            setPopup(marker.index);
            setCurrentSelected(marker.index);
          }}
        >
          <Chip.Marker className={cx(getMarkerLabel(marker.label))} marker={marker} popup={popup} />
        </Marker>
      ))}
    </>
  );
};

export default Markers;
