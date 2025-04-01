import { ArticleImage } from './Article';
import { Activity, Poi } from './Aws';

export type Category = { id: string; name: string };
export type Region = { source: { names: { en: string; ko: string } } };
export type Transport = 'WALK' | 'TRAM' | 'TRAIN' | 'SHIP' | 'BUS' | 'FLAG' | 'CAR';

export type Geolocation = {
  coordinates: number[];
  type: 'Point';
};

export type Geotag = {
  id: string;
  type: string;
};

export type Source = {
  areas: Category[];
  comment: string;
  geolocation: Geolocation;
  geotags: Geotag[];
  grade: number;
  image: ArticleImage;
  names: { ko: string; local: string; en: string; primary: string };
  regionId: string;
  starRating?: number;
  vicinity?: number;
  type: Activity['label'];
};

export type Transportation = {
  type: 'transportation';
  value: { duration: string; transportation: Transport };
};

export type ItineraryItem = {
  memo: string;
  poi: Poi;
  schedule: string;
  transportation: Transportation[];
};

export type Itinerary = {
  day: number;
  hideAddButton: boolean;
  items: ItineraryItem[];
};
