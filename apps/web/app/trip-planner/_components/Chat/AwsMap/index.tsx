'use client';
import { LngLatBoundsLike, Map, PaddingOptions, PointLike, ViewState } from 'react-map-gl/maplibre';

import { MAP_ID, STYLE } from 'constants/maps';

import 'maplibre-gl/dist/maplibre-gl.css';
import { CSSProperties } from 'react';

import Lines, { LocationMarkerProps } from './Lines';
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
  locationMarker: LocationMarkerProps;
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
      style={{ width: '100%', height: '85vh', display: 'inline-block', borderRadius: '8px', ...style }}
      mapStyle={STYLE}
    >
      <Markers locationMarker={locationMarker} focusAfterOpen={focusAfterOpen} />
      <Lines locationMarker={locationMarker} />
    </Map>
  );
}

export default AwsMap;
