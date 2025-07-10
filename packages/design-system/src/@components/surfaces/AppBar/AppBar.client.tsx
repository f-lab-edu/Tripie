'use client';
// https://mui.com/material-ui/react-app-bar/

import TripieContainer, { TripieContainerProps } from '@core/layout/TripieContainer';
import { classNames } from '../../../wrappers';

import { ReactNode } from 'react';
import Style from './app-bar.module.scss';

const cx = classNames.bind(Style);

export type AppBarProps = {
  position: 'top' | 'bottom';
  fixed?: boolean;
  hideAppBarOnScroll?: boolean;
  elevateAppBarOnScroll?: boolean;
  isResponsive?: boolean;
  prominence?: 'sticky' | 'fixed' | 'overlay' | 'above-all';
} & Partial<TripieContainerProps>;

const AppBar = ({
  position,
  fixed = true,
  elevateAppBarOnScroll = false,
  hideAppBarOnScroll = false,
  isResponsive = false,
  prominence = 'fixed',
  className,
  display = 'inline-flex',
  children,
  zIndex = 'fixed',
  ...props
}: Readonly<AppBarProps>) => {
  return (
    <TripieContainer
      {...props}
      display={display}
      zIndex={zIndex}
      className={cx('app-bar', fixed ? `fixed-${position}` : `static-${position}`, position, className)}
      alignItems={'start'}
    >
      {children}
    </TripieContainer>
  );
};

export type AppBarWithMenuProps = {
  Menu: ReactNode;
  menuPosition?: 'left' | 'right';
} & Partial<AppBarProps>;

const AppWithMenu = ({
  position,
  className,
  display = 'inline-flex',
  zIndex = 'fixed',
  children,
  Menu,
  ...props
}: Readonly<AppBarWithMenuProps>) => {
  return (
    <TripieContainer
      display={display}
      zIndex={zIndex}
      {...props}
      className={cx(`menu-position-${position}`, className)}
    >
      {Menu}
      {children}
    </TripieContainer>
  );
};

export type AppBarWithLogoProps = {
  Logo: ReactNode;
  logoPosition?: 'left' | 'right';
} & Partial<AppBarProps>;

const AppBarWithLogo = ({
  position,
  className,
  children,
  Logo,
  display = 'inline-flex',
  zIndex = 'fixed',
  ...props
}: Readonly<AppBarWithLogoProps>) => {
  return (
    <TripieContainer
      display={display}
      zIndex={zIndex}
      {...props}
      className={cx(`menu-position-${position}`, className)}
    >
      {Logo}
      {children}
    </TripieContainer>
  );
};

AppBar.WithLogo = AppBarWithLogo;
AppBar.WithMenu = AppWithMenu;

export default AppBar;
