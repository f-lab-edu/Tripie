'use client';

import useItinerary from 'hooks/useItinerary';
import { Itinerary, ItineraryItem } from 'models/Itinery';

import { MapProvider } from 'wrapper';

import { useMemo } from 'react';

import TripieMap from '../TripieMap';
import MapWithCarousel from './MapWithCarousel';

export type ItineraryProps = { type: 'itinerary'; value: { itinerary: Itinerary } };

const ArticleItinerary = ({ item }: { item: ItineraryProps }) => {
  const {
    itinerary: { items },
    current,
    setCurrent,
    coordinates,
    center,
  } = useItinerary({ item });

  const mapItem = useMemo(() => {
    return {
      type: 'pois' as const,
      value: {
        pois: items.map(({ poi }: ItineraryItem) => poi),
        memo: items.map(({ memo }: ItineraryItem) => memo),
        schedule: items.map(({ schedule }: ItineraryItem) => schedule),
        transportation: items.map(({ transportation }: ItineraryItem) => transportation),
      },
    };
  }, [items]);

  return (
    <MapProvider>
      <MapWithCarousel item={mapItem} current={current} setCurrent={setCurrent} />
      <TripieMap locations={coordinates} center={center} current={current} setCurrent={setCurrent} />
    </MapProvider>
  );
};

export default ArticleItinerary;
