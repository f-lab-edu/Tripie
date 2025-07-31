'use client';

import { BlurImageOnLoad } from '@tripie-pyotato/design-system/@components';
import { Container } from '@tripie-pyotato/design-system/@core';
import API from 'constants/api-routes';

const PostThumbnail = ({ images }: { images: string }) => {
  return (
    <Container margin="m" applyMargin="top">
      <BlurImageOnLoad
        withBorder={true}
        aspectRatio={'cinematic'}
        src={images?.replace('https://res.cloudinary.com', API.MEDIA_URL).replace('.jpeg', '')}
        sizes="large"
        cloudinaryUrl={API.MEDIA_URL}
        alt={images ?? `${images}`}
      />
    </Container>
  );
};

export default PostThumbnail;
