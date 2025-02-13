import { Geolocation, GeoTag } from './Geo';
import { Image } from './Image';
import { ExternalLink, Link } from './Link';
import { AwsMetaData, GeoMetadata } from './MetaData';

export type AttractionData = {
  attractionId: string;
  data: string;
  id: string;
  regionId: string;
};

export type ParsedAttractionResponse = Omit<AttractionData, 'data'> & { data: AttractionArticle };

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

export type BusinessHour = {
  dayOfWeek: number;
  from: number;
  to: number;
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
    names: Names;
    timeZone: string;
    countryCode: string;
    foreignEntities: null;
  };
};

export type ArticlceGeoTag = Pick<GeoTag, 'id' | 'type'>;

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
    readableBusinessHours: BusinessHour[];
    businessHoursState: string;
    permanentlyClosedAt: null;
    featuredContent: [];
    remarks: null;
    addresses: Names;
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
  metadata: AwsMetaData;
  geoMetadata: GeoMetadata;
  seoMetadata: null;
};
