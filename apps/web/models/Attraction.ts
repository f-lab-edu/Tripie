import { ImageSizes } from './Article';

export type ForeignEntity = {
  service: string;
  identifier: string;
};

export type Names = {
  ko?: string;
  en?: string;
  local?: string;
  primary?: string;
};

export type Image = {
  cloudinaryId: string;
  id: string;
  type: string;
  source: {};
  width: number;
  height: number;
  cloudinaryBucket: string;
  metadata: {
    format: string;
  };
  sizes: ImageSizes;
  sourceUrl: string;
};

export type ExternalLink = {
  url: string;
  imageUrl: string;
  title: string;
  publisher: string;
};

export type Geolocation = {
  type: 'Point';
  coordinates: number[];
};

export type BusinessHour = {
  dayOfWeek: number;
  from: number;
  to: number;
};

export type ReadableBusinessHour = {
  dayOfWeek: number;
  from: string;
  to: string;
};

export type Link = {
  href: string;
  label: string;
  image: Image;
  description: string;
};

export type Recommendation = {
  id: string;
  title: string;
  description: string;
  image: Image;
  link: Link;
};
type Category = {
  id: string;
  name: string;
};

export type RestaurantRecommendation = {
  id: string;
  title: string;
  description: string;
  image: Image;
  link: Link;
  comment?: string;
};

export type Region = {
  __typename: 'Region';
  source: {
    __typename: string;
    names: {
      ko: string;
      en: string;
    };
    timeZone: string;
    countryCode: string;
    foreignEntities: null;
  };
};

export type MetaData = {
  __typename: 'Metadata';
  reviewsCount: number;
  reviewsRating: number;
  scrapsCount: number;
  hasTnaProducts: boolean;
  structuredAddress: null;
};

export type GeoTag = {
  type: string;
  id: string;
};

export type AttractionArticle = {
  __typename: string;
  deletedAt: null;
  source: {
    __typename: string;
    foreignEntities: ForeignEntity[];
    names: Names;
    regionId: string;
    comment: string;
    image: Image;
    externalLinks: ExternalLink[];
    geolocation: Geolocation;
    businessHours: BusinessHour[];
    readableBusinessHours: ReadableBusinessHour[];
    businessHoursState: string;
    permanentlyClosedAt: null;
    featuredContent: [];
    remarks: null;
    addresses: {
      en?: string;
      ko?: string;
      local?: string;
    };
    phoneNumber: string;
    officialSiteUrl: string;
    extraProperties: null;
    estimatedDuration: null;
    directions: string;
    businessHourComment: string;
    fee: true;
    feeComment: string;
    tips: string[];
    recommendations: Recommendation[];
    exposedAt: string;
    hiddenAt: null;
  };
  id: string;
  type: 'attraction';
  reviewed: null;
  scraped: null;
  categories: Category[];
  readableSpecialHours: null;
  relationshipCounts: {
    associated: number;
  };
  restaurantRecommendations: RestaurantRecommendation[];
  region: Region;
  metadata: MetaData;
  geoMetadata: {
    __typename: 'GeoMetadata';
    geotags: GeoTag[];
    timeZone: string;
    vicinity: null;
    areas: Category[];
  };
  seoMetadata: null;
};
