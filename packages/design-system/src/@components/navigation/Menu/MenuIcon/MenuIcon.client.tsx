'use client';
import { classNames, Motion, MotionProps } from '../../../../wrappers';

import { COLORS } from '../../../../shared/colors';

import UnStyledButton from '../../../inputs/TripieButton/UnStyled/UnStyledButton.client';
import Style from './menu.module.scss';

const cx = classNames.bind(Style);

export const Path = (props: MotionProps['svgProps']) => (
  <Motion.Path fill="transparent" strokeWidth="1" stroke={COLORS[0]} strokeLinecap="round" {...props} />
);

const MenuIcon = ({ toggle }: { toggle: () => void }) => (
  <UnStyledButton
    onclick={() => toggle()}
    className={cx('menu-toggle')}
    padding="sm"
    withBorder={true}
    name="burger icon"
    aria-label="burger icon"
  >
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

export default MenuIcon;
