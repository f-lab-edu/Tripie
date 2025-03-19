import { ItineraryProps } from 'app/regions/post/_components/Elements/Itinerary';
import { Activity } from 'models/Aws';
import { useMemo, useState } from 'react';

/**
 * 지역 정보 아티클의 좌표 표시
 */
const useItinerary = ({ item }: { item: ItineraryProps }) => {
  const { itinerary } = item.value;
  const [current, setCurrent] = useState(''); // 현재 선택한 좌표

  /**
   * 지도에 위도/경도 표기와 지역 정보를 표기하기 위한 좌표
   */
  const [coordinates] = useState(() =>
    itinerary.items.map(({ poi }, index: number) => ({
      index: `0-${index}`,
      parent: `${index}`,
      label: poi.type as Activity['label'],
      lng: poi.source.geolocation.coordinates[0],
      lat: poi.source.geolocation.coordinates[1],
      info: poi.source.comment,
    }))
  );

  /**
   * 지도 중심점
   */
  const center = useMemo(() => {
    const pois = itinerary.items.map(({ poi }) => poi);
    const coordinates = pois.reduce(
      (acc, curr) => {
        acc.longitude += curr.source.geolocation.coordinates[0];
        acc.latitude += curr.source.geolocation.coordinates[1];
        return acc;
      },
      { longitude: 0, latitude: 0 }
    );

    return { longitude: coordinates.longitude / pois.length, latitude: coordinates.latitude / pois.length };
  }, [coordinates]);

  return { itinerary, current, setCurrent, center, coordinates, itineraryItems: itinerary.items };
};

export default useItinerary;
