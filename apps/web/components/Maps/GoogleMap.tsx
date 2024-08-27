'use client';
import { MarkerClusterer } from '@googlemaps/markerclusterer';
import { GoogleMap as ReactGoogleMaps } from '@react-google-maps/api';
import { DEFAULT_MAP_CENTER, DEFAULT_MAP_CONTAINER_STYLE, DEFAULT_MAP_OPTIONS, DEFAULT_MAP_ZOOM } from 'constants/maps';
import { useCallback, useRef, useState } from 'react';

type AdvancedMarkerElement = google.maps.marker.AdvancedMarkerElement;
type Map = google.maps.Map;

const GoogleMap = () => {
  const [map, setMap] = useState<Map | null>(null);
  const markersRef = useRef<AdvancedMarkerElement[]>([]);

  const onLoad = useCallback((map: Map) => {
    setMap(map);
  }, []);

  const onUnmount = useCallback(() => {
    setMap(null);
  }, []);

  const addMarkers = useCallback((map: Map) => {
    const locations = [
      { lat: -31.56391, lng: 147.154312 },
      { lat: -33.718234, lng: 150.363181 },
      { lat: -33.727111, lng: 150.371124 },
      { lat: -33.848588, lng: 151.209834 },
      { lat: -34.671264, lng: 150.863657 },
      { lat: -35.304724, lng: 148.662905 },
      { lat: -36.817685, lng: 175.699196 },
      { lat: -36.828611, lng: 175.790222 },
      { lat: -37.75, lng: 145.116667 },
      { lat: -37.759859, lng: 145.128708 },
      { lat: -37.765015, lng: 145.133858 },
      { lat: -37.770104, lng: 145.143299 },
      { lat: -37.7737, lng: 145.145187 },
      { lat: -37.774785, lng: 145.137978 },
      { lat: -37.819616, lng: 144.968119 },
      { lat: -38.330766, lng: 144.695692 },
      { lat: -39.927193, lng: 175.053218 },
      { lat: -41.330162, lng: 174.865694 },
      { lat: -42.734358, lng: 147.439506 },
      { lat: -42.734358, lng: 147.501315 },
      { lat: -42.735258, lng: 147.438 },
      { lat: -43.999792, lng: 170.463352 },
    ];

    markersRef.current = locations.map(
      (location, index: number) =>
        new window.google.maps.marker.AdvancedMarkerElement({
          position: location,
          map: map,
          // content: Marker(index),
          content: new google.maps.marker.PinElement({
            background: '#f361e0',
          }).element,
          title: `${index + 1}`,
        })
    );

    new MarkerClusterer({ markers: markersRef.current, map });
    return null;
  }, []);

  return (
    <ReactGoogleMaps
      mapContainerStyle={DEFAULT_MAP_CONTAINER_STYLE}
      center={DEFAULT_MAP_CENTER}
      zoom={DEFAULT_MAP_ZOOM}
      options={DEFAULT_MAP_OPTIONS}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      {map && addMarkers(map)}
    </ReactGoogleMaps>
  );
};

export default GoogleMap;
