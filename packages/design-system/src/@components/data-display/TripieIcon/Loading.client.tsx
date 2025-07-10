'use client';

import { ICON_RESOURCE_ICON, ICON_SIZES } from 'shared';
import Icon, { IconProps } from './Icon.client';

const LoadingIcon = ({ sizes = 'icon', ...args }: Readonly<IconProps>) => {
  return (
    <Icon
      {...args}
      animate={{ rotate: '360deg' }}
      transition={{ repeat: Infinity, duration: 10, bounce: 0 }}
      src={ICON_RESOURCE_ICON('LOADING', ICON_SIZES[sizes])}
      sizes={sizes}
      alt={'loading icon'}
      isButton={false}
    />
  );
};

export default LoadingIcon;
