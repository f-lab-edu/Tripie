'use client';
import { Container, Text } from '@tripie-pyotato/design-system';
import classNames from 'classnames/bind';
import { ArticleImage } from 'models/Article';
import { InView } from 'react-intersection-observer';
import Card from 'shared/components/Card/Card';
import Style from './images.module.scss';

export type ImageProps = { type: 'images'; value: { images: ArticleImage[] } };

const cx = classNames.bind(Style);

const ArticleImages = ({ item }: { item: ImageProps }) => {
  const { images } = item.value;

  return (
    <InView>
      {({ inView, ref }) => (
        <Container ref={ref} applyMargin="top" className={cx(inView ? 'visible-scroll' : null)}>
          <Container margin="none" key={JSON.stringify(images)} className={cx(images.length > 1 ? 'carousel' : null)}>
            <Container margin="none" className={cx(images.length > 1 ? ['flex-items', 'carousel-inner'] : null)}>
              {images.map(({ sizes, sourceUrl }) => (
                <Container className={cx('carousel-item')} margin="none" key={sizes.full.url}>
                  <Card.Content className={cx('img-wrap')}>
                    <img src={sizes.full.url} key={sizes.full.url} alt={sizes.full.url} ref={ref} />
                    <Container className={cx('img-source')} margin="none">
                      {sourceUrl == null ? null : <Text className={cx('source-url')}>{`출처 ${sourceUrl}`}</Text>}
                    </Container>
                  </Card.Content>
                </Container>
              ))}
            </Container>
          </Container>
        </Container>
      )}
    </InView>
  );
};

export default ArticleImages;
