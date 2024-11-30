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

export type ImageUrl = { url: string };

export type ImageSizes = {
  full: ImageUrl;
  large: ImageUrl;
  small_square: ImageUrl;
};

export type GeoTag = {
  cloudinaryId: string;
  width: number;
  type: string; //'image'
  id: string;
  height: number;
};

export type RegionInfoSource = {
  image: TripleImage;
  geotag: GeoTag[];
  id: string;
  type: string; //article
  regionId: string;
  reviewsCount: number;
  title: string;
  scrapsCount: number;
  summary: string;
};

export type RegionArticleInfo = {
  type: string; //article
  source: RegionInfoSource;
  id: string;
  scrapped: boolean;
  reviewed: boolean;
};
