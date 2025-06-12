import { ICON_RESOURCE_ICON, ICON_SIZES } from 'shared';
import Icon, { IconProps } from '../Icon.client';

import VARIANTS from './variants';

const CursorIcon = ({
  hovered = '',
  transition,
  sizes = 'icon',
  ...args
}: Readonly<IconProps> & { hovered?: string }) => {
  return (
    <Icon
      initial={'initial'}
      animate={hovered}
      transition={transition}
      src={ICON_RESOURCE_ICON('CURSOR', ICON_SIZES[sizes])}
      sizes={sizes}
      alt={'cursor icon'}
      variants={VARIANTS}
      isButton={false}
      {...args}
    />
  );
};

export default CursorIcon;
