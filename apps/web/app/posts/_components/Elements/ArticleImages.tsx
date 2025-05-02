'use client';
import { Carousel } from '@tripie-pyotato/design-system/@components';
import { Container, TripieImage } from '@tripie-pyotato/design-system/@core';
import { ImageProps } from 'models/Props';

const ArticleImages = ({ item }: { item: ImageProps }) => {
  const { images } = item.value;

  return (
    <Container applyMargin="top">
      <Carousel
        items={images.map((item, index) => (
          <TripieImage.WithSourceUrl
            sizes="large"
            key={item.sizes.full.url + index}
            alt={item.sizes.full.url}
            src={item.sizes.full.url}
            sourceUrl={item.sourceUrl}
            blurDataURL={item.blurData?.data}
          />
        ))}
      />
    </Container>
  );
};

export default ArticleImages;
