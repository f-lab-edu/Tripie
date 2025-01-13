'use client';
import { Container } from '@tripie-pyotato/design-system';
import { BodyItemProps } from 'app/regions/[regionId]/articles/[articleId]/ArticleBody';
import classNames from 'classnames/bind';
import Card from 'shared/components/Card/Card';
import ArticleDivider from '../Divider';
import ArticleHeading from '../Header';
import ArticleLink from '../Link';
import ArticleNote from '../Note';
import ArticleText from '../Text';
import Style from './embedded.module.scss';

export type EmbeddedProps = { type: 'embedded'; value: { entries: Array<Array<BodyItemProps>> } };

const cx = classNames.bind(Style);

const ArticleCard = ({ entry }: { entry: Array<BodyItemProps> }) => {
  return (
    <Card.ClickableContent className={cx('embedded-card')}>
      {entry.map((embeddedItem: BodyItemProps, index: number) => {
        const { type } = embeddedItem;

        switch (type) {
          case 'images':
            return embeddedItem.value.images.map(({ sizes }) => (
              <Card.Content className={cx('card-img-wrap', 'embedded-card-img')} key={index + sizes.full.url}>
                <img src={sizes.full.url} alt={sizes.full.url} />
              </Card.Content>
            ));
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
            return <ArticleDivider item={embeddedItem} key={`divider-${type}-${index}`} />;
          case 'text':
            return <ArticleText item={embeddedItem} key={index + embeddedItem.value.text} />;
          case 'note':
            return <ArticleNote item={embeddedItem} key={JSON.stringify(embeddedItem)} />;
          case 'links':
            return <ArticleLink key={JSON.stringify(embeddedItem.value.links)} item={embeddedItem} />;
          default:
            return null;
        }
      })}
    </Card.ClickableContent>
  );
};

const ArticleEmbedded = ({ item }: { item: EmbeddedProps }) => {
  const { entries } = item.value;

  return (
    <Container applyMargin="top-bottom" className={cx(entries.length > 1 ? ['carousel'] : null)}>
      <Container className={cx(entries.length > 1 ? ['flex-items', 'embedded-card-wrap'] : null)} margin="none">
        {entries.map((entry, index) => (
          <ArticleCard entry={entry} key={index + JSON.stringify(entry)} />
        ))}
      </Container>
    </Container>
  );
};

export default ArticleEmbedded;
