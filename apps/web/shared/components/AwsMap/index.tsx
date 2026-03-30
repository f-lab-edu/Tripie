'use client';

import { API_KEY } from 'constants/maps';
import { LocationMarker } from 'models/Geo';
import dynamic from 'next/dynamic';
import { Context, Dispatch, ReactNode, SetStateAction } from 'react';

const DefaultMap = dynamic(() => import('@tripie-pyotato/design-system/@components/Map').then(res => res), {
  ssr: false,
});

export const MapWithContext = dynamic(
  () => import('@tripie-pyotato/design-system/@components').then(res => res.AwsMap.WithContext),
  { ssr: false }
);

type MapCenter = {
  longitude: number;
  latitude: number;
};
type TabContext = Context<{
  center?: MapCenter;
  interactive?: boolean;
  current: string;
  cycle: Dispatch<SetStateAction<string>>;
}>;

export default function TripieMap({
  center,
  interactive = true,
  TabContext,
  zoom = 9,
  reuseMaps,
  height = '100vh',
  locationMarker,
  border = 'none',
  currentMarker = '0-0',
  setCurrentMarker,
  children,
}: Readonly<{
  center?: MapCenter;
  interactive?: boolean;
  zoom?: number;
  reuseMaps?: boolean;
  height?: string;
  TabContext?: TabContext;
  locationMarker?: LocationMarker[];
  border?: string;
  currentMarker?: string;
  setCurrentMarker?: Dispatch<SetStateAction<string>>;
  children?: ReactNode;
}>) {
  if (TabContext) {
    return (
      <MapWithContext
        reuseMaps={reuseMaps}
        apiKey={API_KEY}
        initialViewState={{
          zoom,
          ...center,
        }}
        style={{ height, border }}
        interactive={interactive}
        center={center}
        TabContext={TabContext}
        locationMarker={locationMarker}
      />
    );
  }
  return (
    <DefaultMap
      apiKey={API_KEY}
      center={center}
      interactive={interactive}
      style={{
        height,
      }}
      initialViewState={{
        zoom,
        ...center,
      }}
      locationMarker={locationMarker}
      currentMarker={currentMarker}
      setCurrentMarker={setCurrentMarker}
    >
      {children}
    </DefaultMap>
  );
}
