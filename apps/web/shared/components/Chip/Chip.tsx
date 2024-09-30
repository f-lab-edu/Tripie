import classNames from 'classnames/bind';

import { ReactNode } from 'react';
import Style from './chip.module.scss';

import { motion } from 'framer-motion';
import { GLOW_VARIANT, SHINE_VARIANT } from './variants';

const cx = classNames.bind(Style);

type ChipProps = {
  selected?: boolean;
  children: ReactNode;
  className?: string;
  current?: string;
  cycle?: (state?: any) => void;
  onClick?: () => void;
};

const Chip = ({ children, className, onClick, selected }: Readonly<ChipProps>) => {
  return (
    <motion.button
      whileHover={'shine'}
      whileTap={'shine'}
      animate={selected ? 'selected' : 'rest'}
      variants={SHINE_VARIANT}
      onClick={onClick}
      className={cx('chip', 'with-border', className)}
    >
      {children}
    </motion.button>
  );
};

const AccentedChip = ({ children, current, className, onClick }: Readonly<ChipProps>) => {
  return (
    <motion.button
      initial={'rest'}
      className={cx('wrap', 'with-border', current === 'on' ? 'selected' : 'chip', className)}
      variants={GLOW_VARIANT}
      whileHover={'glow'}
      onClick={onClick}
    >
      <div className={cx('accented', current === 'on' ? 'selected' : 'chip')}>{children}</div>
      <motion.div
        className={cx('glow')}
        animate={{ rotate: 360 }}
        transition={{
          type: 'tween',
          duration: 2,
          ease: 'linear',
          repeat: Infinity,
        }}
      />
    </motion.button>
  );
};

Chip.Accented = AccentedChip;

export default Chip;
