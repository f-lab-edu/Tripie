'use client';

import Icon, { IconProps } from '../Icon.client';

import { ICON_RESOURCE_ICON, ICON_SIZES } from '../../../../shared/resource';
import variants from './variants';

const RefreshIcon = ({
  onTapStart,
  cloudinaryUrl,
  animate,
  transition,
  sizes = 'icon',
  isButton,
  ...args
}: Readonly<IconProps>) => {
  return (
    <Icon
      onTapStart={onTapStart}
      whileTap={'hover'}
      cloudinaryUrl={cloudinaryUrl}
      whileHover={'hover'}
      variants={variants('undo')}
      transition={transition}
      initial={'closed'}
      animate={animate}
      {...args}
      src={ICON_RESOURCE_ICON('REFRESH', ICON_SIZES[sizes])}
      alt={'새로고침 아이콘'}
      isButton={isButton}
    />
  );
};
export default RefreshIcon;
