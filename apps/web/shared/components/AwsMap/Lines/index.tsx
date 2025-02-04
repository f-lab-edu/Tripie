'use client';

import { Layer, Source } from 'react-map-gl/maplibre';

import 'maplibre-gl/dist/maplibre-gl.css';

import { LocationMarker } from 'models/Geo';
import { useMemo } from 'react';
import lineLayerStyle from './line-layer-style';

function Lines({ locationMarker }: Readonly<{ locationMarker: LocationMarker[] }>) {
  const geojson = useMemo(() => {
    return {
      type: 'FeatureCollection',
      features: [
        {
          type: 'Feature',
          geometry: {
            type: 'LineString',
            coordinates: locationMarker.map(({ lng, lat }: { lng: number; lat: number }) => [lng, lat]),
          },
          properties: null,
        },
      ],
    };
  }, [locationMarker]);

  return (
    <Source id={'lines'} type="geojson" data={geojson}>
      <Layer {...lineLayerStyle} />
    </Source>
  );
}

export default Lines;
