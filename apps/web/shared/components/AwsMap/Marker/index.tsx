'use client';

import { Popup, useMap } from 'wrapper';

import { TabContext } from 'app/trip-planner/[id]/_components/TripResponse';
import usePopUp from 'hooks/awsMap/usePopUp';
import 'maplibre-gl/dist/maplibre-gl.css';
import { LocationMarker } from 'models/Geo';
import { useContext, useEffect } from 'react';

import TripieMarker from './TripieMarker';

const Markers = ({
  locationMarker,
  focusAfterOpen,
}: {
  locationMarker: LocationMarker[];
  focusAfterOpen?: boolean;
}) => {
  const { current, cycle } = useContext(TabContext);
  const { setPopup, popup, setCurrentSelected, popupMarkers, currentSelected } = usePopUp({ locationMarker, current });
  const { current: map } = useMap();

  // 선택한 여행 일정 카드 (TabCard)의 컨텍스트가 변경되었을 경우 해당 좌표로 포커스
  useEffect(() => {
    const coord = locationMarker.filter(place => place.index === current)[0];
    if (map != null) {
      map.flyTo({ center: [coord.lng, coord.lat] });
    }
  }, [map, current, currentSelected]);

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
          >
            {JSON.stringify(markers.info)}
          </Popup>
        ))}
      {locationMarker.map(marker => (
        <TripieMarker
          current={current}
          marker={marker}
          key={`location-${marker.lng} + ${marker.lat}+${marker.index}`}
          action={() => {
            cycle(marker.index);
            setPopup(marker.index);
            setCurrentSelected(marker.index);
          }}
        />
      ))}
    </>
  );
};

export default Markers;
