'use client';

import { AnimatedButton, Icon, Text } from '@tripie-pyotato/design-system/@components';

import { ICON_RESOURCE, RESOURCE } from '@tripie-pyotato/design-system/shared';
import { classNames } from 'wrapper';
import Style from './o-auth-button.module.scss';

const cx = classNames.bind(Style);

const OAuthButton = ({ provider }: { provider: { name: string } }) => {
  return (
    <AnimatedButton type="submit" withBorder={true} withMinWidth={false}>
      <span className={cx('center')}>
        <Text className={cx('text')}>Sign in with </Text>
        <Text className={cx('text')}>{provider.name}</Text>
        <Icon.Auth src={ICON_RESOURCE(provider.name.toUpperCase() as keyof typeof RESOURCE)} />
      </span>
    </AnimatedButton>
  );
};

export default OAuthButton;
