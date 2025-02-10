'use client';

import useItinerary from 'hooks/useItinerary';
import { Itinerary } from 'models/Itinery';

import { MapProvider } from 'react-map-gl/maplibre';

import { Carousel } from 'shared/components/Carousel';
import AwsMap from '../Map';
import MapWithCarousel from './MapWithCarousel';

export type ItineraryProps = { type: 'itinerary'; value: { itinerary: Itinerary } };

const ArticleItinerary = ({ item }: { item: ItineraryProps }) => {
  const { itinerary, itineraryItems, current, setCurrent, coordinates, center } = useItinerary({ item });

  // 선택한 여행 일정 카드 (TabCard)의 컨텍스트가 변경되었을 경우 해당 좌표로 포커스
  // useEffect(() => {
  //   const coord = locations.filter(place => place.index === current)[0];
  //   console.log('map', map);
  //   if (map != null) {
  //     map.flyTo({ center: [coord.lng, coord.lat] });
  //   }
  // }, [map, current]);

  return (
    <MapProvider>
      <Carousel carouselProps={itineraryItems}>
        <MapWithCarousel
          item={{
            type: 'pois',
            value: {
              pois: itinerary.items.map(({ poi }) => poi),
              memo: itinerary.items.map(({ memo }) => memo),
              schedule: itinerary.items.map(({ schedule }) => schedule),
              transportation: itinerary.items.map(({ transportation }) => transportation),
            },
          }}
          current={current}
          setCurrent={setCurrent}
        />
      </Carousel>
      <AwsMap locations={coordinates} center={center} current={current} setCurrent={setCurrent} />

      {/* <AwsMap locationMarker={coordinates} center={center} /> */}
    </MapProvider>
  );
};

export default ArticleItinerary;
