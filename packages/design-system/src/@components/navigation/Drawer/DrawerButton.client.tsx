// https://mui.com/material-ui/react-drawer/
'use client';

import { classNames, Motion } from '../../../wrappers';

import Style from './drawer-button.module.scss';

import { COLORS } from 'shared';
import { VARIANTS } from './variants';

const cx = classNames.bind(Style);

const btn = (d: 'top' | 'bottom' | 'right' | 'left', isOpen?: boolean) => {
  const direction = {
    right: { open: '>', closed: '<' },
    top: { open: '^', closed: 'ｖ' },
  };

  if (d === 'left') {
    return direction['right'][!isOpen ? 'open' : 'closed'];
  } else if (d === 'bottom') {
    return direction['top'][!isOpen ? 'open' : 'closed'];
  } else return direction[d][isOpen ? 'open' : 'closed'];
};

const borderRadius = {
  top: `0px 0px 1rem 1rem`,
  bottom: `1rem 1rem 0px 0px`,
  left: `0px 1rem 1rem 0px`,
  right: `1rem 0px 0px 1rem`,
};

const DrawerButton = ({
  toggleOpen,
  isOpen,
  position,
}: {
  isOpen?: boolean;
  toggleOpen: (index?: number) => void;
  position: 'top' | 'bottom' | 'left' | 'right';
}) => {
  return (
    <Motion.Button
      onKeyDown={e => {
        e.preventDefault();
        if (e.key === 'Escape' && isOpen) {
          toggleOpen();
        }
      }}
      className={cx(`drawer-toggle-btn`)}
      onTouchStart={() => toggleOpen()}
      onClick={() => toggleOpen()}
      aria-label={`${isOpen ? 'close' : 'open'} panel`}
      variants={VARIANTS['BUTTON'](position)}
      style={{ border: `1px solid ${!isOpen ? COLORS[50] : COLORS[30]}`, borderRadius: borderRadius[position] }}
    >
      {btn(position, isOpen)}
    </Motion.Button>
  );
};

export default DrawerButton;
