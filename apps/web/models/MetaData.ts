import { ArticlceGeoTag } from './Attraction';
import { Category } from './Itinery';

export type Metadata = { scrapsCount: number; __typename: 'Metadata'; reviewsCount?: number };

export type SeoMetaData = {
  description: string;
  __typename: 'ArticleSeoMetadata';
};

export type AwsMetaData = {
  __typename: 'Metadata';
  reviewsCount: number;
  reviewsRating: number;
  scrapsCount: number;
  hasTnaProducts: boolean;
  structuredAddress: null;
};

export type GeoMetadata = {
  __typename: 'GeoMetadata';
  geotags: ArticlceGeoTag[];
  timeZone: string;
  vicinity: null;
  areas: Category[];
};
