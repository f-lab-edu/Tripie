'use client';
import { BlurImageOnLoad, Carousel } from '@tripie-pyotato/design-system/@components';
import { Divider, ImageSizes, TripieCard } from '@tripie-pyotato/design-system/@core';

import ArticleHeading from './Header';
import ArticleLink from './Link';
import ArticleNote from './Note';
import ArticleText from './Text';

import { BodyItemProps, ImageProps } from 'models/Props';

const ArticleCard = ({
  item,
  regionId,
  sizes,
  dataUrl,
}: {
  sizes: ImageSizes;
  item: Array<BodyItemProps>;
  regionId: string;
  dataUrl: string;
}) => {
  return (
    <TripieCard sizes={sizes} margin="none" padding="sm" key={regionId + JSON.stringify(item)}>
      {item.map((embeddedItem: BodyItemProps, index: number) => {
        const { type } = embeddedItem;
        switch (type) {
          case 'images': {
            const images = embeddedItem.value?.images
              ? embeddedItem.value.images
              : (embeddedItem.value as unknown as ImageProps['value']['images']);
            return (
              <Carousel
                key={JSON.stringify(images)}
                items={images?.map(({ sizes, sourceUrl }, imgIndex) => (
                  <BlurImageOnLoad.WithSourceUrl
                    aspectRatio={'photo'}
                    sourceUrl={sourceUrl}
                    src={sizes.full.url}
                    alt={sizes.full.url}
                    key={`${index}-${sizes.full.url}-${imgIndex}`}
                    withBorder={true}
                    sizes={'card'}
                  />
                ))}
              />
            );
          }
          case 'heading1':
          case 'heading2':
          case 'heading3':
          case 'heading4':
          case 'heading5':
            return (
              <TripieCard.Header margin="none" key={index + JSON.stringify(embeddedItem.value)}>
                <ArticleHeading item={embeddedItem} />
              </TripieCard.Header>
            );
          case 'hr1':
          case 'hr2':
          case 'hr3':
          case 'hr4':
          case 'hr5':
            return <Divider.Article item={embeddedItem} key={`divider-${type}-${index}`} />;
          case 'text':
            return (
              <TripieCard.Content applyMargin="top-bottom" margin="m" key={index + embeddedItem.value.text}>
                <ArticleText item={embeddedItem} />
              </TripieCard.Content>
            );
          case 'note':
            return <ArticleNote item={embeddedItem} key={JSON.stringify(embeddedItem)} />;
          case 'links':
            return (
              <TripieCard.Content margin="sm" applyMargin="top" key={JSON.stringify(embeddedItem.value.links)}>
                <ArticleLink item={embeddedItem} regionId={regionId} dataUrl={dataUrl} />
              </TripieCard.Content>
            );
          default:
            return null;
        }
      })}
    </TripieCard>
  );
};

export default ArticleCard;
