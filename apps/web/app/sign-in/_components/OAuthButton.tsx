'use client';

import { Icon } from '@tripie-pyotato/design-system/@components';
import FlickTextButton from '@tripie-pyotato/design-system/@components/FlickTextButton';
import Text from '@tripie-pyotato/design-system/@core/Text';

const OAuthButton = ({ provider, name }: { provider: { name: string }; name: string }) => {
  return (
    <FlickTextButton type="submit" withBorder={true} sizes="large">
      <Text noGapUnderText={true} gap={'sm'}>
        Sign in with {provider.name} &nbsp;
      </Text>
      <Icon.Auth src={name} />
    </FlickTextButton>
  );
};

export default OAuthButton;
