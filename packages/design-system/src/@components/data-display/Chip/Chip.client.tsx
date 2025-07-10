'use client';

import { classNames, Motion } from '../../../wrappers';

import { ReactNode } from 'react';
import Style from './chip.module.scss';

import { SHINE_VARIANT } from '../../../shared/motion-variants';

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

export const activitySet = new Set(['attraction', 'restaurant', 'hotel']);

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

const MarkerChip = ({
  children,
  className,
  onClick,
  selected,
  disabled = false,
  variant = 'attraction',
}: Readonly<ChipProps> & { variant?: 'restaurant' | 'hotel' | 'attraction' | 'other' }) => {
  return (
    <Motion.Button
      whileHover={'shine'}
      whileTap={'shine'}
      disabled={disabled}
      animate={selected ? 'selected' : 'rest'}
      variants={SHINE_VARIANT}
      onClick={onClick}
      className={cx('chip', 'with-border', `variant-${activitySet.has(variant) ? variant : 'other'}`, className)}
    >
      {children}
    </Motion.Button>
  );
};

Chip.Marker = MarkerChip;

export default Chip;
