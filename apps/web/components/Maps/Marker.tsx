'use client';

import {
  AdvancedMarkerProps,
  InfoWindow,
  AdvancedMarker as ReactGoogleMarker,
  useAdvancedMarkerRef,
} from '@vis.gl/react-google-maps';
import Pin from './Pin';

interface MarkerProps extends AdvancedMarkerProps {
  numberOfOrder?: number;
  variation?: 'accommodation' | 'restaurant' | 'attraction';
}

interface InfowindowMarkerProps extends MarkerProps {
  content?: string;
}

const Marker = ({ position, onClick, numberOfOrder, variation = 'attraction', ...props }: MarkerProps) => {
  return (
    <ReactGoogleMarker position={position} {...props} clickable={true} onClick={onClick}>
      <Pin numberOfOrder={numberOfOrder} variation={variation} />
    </ReactGoogleMarker>
  );
};

const MarkerWithInfoWindow = ({ position, onClick, content = '마커 정보', ...props }: InfowindowMarkerProps) => {
  const [markerRef, marker] = useAdvancedMarkerRef();

  return (
    <>
      <ReactGoogleMarker {...props} position={position} ref={markerRef} clickable={true} onClick={onClick}>
        <Pin />
      </ReactGoogleMarker>
      <InfoWindow anchor={marker}>{content}</InfoWindow>
    </>
  );
};

Marker.WithInfoWindow = MarkerWithInfoWindow;

export default Marker;
