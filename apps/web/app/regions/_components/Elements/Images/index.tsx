'use client';
import { Container, TripieImage } from '@tripie-pyotato/design-system';
import classNames from 'classnames/bind';
import { ArticleImage } from 'models/Article';
import { useState } from 'react';
import { InView } from 'react-intersection-observer';
import Style from './images.module.scss';

export type ImageProps = { type: 'images'; value: { images: ArticleImage[] } };

const cx = classNames.bind(Style);

const ArticleImages = ({ item }: { item: ImageProps }) => {
  const { images } = item.value;
  const [currentImageIndex, setCurrentImageIndex] = useState();

  return (
    <>
      {images.length > 1 && <progress value={currentImageIndex} max="100" className={cx('progress')} />}
      {/* <InstaLikeCarousel
        images={[
          'https://media.triple.guide/triple-cms/c_limit,f_auto,h_2048,w_2048/d74882b5-38c0-4036-b792-2d25b94071b6.jpeg',
          'https://media.triple.guide/triple-cms/c_limit,f_auto,h_2048,w_2048/f644c116-b6de-4f05-addb-77bbc9e3e02d.jpeg',
          'https://media.triple.guide/triple-cms/c_limit,f_auto,h_2048,w_2048/dd3e9c26-19da-450b-8b67-c07086cdfe53.jpeg',
        ]}
      /> */}
      <Container applyMargin="top">
        <Container margin="none" key={JSON.stringify(images)} className={cx(images.length > 1 ? 'carousel' : null)}>
          <Container margin="none" className={cx(images.length > 1 ? ['flex-items', 'carousel-inner'] : null)}>
            {images.map(({ sizes, sourceUrl, blurData }) => (
              <InView
                key={sizes.full.url}
                onChange={(inView, entry) => {
                  console.log('Inview:', entry.time, entry.intersectionRatio);
                }}
              >
                {({ inView, ref }) => (
                  <Container className={cx('carousel-item')} margin="none">
                    <TripieImage.WithSourceUrl
                      blurDataURL={blurData?.data}
                      alt={sizes.full.url}
                      src={sizes.full.url}
                      sourceUrl={sourceUrl}
                    />
                  </Container>
                )}
              </InView>
            ))}
          </Container>
        </Container>
      </Container>
    </>
  );
};

export default ArticleImages;
