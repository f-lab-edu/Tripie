'use client';
import { LngLatBoundsLike, Map, PaddingOptions, PointLike, ViewState } from 'react-map-gl/maplibre';

import { AiTripPlanResponse } from 'app/api/chat/route';
import { MAP_ID, STYLE } from 'constants/maps';

import 'maplibre-gl/dist/maplibre-gl.css';
import { CSSProperties, useContext, useEffect } from 'react';

import useAwsMap from 'hooks/awsMap/useAwsMap';
import { Coordinate } from 'models/Geo';
import { SelectedDateContext, TabContext } from '..';
import Lines from './Lines';
import Markers from './Marker';

function AwsMap({
  plans,
  interactive = true,
  initialViewState,
  focusAfterOpen = true,
  coordinates,
  style,
}: Readonly<{
  focusAfterOpen?: boolean;
  style?: CSSProperties;
  plans: AiTripPlanResponse;
  interactive?: boolean;
  coordinates: Coordinate[][];
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
  const { currentDate } = useContext(SelectedDateContext);
  const { cycle } = useContext(TabContext);
  const { center, locationMarker } = useAwsMap({ coordinates, currentDate, plans });

  useEffect(() => {
    cycle(`${currentDate}-0`);
  }, [currentDate]);

  return (
    <Map
      id={MAP_ID}
      initialViewState={{
        zoom: 11,
        ...center[currentDate],
        ...initialViewState,
      }}
      interactive={interactive}
      style={{ width: '100%', height: '85vh', display: 'inline-block', borderRadius: '8px', ...style }}
      mapStyle={STYLE}
    >
      <Markers locationMarker={locationMarker[currentDate]} focusAfterOpen={focusAfterOpen} />
      <Lines locationMarker={locationMarker[currentDate]} />
    </Map>
  );
}

export default AwsMap;
