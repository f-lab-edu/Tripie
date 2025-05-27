'use client';

import 'maplibre-gl/dist/maplibre-gl.css';

import { useMemo } from 'react';
import { Layer, LayerProps, Source } from 'wrappers';
import { LocationMarker } from '../Map/Map.client';
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
      <Layer {...(lineLayerStyle as LayerProps)} />
    </Source>
  );
}

export default Lines;
