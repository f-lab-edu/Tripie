'use client';

import { useMap, useMapsLibrary } from '@vis.gl/react-google-maps';
import { useEffect, useState } from 'react';

// import classNames from 'classnames/bind';
import { POLYGON_DOTTED } from 'constants/maps';
// import Style from './directions.module.scss';

type DirectionService = google.maps.DirectionsService;
type DirectionRenderer = google.maps.DirectionsRenderer;

interface DirectionsProps extends google.maps.DirectionsRequest {
  selectedDirection?: string;
}

// const cx = classNames.bind(Style);

const Directions = ({
  origin,
  destination,
  // selectedDirection,
  travelMode = google.maps.TravelMode.DRIVING,
}: DirectionsProps) => {
  const map = useMap();
  const routesLibrary = useMapsLibrary('routes');
  const [directionsService, setDirectionService] = useState<DirectionService | null>(null);
  const [directionsRenderer, setDirectionRenderer] = useState<DirectionRenderer | null>(null);
  const [routes, setRoutes] = useState<google.maps.DirectionsRoute[]>([]);
  const [routeIndex, setRouteIndex] = useState(0);
  const selected = routes[routeIndex];
  const leg = selected?.legs[0];

  useEffect(() => {
    if (!map || !routesLibrary) {
      return;
    }
    setDirectionService(new routesLibrary.DirectionsService());
    setDirectionRenderer(new routesLibrary.DirectionsRenderer({ map }));
  }, [routesLibrary, map]);

  useEffect(() => {
    if (!directionsService || !directionsRenderer) {
      return;
    }

    directionsService
      .route({
        origin,
        destination,
        travelMode,
        provideRouteAlternatives: true,
      })
      .then(res => {
        directionsRenderer.setOptions({
          hideRouteList: true,
          draggable: true,
          suppressMarkers: true,
          polylineOptions: {
            clickable: true,
            strokeOpacity: 0,
            icons: [POLYGON_DOTTED],
            geodesic: true,
            strokeColor: '#d43232',
          },
        });

        directionsRenderer.setDirections(res);
        setRoutes(res.routes);
        return null;
      });
  }, [directionsService, directionsRenderer]);

  useEffect(() => {
    if (!directionsRenderer) {
      return;
    }
    directionsRenderer.setRouteIndex(routeIndex);
  }, [routeIndex, directionsRenderer]);

  if (!leg) return null;

  // !! 당장은 최소거리 선택할 필요 없음
  // !!return (
  // !!  <div className={cx('directions', 'visible')}>
  // !!    {/* <div className={cx('directions', selectedDirection === JSON.stringify(location) ? 'visible' : null)}> */}
  // !!    <h2>{selected.summary}</h2>
  // !!    <p>{leg.start_address}</p>
  // !!    <p>distance: {leg.distance?.text}</p>
  // !!    <p>duration: {leg.duration?.text}</p>

  // !!    <h2>other routes</h2>
  // !!    <ul>
  // !!      {routes.map((route, index) => (
  // !!        <li key={route.summary}>
  // !!          <button onClick={() => setRouteIndex(index)}>{route.summary}</button>
  // !!        </li>
  // !!      ))}
  // !!    </ul>
  // !!  </div>
  // !!);
};

export default Directions;
