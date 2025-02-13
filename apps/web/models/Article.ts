import { BodyItemProps } from 'app/regions/[regionId]/articles/[articleId]/ArticleBody';
import { GeoTag } from './Geo';
import { ImageUrl } from './Image';
import { Metadata } from './MetaData';
import { MetaDataContents, TripleImage } from './Triple';

export type RegionInfoSource = {
  image: TripleImage;
  geotag: GeoTag[];
  id: string;
  type: string;
  regionId: string;
  reviewsCount: number;
  title: string;
  scrapsCount: number;
  summary: string;
};

export type RegionArticleInfo = {
  type: string;
  source: RegionInfoSource;
  id: string;
  scrapped: boolean;
  reviewed: boolean;
};

export type ArticleImage = {
  cloudinaryBucket: string;
  blurData?: { data: string };
  cloudinaryId: string;
  frame?: string;
  height: number;
  id: string;
  metadata: { format: string };
  source: {};
  sourceUrl: string;
  type: string;
  width: number;
  sizes: { full: ImageUrl; large: ImageUrl; small_square: ImageUrl };
};

export type ArticleData = {
  body: BodyItemProps[];
  header: null;
  metadata: Metadata;
  metadataContents: MetaDataContents;
  placeId: string;
  seoMetadata: null;
  id: string;
};
