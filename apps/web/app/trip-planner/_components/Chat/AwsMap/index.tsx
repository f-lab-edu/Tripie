'use client';
import { Map } from 'react-map-gl/maplibre';

import { AiTripPlanResponse } from 'app/api/chat/route';
import { MAP_ID, STYLE } from 'constants/maps';
import 'maplibre-gl/dist/maplibre-gl.css';
import { AwsPlaceResult } from 'models/Aws';
import { useContext, useEffect, useMemo } from 'react';
import { AwsLocationWithLabel, LocationMarker, SelectedDateContext, TabContext } from '..';
import Lines from './Lines';
import Markers from './Marker';

function AwsMap({ plans, locations }: Readonly<{ plans: AiTripPlanResponse; locations: AwsPlaceResult[] }>) {
  const { currentDate } = useContext(SelectedDateContext);
  const { cycle } = useContext(TabContext);

  /**
   * 선택 날짜에 따른 지도 좌표 데이터와 label. label에 따라 좌표 색이 달라집니다.
   */
  const locationData = useMemo(() => {
    return plans.trips.map(trip => {
      return trip.activities.reduce((acc, curr) => {
        const filtered = locations.filter(
          ({ Summary }) => Summary.Text.split('restaurant')[0].trim() === curr.place.split('restaurant')[0].trim()
        );
        const planWithLabel = { ...filtered[0], label: curr.label } as AwsLocationWithLabel;
        acc.push(planWithLabel);
        return acc;
      }, [] as AwsLocationWithLabel[]);
    });
  }, [currentDate, locations]);

  useEffect(() => {
    cycle(`${currentDate + 1}-0`);
  }, [currentDate]);

  /**
   * 지도의 좌표들, 선택한 여행 일자 따라서 리렌더
   */
  const locationMarker = useMemo(() => {
    const selectedLocation = locationData[currentDate] as AwsLocationWithLabel[];
    return selectedLocation
      .map(({ Results, label }, index) => {
        const temp = [] as LocationMarker[];
        Results.forEach((curr, innerIndex) => {
          temp.push({
            lat: curr.Place.Geometry.Point[1],
            lng: curr.Place.Geometry.Point[0],
            label,
            info: curr.Place.Label,
            index: `${index}-${innerIndex}`,
            parent: `${currentDate + 1}-${index}`,
          });
        });
        return temp;
      })
      .flat();
  }, [currentDate, locationData]);

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
      }}
      style={{ width: '100%', height: '85vh', display: 'inline-block', borderRadius: '8px' }}
      mapStyle={STYLE}
    >
      <Markers locationMarker={locationMarker} />
      <Lines locationMarker={locationMarker} />
    </Map>
  );
}

export default AwsMap;
