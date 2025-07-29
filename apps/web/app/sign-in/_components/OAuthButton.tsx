'use client';

import { FlickTextButton } from '@tripie-pyotato/design-system/@components';
import Text from '@tripie-pyotato/design-system/@core/Text';
import TripieIcon from 'shared/components/TripieIcon/TripieIcon';

const OAuthButton = ({ provider, name }: { provider: { name: string }; name: string }) => {
  return (
    <FlickTextButton type="submit" withBorder={true} sizes="large">
      <Text noGapUnderText={true} gap={'sm'}>
        Sign in with {provider.name} &nbsp;
      </Text>
      <TripieIcon variant="auth" src={name} />
    </FlickTextButton>
  );
};

export default OAuthButton;
