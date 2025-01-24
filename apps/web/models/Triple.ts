import { Metadata } from 'next';
import { ImageSizes } from './Image';
import { SeoMetaData } from './MetaData';

export type MetaDataContents = {
  image: TripieMetaImage;
  title?: string;
};

export type TripieMetaImage = {
  cloudinaryBucket: 'triple-cms';
  type: 'image';
  source: {};
  sourceUrl: 'shutterstock.com';
  ogTitle?: string;
  title: string;
  requireLogin?: boolean;
  geotags: [];
  relatedLinks?: null;
  ogImage?: null;
  description: string;
  readonly: null;
  template: { items: [] };
  exposedAt: string;
  author?: string;
  __typename: 'ArticleMetadata';
  tags: [];
  sizes?: {
    full?: { url: string };
  };
  destinationTags: [];
};

export type TripieArticle = {
  body: string;
  id: string;
  metadataContents: MetaDataContents;
  seoMetadata: SeoMetaData;
  placeId: string;
  metadata: Metadata;
  header?: string;
  articleId?: string;
};

export type TripleImage = {
  height: number;
  source: {};
  type: string; //'image'
  width: number;
  sizes: ImageSizes;
  cloudinaryId: string;
  sourceUrl: string;
  id: string;
};
