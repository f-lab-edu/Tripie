'use client';

import { geocode } from 'app/api/geocode/route';
import { useEffect } from 'react';

export default function Maps({ places }: { places: string[][] }) {
  useEffect(() => {
    if (places?.[0]?.[0] != null) {
      places.forEach(days => days.forEach(place => geocode({ searchQuery: place })));
    }
  }, [places]);
  return <>{JSON.stringify(places)}</>;
}
