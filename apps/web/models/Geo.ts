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

export type Coordinate = [number, number];
