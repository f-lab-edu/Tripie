'use client';
import { classNames, Motion, MotionProps } from '../../../wrappers';

import { ReactNode } from 'react';
import { useCycle } from '../../../@hooks';
import { COLORS } from '../../../shared/colors';

import TripieContainer from '@core/layout/TripieContainer';
import Style from './menu.module.scss';
import MenuIcon from './MenuIcon';
import MenuItem from './MenuItem';
import MenuList from './MenuList';

const cx = classNames.bind(Style);

export const Path = (props: MotionProps['svgProps']) => (
  <Motion.Path fill="transparent" strokeWidth="1" stroke={COLORS[0]} strokeLinecap="round" {...props} />
);

const Menu = ({
  className,
  children = '',
  initial = false,
  onToggleBefore,
  onToggleAfter,
}: {
  children?: ReactNode;
  initial?: boolean;
  className?: string;
  onToggleAfter?: () => void;
  onToggleBefore?: () => void;
}) => {
  const [isOpen, toggleOpen] = useCycle(initial, true);
  return (
    <Motion.Nav className={cx('nav', className)} initial={initial} animate={isOpen ? 'open' : 'closed'}>
      <TripieContainer margin="none">{children}</TripieContainer>
      <MenuIcon
        toggle={() => {
          if (onToggleBefore != null) {
            onToggleBefore();
          }
          toggleOpen();
          if (onToggleAfter != null) {
            onToggleAfter();
          }
        }}
      />
    </Motion.Nav>
  );
};

Menu.Item = MenuItem;
Menu.List = MenuList;

export default Menu;
