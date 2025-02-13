'use client';
import { Card, Divider, TripieContainer, TripieImage } from '@tripie-pyotato/design-system';
import classNames from 'classnames/bind';
import ArticleHeading, { HeadingProps } from '../Header';

import { ArticleDividerProps } from '@tripie-pyotato/design-system/components/Divider/Divider';
import { ImageProps } from '../Images';
import ArticleLink, { LinkProps } from '../Link';
import ArticleNote, { NoteProps } from '../Note';
import ArticleText, { ArticleTextProps } from '../Text';
import Style from './embedded.module.scss';

import { ItineraryProps } from '../Itinerary';
import { PoisProps } from '../Pois';

type EmbeddedCardProps =
  | ArticleDividerProps
  | ArticleTextProps
  | HeadingProps
  | NoteProps
  | ImageProps
  | LinkProps
  | EmbeddedProps
  | PoisProps
  | ItineraryProps;

export type EmbeddedProps = { type: 'embedded'; value: { entries: Array<Array<EmbeddedCardProps>> } };

const cx = classNames.bind(Style);

const ArticleCard = ({
  item,
  regionId,
  dataUrl,
}: {
  item: Array<EmbeddedCardProps>;
  regionId: string;
  dataUrl: string;
}) => {
  return (
    <Card.ClickableContent className={cx('embedded-card')}>
      {item.map((embeddedItem: EmbeddedCardProps, index: number) => {
        const { type } = embeddedItem;
        switch (type) {
          case 'images':
            return (embeddedItem.value as unknown as ImageProps['value']['images'])?.map(
              ({ sizes, sourceUrl, blurData }) => (
                <TripieImage.WithSourceUrl
                  sourceUrl={sourceUrl}
                  src={sizes.full.url}
                  alt={sizes.full.url}
                  key={index + sizes.full.url}
                  withBorder={true}
                  sizes={'card'}
                  blurDataURL={blurData?.data}
                />
              )
            );
          case 'heading1':
          case 'heading2':
          case 'heading3':
          case 'heading4':
          case 'heading5':
            return <ArticleHeading item={embeddedItem} key={index + JSON.stringify(embeddedItem.value)} />;
          case 'hr1':
          case 'hr2':
          case 'hr3':
          case 'hr4':
          case 'hr5':
            return <Divider.Article item={embeddedItem} key={`divider-${type}-${index}`} />;
          case 'text':
            return <ArticleText item={embeddedItem} key={index + embeddedItem.value.text} />;
          case 'note':
            return <ArticleNote item={embeddedItem} key={JSON.stringify(embeddedItem)} />;
          case 'links':
            return (
              <ArticleLink
                key={JSON.stringify(embeddedItem.value.links)}
                item={embeddedItem}
                regionId={regionId}
                dataUrl={dataUrl}
              />
            );
          default:
            return null;
        }
      })}
    </Card.ClickableContent>
  );
};

const ArticleEmbedded = ({ item, regionId, dataUrl }: { item: EmbeddedProps; regionId: string; dataUrl: string }) => {
  return (
    <TripieContainer applyMargin="top-bottom" className={cx(item.value.entries.length > 1 ? ['carousel'] : null)}>
      <TripieContainer
        className={cx(item.value.entries.length > 1 ? ['flex-items', 'embedded-card-wrap'] : null)}
        margin="none"
      >
        {item.value?.entries?.map((item, index) => (
          <ArticleCard item={item} key={index + JSON.stringify(item)} regionId={regionId} dataUrl={dataUrl} />
        ))}
      </TripieContainer>
    </TripieContainer>
  );
};

export default ArticleEmbedded;
