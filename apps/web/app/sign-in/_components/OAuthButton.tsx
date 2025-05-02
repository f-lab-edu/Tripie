'use client';

import { AnimatedButton, Icon } from '@tripie-pyotato/design-system/@components';
import { Text } from '@tripie-pyotato/design-system/@core';

import { classNames } from 'wrapper';
import Style from './o-auth-button.module.scss';

const cx = classNames.bind(Style);

const OAuthButton = ({ provider, name }: { provider: { name: string }; name: string }) => {
  return (
    <AnimatedButton isFullSize={true} type="submit" withBorder={true} withMinWidth={false}>
      <Text isButtonText={true} className={cx('text')} gap={'sm'}>
        Sign in with {provider.name}
      </Text>
      <Icon.Auth src={name} />
    </AnimatedButton>
  );
};

export default OAuthButton;
