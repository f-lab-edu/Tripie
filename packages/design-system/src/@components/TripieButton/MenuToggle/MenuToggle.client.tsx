'use client';
import { classNames, Motion, MotionProps } from '../../../wrappers';

import { ReactNode } from 'react';
import { useCycle } from '../../../@hooks';
import { COLORS } from '../../../shared/colors';

import TripieContainer from '@core/TripieContainer';
import UnStyledButton from '../UnStyled/UnStyledButton.client';
import Style from './menu-toggle.module.scss';
import MenuItem from './MenuItem';
import MenuList from './MenuList';

const cx = classNames.bind(Style);

export const Path = (props: MotionProps['svgProps']) => (
  <Motion.Path fill="transparent" strokeWidth="1" stroke={COLORS[0]} strokeLinecap="round" {...props} />
);

const ToggleButton = ({ toggle }: { toggle: () => void }) => (
  <UnStyledButton action={() => toggle()} className={cx('menu-toggle')}>
    <svg width="24" height="24" viewBox="0 0 24 24" className={cx('svg')}>
      <Path
        variants={{
          closed: { d: 'M 2 2.5 L 20 2.5' },
          open: { d: 'M 3 16.5 L 17 2.5' },
        }}
      />
      <Path
        d="M 2 9.423 L 20 9.423"
        variants={{
          closed: { opacity: 1 },
          open: { opacity: 0 },
        }}
        transition={{ duration: 0.1 }}
      />
      <Path
        variants={{
          closed: { d: 'M 2 16.346 L 20 16.346' },
          open: { d: 'M 3 2.5 L 17 16.346' },
        }}
      />
    </svg>
  </UnStyledButton>
);

const MenuToggle = ({
  className,
  children = '',
  initial = false,
}: {
  children?: ReactNode;
  initial?: boolean;
  className?: string;
}) => {
  const [isOpen, toggleOpen] = useCycle(initial, true);
  return (
    <Motion.Nav className={cx('nav', className)} initial={initial} animate={isOpen ? 'open' : 'closed'}>
      <TripieContainer margin="none">{children}</TripieContainer>
      <ToggleButton toggle={toggleOpen} />
    </Motion.Nav>
  );
};

MenuToggle.Item = MenuItem;
MenuToggle.List = MenuList;

export default MenuToggle;
