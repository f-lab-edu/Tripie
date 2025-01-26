'use client';

import { LocationMarker } from 'app/trip-planner/_components/Chat';
import { useEffect, useMemo, useState } from 'react';
import { useMap } from 'react-map-gl/maplibre';

/**

 */

const usePopUp = ({ locationMarker, current }: { locationMarker: LocationMarker[]; current: string }) => {
  const [popup, setPopup] = useState<string>('');
  const { current: map } = useMap();
  const [currentSelected, setCurrentSelected] = useState(`${current}-0`);

  // 좌표가 아닌 탭 카드를 클릭시에도 팝업이 되도록
  useEffect(() => {
    setPopup(current);
  }, [current]);

  // 직접 좌표 클릭 또는 탭 카드 클릭으로 인해 팝업을 보여줄 마커들,
  const popupMarkers = useMemo(() => {
    return locationMarker.filter(v => v.index === currentSelected[0]);
  }, [current, popup]);

  // 클릭한 마커를 중심점으로 이동
  useEffect(() => {
    if (map != null) {
      const selectedCoordinate = locationMarker.filter(v => v.index === currentSelected)[0];
      if (selectedCoordinate != null) {
        map.flyTo({ center: [selectedCoordinate.lng, selectedCoordinate.lat] });
      }
    }
  }, [current, currentSelected]);

  return {
    popupMarkers,
    // ,
    // currentSelected
    popup,
    setPopup,
    map,
    currentSelected,
    setCurrentSelected,
  };
};
export default usePopUp;
