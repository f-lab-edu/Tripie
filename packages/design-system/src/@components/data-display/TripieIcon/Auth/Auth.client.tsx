'use client';

import { ICON_RESOURCE_ICON, ICON_SIZES, RESOURCE } from 'shared';
import Icon, { IconProps } from '../Icon.client';
import VARIANTS from './variants';

const AuthIcon = ({ sizes = 'icon', src = 'GITHUB', ...args }: Readonly<IconProps>) => {
  return (
    <Icon
      variants={VARIANTS}
      src={ICON_RESOURCE_ICON(src as keyof typeof RESOURCE, ICON_SIZES[sizes])}
      alt={`oauth 아이콘`}
      sizes={sizes}
      {...args}
    />
  );
};

export default AuthIcon;
