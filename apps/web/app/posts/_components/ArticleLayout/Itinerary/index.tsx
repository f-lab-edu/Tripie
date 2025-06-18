'use client';

import { AwsMap } from '@tripie-pyotato/design-system/@components/x';
import { MapProvider } from '@tripie-pyotato/design-system/@wrappers';

import { API_KEY } from 'constants/maps';
import useItinerary from 'hooks/useItinerary';
import { ItineraryProps } from 'models/Props';
import { useMemo } from 'react';

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
      <AwsMap
        apiKey={API_KEY}
        style={{ height: '30vh' }}
        locationMarker={coordinates}
        center={center}
        currentMarker={current}
        setCurrentMarker={setCurrent}
      />
    </MapProvider>
  );
};

export default ArticleItinerary;
