'use client';
import { BlurImageOnLoad, Card, Carousel, Divider } from '@tripie-pyotato/design-system/@components';

import ArticleHeading from './Header';
import ArticleLink from './Link';
import ArticleNote from './Note';
import ArticleText from './Text/Text';

import { BodyItemProps, ImageProps } from 'models/Props';

const ArticleCard = ({
  item,
  regionId,
  sizes,
  dataUrl,
}: {
  sizes?: 'small' | 'card' | 'default' | 'full' | 'large' | 'medium' | 'tiny' | 'icon';
  item: Array<BodyItemProps>;
  regionId: string;
  dataUrl: string;
}) => {
  return (
    <Card sizes={sizes} margin="none" padding="sm" key={regionId + JSON.stringify(item)}>
      {item.map((embeddedItem: BodyItemProps, index: number) => {
        const { type } = embeddedItem;
        switch (type) {
          case 'images': {
            const images = embeddedItem.value?.images
              ? embeddedItem.value.images
              : (embeddedItem.value as unknown as ImageProps['value']['images']);
            return (
              <Carousel
                key={JSON.stringify(images) + index}
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
              <Card.Header margin="none" key={index + JSON.stringify(embeddedItem)}>
                <ArticleHeading item={embeddedItem} />
              </Card.Header>
            );
          case 'hr1':
          case 'hr2':
          case 'hr3':
          case 'hr4':
          case 'hr5':
            return <Divider.Article item={embeddedItem} key={`divider-${type}-${index}`} />;
          case 'text':
            return (
              <Card.Content applyMargin="top-bottom" margin="m" key={index + embeddedItem.value.text}>
                <ArticleText item={embeddedItem} />
              </Card.Content>
            );
          case 'note':
            return <ArticleNote item={embeddedItem} key={JSON.stringify(embeddedItem)} />;
          case 'links':
            return (
              <Card.Content margin="sm" applyMargin="top" key={JSON.stringify(embeddedItem.value.links)}>
                <ArticleLink item={embeddedItem} regionId={regionId} dataUrl={dataUrl} />
              </Card.Content>
            );
          default:
            return null;
        }
      })}
    </Card>
  );
};

export default ArticleCard;
