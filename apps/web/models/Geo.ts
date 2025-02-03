import { Activity } from './Aws';

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
