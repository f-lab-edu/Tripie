'use client';

import Icon, { IconProps } from '../Icon.client';

import { ICON_RESOURCE_ICON, ICON_SIZES } from '../../../../shared/resource';
import navigationVariants from './variants';

export type NavigationDirection = { direction?: 'back' | 'front'; disabled?: boolean; navigateUrl?: string };
export type NavigationIconProps = IconProps & NavigationDirection;

const NavigateIcon = ({
  direction = 'back',
  src,
  sizes = 'icon',
  variants = navigationVariants(direction),
  ...args
}: Readonly<NavigationIconProps>) => {
  return (
    <Icon
      {...args}
      src={src ?? ICON_RESOURCE_ICON('ARROW', ICON_SIZES[sizes])}
      alt={`${direction == 'back' ? '뒤로' : '앞으로 '}가기 버튼`}
      sizes={sizes}
      variants={variants}
      initial={'closed'}
      whileTap={'hover'}
      whileHover={'hover'}
    />
  );
};

export default NavigateIcon;
