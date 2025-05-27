'use client';

import 'maplibre-gl/dist/maplibre-gl.css';
import { Context, Dispatch, SetStateAction, useContext, useEffect } from 'react';

import { Popup } from 'wrappers';
import usePopUp from '../../../@hooks/usePopUp.client';
import { LocationMarker } from '../Map/Map.client';
import TripieMarker from './TripieMarker.client';

const Markers = ({
  locationMarker,
  focusAfterOpen,
  MapContext,
}: {
  locationMarker: LocationMarker[];
  focusAfterOpen?: boolean;
  MapContext: Context<{
    current: string;
    cycle: Dispatch<SetStateAction<string>>;
  }>;
}) => {
  const { current, cycle } = useContext(MapContext);
  const { setPopup, popup, map, setCurrentSelected, popupMarkers, currentSelected } = usePopUp({
    locationMarker,
    current,
  });

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
