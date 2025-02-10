'use client';
import { Card, Container, Divider, TripieImage } from '@tripie-pyotato/design-system';
import classNames from 'classnames/bind';
import ArticleHeading from '../Header';

import { BodyItemProps } from 'app/regions/[regionId]/articles/[articleId]/ArticleBody';
import { ImageProps } from '../Images';
import ArticleLink from '../Link';
import ArticleNote from '../Note';
import ArticleText from '../Text';
import Style from './embedded.module.scss';

export type EmbeddedProps = { type: 'embedded'; value: Array<Array<BodyItemProps>> };

const cx = classNames.bind(Style);

const ArticleCard = ({
  item,
  regionId,
  dataUrl,
}: {
  item: Array<BodyItemProps>;
  regionId: string;
  dataUrl: string;
}) => {
  return (
    <Card.ClickableContent className={cx('embedded-card')}>
      {item.map((embeddedItem: BodyItemProps, index: number) => {
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
    <Container applyMargin="top-bottom" className={cx(item.value.length > 1 ? ['carousel'] : null)}>
      <Container className={cx(item.value.length > 1 ? ['flex-items', 'embedded-card-wrap'] : null)} margin="none">
        {item.value?.map((item, index) => (
          <ArticleCard item={item} key={index + JSON.stringify(item)} regionId={regionId} dataUrl={dataUrl} />
        ))}
      </Container>
    </Container>
  );
};

export default ArticleEmbedded;
