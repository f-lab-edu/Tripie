'use client';
import { LngLatBoundsLike, Map, PaddingOptions, PointLike, ViewState } from 'wrapper';

import { FULL_MAP_STYLE, MAP_ID, STYLE } from 'constants/maps';

import 'maplibre-gl/dist/maplibre-gl.css';
import { CSSProperties, ReactNode } from 'react';

import { LocationMarker } from 'models/Geo';
import Lines from './Lines';
import Markers from './Marker';

function AwsMap({
  id = MAP_ID,
  locationMarker,
  center,
  zoom = 11,
  interactive = true,
  initialViewState,
  focusAfterOpen = true,
  style,
  reuseMaps = false,
  children,
}: Readonly<{
  id?: string;
  center: { longitude: number; latitude: number };
  zoom?: number;
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
  reuseMaps?: boolean;
  children?: ReactNode;
}>) {
  return (
    <Map
      id={id}
      initialViewState={{
        zoom: zoom,
        ...center,
        ...initialViewState,
      }}
      interactive={interactive}
      style={{ ...FULL_MAP_STYLE, ...style }}
      mapStyle={STYLE}
      reuseMaps={reuseMaps}
    >
      {children ?? <Markers locationMarker={locationMarker} focusAfterOpen={focusAfterOpen} />}

      <Lines locationMarker={locationMarker} />
    </Map>
  );
}

export default AwsMap;
