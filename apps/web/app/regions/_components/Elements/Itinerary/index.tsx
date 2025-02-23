'use client';

import useItinerary from 'hooks/useItinerary';
import { Itinerary } from 'models/Itinery';

import { MapProvider } from 'react-map-gl/maplibre';

import { useMemo } from 'react';

import MapWithCarousel from './MapWithCarousel';
import TripieMap from './TripieMap';

export type ItineraryProps = { type: 'itinerary'; value: { itinerary: Itinerary } };

const ArticleItinerary = ({ item }: { item: ItineraryProps }) => {
  const { itinerary, current, setCurrent, coordinates, center } = useItinerary({ item });

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
      <MapWithCarousel item={mapItem} current={current} setCurrent={setCurrent} />
      <TripieMap locations={coordinates} center={center} current={current} setCurrent={setCurrent} />
    </MapProvider>
  );
};

export default ArticleItinerary;
