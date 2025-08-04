'use client';

import { Context, CSSProperties, Dispatch, SetStateAction } from 'react';
import { LngLatBoundsLike, Map, PaddingOptions, PointLike, ViewState } from '../../../wrappers';
import Lines from '../Lines/Lines.client';
import { Marker } from '../Marker';
import { COLOR_SCHEME, FULL_MAP_STYLE, MAP_ID, REGION, STYLE_TYPE } from './constants';
import { LocationMarker } from './Map.client';
import MapTerms from './MapTerms.client';

export type Coordinate = [number, number];

function MapWithContext({
  id = MAP_ID,
  locationMarker,
  center,
  zoom = 11,
  interactive = true,
  initialViewState,
  focusAfterOpen = true,
  style,
  apiKey,
  region = REGION,
  styleType = STYLE_TYPE,
  reuseMaps = false,
  colorScheme = COLOR_SCHEME,
  TabContext,
}: Readonly<{
  apiKey: string;
  id?: string;
  region?: typeof REGION;
  TabContext: Context<{
    current: string;
    cycle: Dispatch<SetStateAction<string>>;
  }>;
  center?: { longitude: number; latitude: number };
  zoom?: number;
  locationMarker?: LocationMarker[];
  focusAfterOpen?: boolean;
  styleType?: typeof STYLE_TYPE;
  colorScheme?: typeof COLOR_SCHEME;
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
}>) {
  const mapStyle = `https://maps.geo.${region}.amazonaws.com/v2/styles/${styleType}/descriptor?key=${apiKey}&color-scheme=${colorScheme}`;

  if (apiKey == null) {
    throw new Error('MUST PROVIDE API KEY! SET IT IN .ENV FILE!');
  }

  if (locationMarker == null) {
    return (
      <Map
        id={id}
        initialViewState={{
          zoom: zoom,
          ...center,
          ...initialViewState,
        }}
        attributionControl={false}
        interactive={interactive}
        style={{ ...FULL_MAP_STYLE, ...style }}
        mapStyle={mapStyle}
        reuseMaps={reuseMaps}
      >
        <MapTerms />
      </Map>
    );
  }

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
      mapStyle={mapStyle}
      attributionControl={false}
      reuseMaps={reuseMaps}
    >
      {TabContext != null ? (
        <Marker.WithTabContext
          MapContext={TabContext}
          locationMarker={locationMarker}
          focusAfterOpen={focusAfterOpen}
        />
      ) : null}
      <Lines locationMarker={locationMarker} />
      <MapTerms />
    </Map>
  );
}

export default MapWithContext;
