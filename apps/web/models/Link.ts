import { Image } from './Image';

export type ExternalLink = {
  url: string;
  imageUrl: string;
  title: string;
  publisher: string;
  blurData?: { data: string };
};
export type Link = {
  href: string;
  label: string;
  image: Image;
  description: string;
};
