export type ImageUrl = { url: string };

export type ImageSizes = {
  full: ImageUrl;
  large: ImageUrl;
  small_square: ImageUrl;
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
