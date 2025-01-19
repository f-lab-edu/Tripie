'use client';

import useItinerary from 'hooks/useItinerary';
import { Itinerary } from 'models/Itinery';

import { Carousel } from '../../../../../shared/components/Carousel';
import AwsMap from '../Map/Map';
import MapWithCarousel from './MapWithCarousel';

export type ItineraryProps = { type: 'itinerary'; value: { itinerary: Itinerary } };

const ArticleItinerary = ({ item }: { item: ItineraryProps }) => {
  const { itinerary, itineraryItems, current, setCurrent, coordinates, center } = useItinerary({ item });

  return (
    <>
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
    </>
  );
};

export default ArticleItinerary;
