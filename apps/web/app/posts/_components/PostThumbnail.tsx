'use client';

import { BlurImageOnLoad } from '@tripie-pyotato/design-system/@components';
import { Container } from '@tripie-pyotato/design-system/@core';

const PostThumbnail = ({ images }: { images: string }) => {
  return (
    <Container margin="m" applyMargin="top">
      <BlurImageOnLoad
        withBorder={true}
        aspectRatio={'cinematic'}
        src={images?.replace('https://res.cloudinary.com', 'https://media.tripie-api.shop').replace('.jpeg', '')}
        sizes="large"
        cloudinaryUrl="https://media.tripie-api.shop"
        alt={images ?? `${images}`}
      />
    </Container>
  );
};

export default PostThumbnail;
