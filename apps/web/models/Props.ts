import { MotionProps } from '@tripie-pyotato/design-system/@wrappers';
import { Link as LinkType } from 'models/Link';
import { ArticleImage } from './Article';
import { Poi } from './Aws';
import { Itinerary, ItineraryItem } from './Itinery';

// html 혹은 markdown 형식으로 데이터가 주어진다면 해당 형식으로 데이터 보여주기
export type RichTextValue = {
  rich: boolean;
  markdownText: string;
  rawHTML: string;
} & TextValue;

export type ArticleTextProps = { type: 'text'; value: TextValue & Partial<RichTextValue> };
export type TextValue = { text: string };

export type DividerProps = Partial<{ current: string; variants: MotionProps['variants']; className: string }>;

export type ArticleDividerProps = { type: 'hr1' | 'hr2' | 'hr3' | 'hr4' | 'hr5' };
// ------------------------------------------------------------------------------------------------------------------------------------
// ItineraryProps

export type ItineraryProps = { type: 'itinerary'; value: { itinerary: Itinerary } };

// ------------------------------------------------------------------------------------------------------------------------------------
// LinkProps

export type LinkProps = {
  type: 'links';
  value: { links: Pick<LinkType, 'href' | 'label'>[] };
};

// ------------------------------------------------------------------------------------------------------------------------------------
// ImageProps

export type ImageProps = { type: 'images'; value: { images: ArticleImage[] } };

// ------------------------------------------------------------------------------------------------------------------------------------
// EmbeddedProps

export type EmbeddedProps = { type: 'embedded'; value: { entries: Array<Array<BodyItemProps>> } };

// ------------------------------------------------------------------------------------------------------------------------------------
// ParamProps
export type ParamProps = {
  params: Promise<{ postId: string; articleId: string }>;
};

export type RegionParamProps = {
  params: Promise<{ regionId: string }>;
};

// ------------------------------------------------------------------------------------------------------------------------------------
// Note
export type NoteProps = {
  type: 'note';
  value: { body: string; title: string };
};

// ------------------------------------------------------------------------------------------------------------------------------------
// Heading props
export type HeadingSizes = 'heading1' | 'heading2' | 'heading3' | 'heading4' | 'heading5';

export type HeadingDefaultValue = {
  text: string;
};

export type HeadingProps = {
  type: HeadingSizes;
  value: HeadingDefaultValue & Partial<HeadingStylingProps>;
};

export type HeadingStylingProps = {
  emphasize: boolean;
  headline: string;
  href: string;
};

// ------------------------------------------------------------------------------------------------------------------------------------

export type MapWithCarouselProps = {
  type: 'pois';
  value: {
    pois: Array<Poi>;
    memo?: Array<ItineraryItem['memo']>;
    schedule: Array<ItineraryItem['schedule']>;
    transportation: Array<ItineraryItem['transportation']>;
  };
};

// ------------------------------------------------------------------------------------------------------------------------------------
// Poi
export type PoisProps = { type: 'pois'; value: { pois: Poi[] } };

// ------------------------------------------------------------------------------------------------------------------------------------

export type BodyItemProps =
  | ArticleDividerProps
  | ArticleTextProps
  | HeadingProps
  | NoteProps
  | ImageProps
  | LinkProps
  | EmbeddedProps
  | PoisProps
  | ItineraryProps;
