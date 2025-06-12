'use client';
import { classNames, Motion, MotionProps } from '../../../wrappers';

import { ReactNode } from 'react';
import Style from './icon.module.scss';

import { ICON_RESOURCE_ICON, ICON_SIZES } from '../../../shared/resource';
import AuthIcon from './Auth/Auth.client';
import CheckIcon from './Check.client';
import CloudIcon from './Cloud/Cloud.client';
import CursorIcon from './Cursor/Cursor.client';
import LoadingIcon from './Loading.client';
import NavigateIcon from './Navigation/Navigation.client';
import PlaneIcon from './Plane/Plane.client';
import RefreshIcon from './Refresh/Refresh.client';
import ScrollIcon from './Scroll/Scroll.client';
import TransportIcon from './Transport.client';
import { ICON_VARIANTS } from './variants';
import XIcon from './X.client';

export type MotionSlideUpProps = Partial<MotionProps['animationProps']> & { children?: ReactNode; className?: string };

const cx = classNames.bind(Style);

export type IconProps = {
  className?: string;
  withBorder?: boolean;
  onTapStart?: () => void;
  animate?: MotionProps['animationProps']['animate'];
  variants?: MotionProps['variants'];
  src?: string;
  transition?: MotionProps['animationProps']['transition'];
  onTap?: () => void;
  sizes?: 'large' | 'icon';
  isButton?: boolean;
  alt?: string;
  width?: string | number;
  height?: string | number;
  whileTap?: MotionProps['TargetAndTransition'] | MotionProps['VariantLabels'];
  whileHover?: MotionProps['TargetAndTransition'] | MotionProps['VariantLabels'];
  initial?: boolean | MotionProps['VariantLabels'] | MotionProps['Target'];
};

const Icon = ({
  className,
  onTapStart,
  src = ICON_RESOURCE_ICON('ARROW', ICON_SIZES['icon']),
  animate,
  sizes = 'icon',
  variants = ICON_VARIANTS.DEFAULT,
  transition,
  alt,
  width = ICON_SIZES['icon'],
  height = ICON_SIZES['icon'],
  initial,
  isButton = true,
  ...args
}: Readonly<IconProps>) => {
  return (
    <Motion.Img
      onTapStart={onTapStart}
      className={cx(sizes, isButton ? 'btn-icon' : '', className)}
      variants={variants}
      transition={transition}
      animate={animate}
      src={src}
      initial={initial}
      alt={alt == null ? `${src} icon` : alt}
      crossOrigin="anonymous"
      width={sizes != null ? ICON_SIZES[sizes] : width}
      height={height != null ? ICON_SIZES[sizes] : height}
      {...args}
    />
  );
};

Icon.Navigate = NavigateIcon;
Icon.Refresh = RefreshIcon;
Icon.Plane = PlaneIcon;
Icon.Cloud = CloudIcon;
Icon.Loading = LoadingIcon;
Icon.Transport = TransportIcon;
Icon.Cursor = CursorIcon;
Icon.Scroll = ScrollIcon;
Icon.X = XIcon;
Icon.Auth = AuthIcon;
Icon.Check = CheckIcon;

export default Icon;
