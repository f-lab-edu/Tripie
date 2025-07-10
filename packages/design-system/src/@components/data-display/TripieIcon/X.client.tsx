'use client';

import { ICON_RESOURCE_ICON, ICON_SIZES } from 'shared';
import Icon, { IconProps } from './Icon.client';

const XIcon = ({ sizes = 'icon', ...args }: Readonly<IconProps>) => {
  return <Icon src={ICON_RESOURCE_ICON('X', ICON_SIZES[sizes])} alt={`X 아이콘`} {...args} />;
};

export default XIcon;
