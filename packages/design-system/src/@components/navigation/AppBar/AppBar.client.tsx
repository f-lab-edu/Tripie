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
  children,
}: Readonly<AppBarProps>) => {
  return (
    <TripieContainer
      className={cx(
        'app-bar',
        `z-index-${!fixed ? 'sticky' : prominence}`,
        fixed ? `fixed-${position}` : `static-${position}`,
        position,
        className
      )}
    >
      {children}
    </TripieContainer>
  );
};

export type AppBarWithMenuProps = {
  Menu: ReactNode;
  menuPosition?: 'left' | 'right';
} & Partial<AppBarProps>;

const AppWithMenu = ({ position, className, children, Menu }: Readonly<AppBarWithMenuProps>) => {
  return (
    <TripieContainer className={cx('app-bar', `menu-position-${position}`, className)}>
      {Menu}
      {children}
    </TripieContainer>
  );
};

export type AppBarWithLogoProps = {
  Logo: ReactNode;
  logoPosition?: 'left' | 'right';
} & Partial<AppBarProps>;

const AppBarWithLogo = ({ position, className, children, Logo }: Readonly<AppBarWithLogoProps>) => {
  return (
    <TripieContainer className={cx('', `menu-position-${position}`, className)}>
      {Logo}
      {children}
    </TripieContainer>
  );
};

AppBar.WithLogo = AppBarWithLogo;
AppBar.WithMenu = AppWithMenu;

export default AppBar;
