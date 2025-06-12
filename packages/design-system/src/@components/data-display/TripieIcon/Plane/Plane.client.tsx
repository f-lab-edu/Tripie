'use client';

import { classNames } from 'wrappers';
import Icon, { IconProps } from '../Icon.client';
import Style from './plane.module.scss';

import { ICON_RESOURCE_ICON, ICON_SIZES } from '../../../../shared/resource';
import variants from './variants';

const cx = classNames.bind(Style);

const PlaneIcon = ({ className, sizes = 'icon', ...args }: Readonly<IconProps>) => {
  return (
    <Icon
      {...args}
      animate={'fly'}
      initial={'rotate'}
      src={ICON_RESOURCE_ICON('PLANE', ICON_SIZES[sizes])}
      sizes={sizes}
      alt={'plane icon'}
      variants={variants}
      className={cx('plane', className)}
      isButton={false}
    />
  );
};
export default PlaneIcon;
