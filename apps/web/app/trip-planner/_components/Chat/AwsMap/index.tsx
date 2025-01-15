'use client';
import { LngLatBoundsLike, Map, PaddingOptions, PointLike, ViewState } from 'react-map-gl/maplibre';

import { AiTripPlanResponse } from 'app/api/chat/route';
import { MAP_ID, STYLE } from 'constants/maps';
import 'maplibre-gl/dist/maplibre-gl.css';
import { AwsPlaceResult } from 'models/Aws';
import { CSSProperties, useContext, useEffect, useMemo } from 'react';
import { AwsLocationWithLabel, LocationMarker, SelectedDateContext, TabContext } from '..';
import Lines from './Lines';
import Markers from './Marker';

function AwsMap({
  plans,
  locations,
  interactive = true,
  // places,
  initialViewState,
  focusAfterOpen = true,
  style,
}: Readonly<{
  focusAfterOpen?: boolean;
  style?: CSSProperties;
  plans: AiTripPlanResponse;
  locations: AwsPlaceResult[];
  interactive?: boolean;
  places: string[][];
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
  // const { data } = useLamdba(places.flat());

  // if (data) {
  //   console.log(data);
  // }

  // if (data == null) {
  //   return <>loading....</>;
  // } else {
  //   return <>{JSON.stringify(data)}</>;
  // }

  /**
   * 선택 날짜에 따른 지도 좌표 데이터와 label. label에 따라 좌표 색이 달라집니다.
   */
  //!! 필터 조건 변경
  const locationData = useMemo(() => {
    return plans.trips.map(trip => {
      // console.log('trip', trip);
      return trip.activities.reduce((acc, curr, index) => {
        // console.log('locations', locations);
        // const filtered = locations.filter(result => result?.Summary?.Text === curr.place);
        const planWithLabel = { ...locations[index], label: curr.label } as AwsLocationWithLabel;
        acc.push(planWithLabel);
        return acc;
      }, [] as AwsLocationWithLabel[]);
    });
  }, [currentDate, locations]);

  useEffect(() => {
    cycle(`${currentDate + 1}-0`);
  }, [currentDate]);

  // console.log('locationData', locationData);

  /**
   * 지도의 좌표들, 선택한 여행 일자 따라서 리렌더
   */
  const locationMarker = useMemo(() => {
    const selectedLocation = locationData[currentDate] as AwsLocationWithLabel[];
    return selectedLocation
      .map((result, index) => {
        const temp = [] as LocationMarker[];
        result?.Results?.forEach((curr, innerIndex) => {
          temp.push({
            lat: +curr.Place.Geometry.Point[1],
            lng: +curr.Place.Geometry.Point[0],
            label: result.label,
            info: curr.Place.Label,
            index: `${index}-${innerIndex}`,
            parent: `${currentDate + 1}-${index}`,
          });
        });
        return temp;
      })
      .flat();
  }, [currentDate, locationData]);

  // console.log('locationMarker', locationMarker);

  /**
   * 지도의 중심의 경도와 위도.
   * 경도와 위도의 좌표들의 평균 지점
   */
  const center = useMemo(() => {
    return locationMarker.reduce(
      (acc, curr, index) => {
        acc.longitude += curr.lng;
        acc.latitude += curr.lat;

        if (index === locationMarker.length - 1) {
          acc.longitude /= locationMarker.length;
          acc.latitude /= locationMarker.length;
        }
        return acc;
      },
      { longitude: 0, latitude: 0 }
    );
  }, [locationMarker]);

  return (
    <Map
      id={MAP_ID}
      initialViewState={{
        ...center,
        zoom: 11,
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
