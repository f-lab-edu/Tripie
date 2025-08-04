'use client';
'use client';
import { BlurImageOnLoad } from '@tripie-pyotato/design-system/@components';
import API from 'constants/api-routes';

const TripieBlurImage = ({ src, index }: { src: string; index: number }) => {
  return (
    <BlurImageOnLoad
      src={src}
      alt={`${src} 이미지`}
      cloudinaryUrl={API.MEDIA_URL}
      fillAvailable={true}
      loading={index >= 2 ? 'lazy' : 'eager'}
      priority={index < 2 ? 'high' : 'default'}
    />
  );
};
export default TripieBlurImage;
