'use client';

import { Layer, Source } from 'react-map-gl/maplibre';

import 'maplibre-gl/dist/maplibre-gl.css';

import type { FeatureCollection } from 'geojson';
import lineLayerStyle from './line-layer-style';

function Lines({ locationMarker }: { locationMarker: any }) {
  // GeoJSON source
  const geojson: FeatureCollection = {
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

  return (
    <Source id={'lines'} type="geojson" data={geojson}>
      <Layer {...lineLayerStyle} />
    </Source>
  );
}

export default Lines;
