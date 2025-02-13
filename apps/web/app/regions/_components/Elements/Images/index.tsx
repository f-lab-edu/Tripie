'use client';
import { Carousel, TripieContainer, TripieImage } from '@tripie-pyotato/design-system';
import { ArticleImage } from 'models/Article';

export type ImageProps = { type: 'images'; value: { images: ArticleImage[] } };

const ArticleImages = ({ item }: { item: ImageProps }) => {
  const { images } = item.value;

  return (
    <TripieContainer applyMargin="top">
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
    </TripieContainer>
  );
};

export default ArticleImages;
