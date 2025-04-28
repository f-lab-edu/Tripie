'use client';

import { AnimatedButton, Icon } from '@tripie-pyotato/design-system/@components';
import { Text } from '@tripie-pyotato/design-system/@core';

import { classNames } from 'wrapper';
import Style from './o-auth-button.module.scss';

const cx = classNames.bind(Style);

const OAuthButton = ({ provider, name }: { provider: { name: string }; name: string }) => {
  return (
    <AnimatedButton type="submit" withBorder={true} withMinWidth={false}>
      <span className={cx('center')}>
        <Text className={cx('text')}>Sign in with</Text>
        <Text className={cx('text')}>{provider.name}</Text>
        <Icon.Auth src={name} />
      </span>
    </AnimatedButton>
  );
};

export default OAuthButton;
