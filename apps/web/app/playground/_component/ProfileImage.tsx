'use client';
import { BlurImageOnLoad } from '@tripie-pyotato/design-system/@components';
import API from 'constants/api-routes';
import { useSession } from 'next-auth/react';

const ProfileImage = () => {
  const { data } = useSession();
  return (
    <BlurImageOnLoad
      cloudinaryUrl={API.MEDIA_URL}
      sizes={'avatar'}
      fillAvailable={false}
      src={data?.user.picture}
      withBorder={true}
      alt={data?.user?.name + "'s profile image"}
    />
  );
};
export default ProfileImage;
