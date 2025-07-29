'use client';

import { ICON_RESOURCE_ICON, ICON_SIZES } from 'shared';
import Icon, { IconProps } from '../Icon.client';

import variants from './variants';

const ScrollIcon = ({
  hovered = '',
  next = true,
  transition,
  onTapStart,
  sizes = 'icon',
  cloudinaryUrl,
  ...args
}: Readonly<IconProps> & {
  hovered?: string;
  next?: boolean;
}) => {
  return (
    <Icon
      initial={'initial'}
      cloudinaryUrl={cloudinaryUrl}
      onTapStart={onTapStart}
      animate={hovered}
      transition={transition}
      src={ICON_RESOURCE_ICON('NEXT', ICON_SIZES[sizes])}
      sizes={sizes}
      alt={'next icon'}
      variants={variants(next)}
      isButton={false}
      {...args}
    />
  );
};
export default ScrollIcon;
