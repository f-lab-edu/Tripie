'use client';

import { APIProvider } from '@vis.gl/react-google-maps';
import { API_KEY } from 'constants/maps';
import { ReactNode } from 'react';

export function MapProvider({ children }: { children: ReactNode }) {
  return <APIProvider apiKey={API_KEY}>{children}</APIProvider>;
}
