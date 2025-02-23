'use client';

import { DEFAULT_STYLE } from 'constants/maps';

import { LocationMarker } from 'models/Geo';
import { Dispatch, SetStateAction, useEffect } from 'react';
import AwsMap from 'shared/components/AwsMap';
import TripieMarker from 'shared/components/AwsMap/Marker/TripieMarker';

export type AwsMapCenter = { longitude: number; latitude: number };

function TripieMap({
  locations,
  center,
  current,
  setCurrent,
  zoom = 10,
}: Readonly<{
  current: string;
  setCurrent?: Dispatch<SetStateAction<string>>;
  locations: LocationMarker[];
  center: AwsMapCenter;
  interactive?: boolean;
  zoom?: number;
}>) {
  useEffect(() => {
    scrollTo({ top: 0 });
  }, []);

  return (
    <AwsMap
      locationMarker={locations}
      initialViewState={{
        ...center,
        zoom,
      }}
      style={DEFAULT_STYLE}
      center={center}
    >
      {locations.map((marker, index) => (
        <TripieMarker
          key={`location-${marker.lng} + ${marker.lat}+${index}`}
          marker={marker}
          action={() => {
            if (setCurrent) {
              setCurrent(marker.index);
            }
          }}
          current={current}
        />
      ))}
    </AwsMap>
  );
}

export default TripieMap;
