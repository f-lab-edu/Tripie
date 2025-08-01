'use client';

import { API_KEY } from 'constants/maps';
import { LocationMarker } from 'models/Geo';
import dynamic from 'next/dynamic';
import { Context, Dispatch, ReactNode, SetStateAction } from 'react';

const AwsMap = dynamic(() => import('@tripie-pyotato/design-system/@components/Map').then(mod => mod.default), {
  ssr: false,
});
const AwsMapWithContext = dynamic(
  () => import('@tripie-pyotato/design-system/@components').then(mod => mod.AwsMap).then(mod => mod.WithContext),
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
      <AwsMapWithContext
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
    <AwsMap
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
    </AwsMap>
  );
}
