'use client';

import useItinerary from 'hooks/useItinerary';

import { MapProvider } from 'wrapper';

import { useMemo } from 'react';

import { ItineraryProps } from 'models/Props';
import TripieMap from '../TripieMap';
import MapWithCarousel from './MapWithCarousel';

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
        pois: items.map(({ poi }) => poi),
        memo: items.map(({ memo }) => memo),
        schedule: items.map(({ schedule }) => schedule),
        transportation: items.map(({ transportation }) => transportation),
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
