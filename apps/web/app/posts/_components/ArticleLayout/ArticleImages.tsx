'use client';
import { BlurImageOnLoad, Carousel } from '@tripie-pyotato/design-system/@components';
import { Container } from '@tripie-pyotato/design-system/@core';
import { ImageProps } from 'models/Props';

const ArticleImages = ({ item }: { item: ImageProps }) => {
  const { images } = item.value;

  return (
    <Container applyMargin="top">
      <Carousel
        items={images.map((item, index) => {
          return (
            <BlurImageOnLoad.WithSourceUrl
              sizes="large"
              cloudinaryUrl="https://media.tripie-api.shop"
              withBorder={true}
              key={item.sizes.full.url + index}
              alt={item.sizes.full.url}
              src={item.sizes.full.url.replace('https://res.cloudinary.com', 'https://media.tripie-api.shop')}
              sourceUrl={item.sourceUrl}
            />
          );
        })}
      />
    </Container>
  );
};

export default ArticleImages;
