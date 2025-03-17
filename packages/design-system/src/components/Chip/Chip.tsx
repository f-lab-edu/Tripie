import { classNames, Motion } from '../../shared/wrappers';

import { ReactNode } from 'react';
import Style from './chip.module.scss';

import { GLOW_VARIANT, SHINE_VARIANT } from '../../shared/variants';

const cx = classNames.bind(Style);

type ChipProps = {
  selected?: boolean;
  children: ReactNode;
  className?: string;
  current?: string;
  disabled?: boolean;
  cycle?: (state?: any) => void;
  onClick?: () => void;
  type?: 'submit' | 'reset' | 'button';
};

const Chip = ({ children, className, onClick, selected, disabled = false }: Readonly<ChipProps>) => {
  return (
    <Motion.Button
      whileHover={'shine'}
      whileTap={'shine'}
      disabled={disabled}
      animate={selected ? 'selected' : 'rest'}
      variants={SHINE_VARIANT}
      onClick={onClick}
      className={cx('chip', 'with-border', className)}
    >
      {children}
    </Motion.Button>
  );
};

const AccentedChip = ({ children, current, className, onClick, type = 'button' }: Readonly<ChipProps>) => {
  return (
    <Motion.Button
      initial={'rest'}
      className={cx('wrap', 'with-border', current === 'on' ? 'selected' : 'chip', className)}
      variants={GLOW_VARIANT}
      whileHover={'glow'}
      onClick={onClick}
      type={type}
    >
      <div className={cx('accented', current === 'on' ? 'selected' : 'chip')}>{children}</div>
      <Motion.Div
        className={cx('glow')}
        animate={{ rotate: 360 }}
        transition={{
          type: 'tween',
          duration: 2,
          ease: 'linear',
          repeat: Infinity,
        }}
      />
    </Motion.Button>
  );
};

Chip.Accented = AccentedChip;

export default Chip;
