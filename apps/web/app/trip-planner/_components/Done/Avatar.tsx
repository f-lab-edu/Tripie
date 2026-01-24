'use client';
import { BlurImageOnLoad } from '@tripie-pyotato/design-system/@components';
import API from 'constants/api-routes';
import { MEDIA_URL } from 'shared/image';

const Avatar = ({
  src = MEDIA_URL + 'f_auto,q_auto:good,w_32,h_32,dpr_auto/v1744014743/tripie-image_anglvk',
}: {
  src?: string;
}) => {
  return (
    <BlurImageOnLoad
      fillAvailable={false}
      src={src}
      alt={'tripie-icon'}
      cloudinaryUrl={API.MEDIA_URL}
      sizes={'avatar'}
      withBorder={true}
      style={{ maxWidth: '3rem' }}
      aspectRatio="square"
    />
  );
};

export default Avatar;
