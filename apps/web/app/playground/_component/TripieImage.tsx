'use client';
import { BlurImageOnLoad } from '@tripie-pyotato/design-system/@components';
import API from 'constants/api-routes';

const TripieBlurImage = ({ src }: { src: string }) => {
  return (
    <BlurImageOnLoad
      src={src}
      alt={`${src} 이미지`}
      cloudinaryUrl={API.MEDIA_URL}
      fillAvailable={true}
      withBorder={true}
    />
  );
};
export default TripieBlurImage;
