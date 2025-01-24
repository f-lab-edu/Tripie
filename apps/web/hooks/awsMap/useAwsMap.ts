'use client';

import { AiTripPlanResponse } from 'app/api/chat/route';
import { Coordinate } from 'models/Geo';
import { useMemo } from 'react';
// import { useMap } from 'react-map-gl/dist/esm/exports-maplibre';

/**
    지도의 중심점, 좌표, 표기할 마커 정보를 리턴
 */
const useAwsMap = ({ coordinates, plans }: { coordinates: Coordinate[][]; plans: AiTripPlanResponse }) => {
  // const { current } = useMap();
  /**
   * 지도의 중심의 경도와 위도.
   * 경도와 위도의 좌표들의 평균 지점
   */
  const center = useMemo(() => {
    return coordinates.map(coordinate =>
      coordinate.reduce(
        (acc, curr, index) => {
          const [lat, lng] = curr;
          acc.longitude += lng;
          acc.latitude += lat;

          if (index === coordinate.length - 1) {
            acc.longitude /= coordinate.length;
            acc.longitude = +acc.longitude.toFixed(4);
            acc.latitude /= coordinate.length;
            acc.latitude = +acc.latitude.toFixed(4);
          }
          return acc;
        },
        { longitude: 0, latitude: 0 }
      )
    );
  }, [coordinates]);

  /**
   * 위치 정보, 인덱스, 위치 타입 (label) 정보를 지도에 표시하기 위한 마커 정보들
   */
  const locationMarker = useMemo(() => {
    return coordinates.map((coordinateByDate, index) =>
      coordinateByDate.map((coordinate, activityIndex) => {
        const [lat, lng] = coordinate as unknown as Coordinate;
        return {
          lat,
          lng,
          info: plans.trips[index].activities[activityIndex].place,
          index: `${index}-${activityIndex}`,
          parent: `${activityIndex}`,
          label: plans.trips[index].activities[activityIndex].label,
        };
      })
    );
  }, []);

  // useEffect(() => {
  //   if (current != null) {
  //     current.flyTo([center[currentDate].longitude, center[currentDate].latitude] as FlyToOptions);
  //     console.log(center[currentDate].longitude, center[currentDate].latitude);
  //   }
  // }, [current]);

  return { center, locationMarker };
};
export default useAwsMap;
