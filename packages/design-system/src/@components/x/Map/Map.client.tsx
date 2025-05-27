'use client';

import 'maplibre-gl/dist/maplibre-gl.css';
import { CSSProperties, Dispatch, SetStateAction } from 'react';
import { LngLatBoundsLike, Map, PaddingOptions, PointLike, ViewState } from '../../../wrappers';
import Lines from '../Lines/Lines.client';
import TripieMarker from '../Marker/TripieMarker.client';
import { COLOR_SCHEME, FULL_MAP_STYLE, MAP_ID, REGION, STYLE_TYPE } from './constants';
import MapWithContext from './MapWithContext.client';

export type Activity = {
  time: string;
  activity: string;
  comments: string;
  place: string;
  label: 'attraction' | 'hotel' | 'restaurant';
  coordinates?: number[];
};

export type GeoTag = {
  cloudinaryId: string;
  width: number;
  type: string; //'image'
  id: string;
  height: number;
};

export type Geolocation = {
  type: 'Point';
  coordinates: number[];
};

export type LocationMarker = {
  lat: number;
  lng: number;
  label: Activity['label'];
  info: string;
  index: string;
  parent: string;
};

export type Coordinate = [number, number];

function AwsMap({
  id = MAP_ID,
  locationMarker,
  center,
  zoom = 11,
  interactive = true,
  initialViewState,
  style,
  apiKey,
  region = REGION,
  styleType = STYLE_TYPE,
  reuseMaps = false,
  colorScheme = COLOR_SCHEME,
  currentMarker,
  setCurrentMarker,
}: Readonly<{
  apiKey: string;
  id?: string;
  region?: typeof REGION;
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
  currentMarker?: string;
  setCurrentMarker?: Dispatch<SetStateAction<string>>;
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
        interactive={interactive}
        style={{ ...FULL_MAP_STYLE, ...style }}
        mapStyle={mapStyle}
        reuseMaps={reuseMaps}
      />
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
      reuseMaps={reuseMaps}
    >
      {currentMarker != null
        ? locationMarker.map((marker, index) => (
            <TripieMarker
              key={`location-${marker.lng} + ${marker.lat}+${index}`}
              marker={marker}
              action={() => {
                if (setCurrentMarker) {
                  setCurrentMarker(marker.index);
                }
              }}
              current={currentMarker}
            />
          ))
        : null}
      <Lines locationMarker={locationMarker} />
    </Map>
  );
}

AwsMap.WithContext = MapWithContext;

export default AwsMap;
