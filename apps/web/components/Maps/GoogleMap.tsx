'use client';
import { Map as ReactGoogleMaps } from '@vis.gl/react-google-maps';
import { DEFAULT_MAP_CENTER, DEFAULT_MAP_CONTAINER_STYLE, DEFAULT_MAP_OPTIONS, DEFAULT_MAP_ZOOM } from 'constants/maps';
import { ReactNode } from 'react';

const GoogleMap = ({ children }: { children: ReactNode }) => {
  return (
    <ReactGoogleMaps
      {...DEFAULT_MAP_OPTIONS}
      style={DEFAULT_MAP_CONTAINER_STYLE}
      defaultCenter={DEFAULT_MAP_CENTER}
      defaultZoom={DEFAULT_MAP_ZOOM}
    >
      {children}
    </ReactGoogleMaps>
  );
};

export default GoogleMap;
