'use client';
import { LngLatBoundsLike, Map, PaddingOptions, PointLike, ViewState } from 'react-map-gl/maplibre';

import { FULL_MAP_STYLE, MAP_ID, STYLE } from 'constants/maps';

import 'maplibre-gl/dist/maplibre-gl.css';
import { CSSProperties } from 'react';

import { LocationMarker } from 'models/Geo';
import Lines from './Lines';
import Markers from './Marker';

function AwsMap({
  locationMarker,
  center,
  interactive = true,
  initialViewState,
  focusAfterOpen = true,
  style,
}: Readonly<{
  center: { longitude: number; latitude: number };
  locationMarker: LocationMarker[];
  focusAfterOpen?: boolean;
  style?: CSSProperties;
  interactive?: boolean;
  initialViewState?: Partial<ViewState> & {
    bounds?: LngLatBoundsLike;
    fitBoundsOptions?: {
      offset?: PointLike;
      minZoom?: number;
      maxZoom?: number;
      padding?: number | PaddingOptions;
    };
  };
}>) {
  return (
    <Map
      id={MAP_ID}
      initialViewState={{
        zoom: 11,
        ...center,
        ...initialViewState,
      }}
      interactive={interactive}
      style={{ ...FULL_MAP_STYLE, ...style }}
      mapStyle={STYLE}
    >
      <Markers locationMarker={locationMarker} focusAfterOpen={focusAfterOpen} />
      <Lines locationMarker={locationMarker} />
    </Map>
  );
}

export default AwsMap;
