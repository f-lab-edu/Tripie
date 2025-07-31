'use client';

import { MapProvider } from '@tripie-pyotato/design-system/@wrappers';

import useItinerary from 'hooks/useItinerary';
import { ItineraryProps } from 'models/Props';
import { useMemo } from 'react';

import dynamic from 'next/dynamic';
import MapWithCarousel from './MapWithCarousel';

const AwsMap = dynamic(() => import('../../../../../shared/components/AwsMap').then(mod => mod.default), {
  ssr: false,
});

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
        height="30vh"
        locationMarker={coordinates}
        center={center}
        currentMarker={current}
        setCurrentMarker={setCurrent}
      />
    </MapProvider>
  );
};

export default ArticleItinerary;
