'use client';

import useItinerary from 'hooks/useItinerary';
import { Itinerary } from 'models/Itinery';

import { MapProvider } from 'react-map-gl/maplibre';

import { useMemo } from 'react';
import { Carousel } from 'shared/components/Carousel';
import AwsMap from '../Map';
import MapWithCarousel from './MapWithCarousel';

export type ItineraryProps = { type: 'itinerary'; value: { itinerary: Itinerary } };

const ArticleItinerary = ({ item }: { item: ItineraryProps }) => {
  const { itinerary, itineraryItems, current, setCurrent, coordinates, center } = useItinerary({ item });

  const mapItem = useMemo(() => {
    return {
      type: 'pois' as const,
      value: {
        pois: itinerary.items.map(({ poi }) => poi),
        memo: itinerary.items.map(({ memo }) => memo),
        schedule: itinerary.items.map(({ schedule }) => schedule),
        transportation: itinerary.items.map(({ transportation }) => transportation),
      },
    };
  }, [item]);

  return (
    <MapProvider>
      <Carousel carouselProps={itineraryItems}>
        <MapWithCarousel item={mapItem} current={current} setCurrent={setCurrent} />
      </Carousel>
      <AwsMap locations={coordinates} center={center} current={current} setCurrent={setCurrent} />
    </MapProvider>
  );
};

export default ArticleItinerary;
