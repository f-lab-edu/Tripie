import classNames from 'classnames/bind';

import { ReactNode } from 'react';
import Style from './chip.module.scss';

import { LocationMarker } from 'app/trip-planner/_components/Chat';
import { motion } from 'framer-motion';
import { GLOW_VARIANT, SHINE_VARIANT } from './variants';

const cx = classNames.bind(Style);

type ChipProps = {
  selected?: boolean;
  children: ReactNode;
  className?: string;
  current?: string;
  disabled?: boolean;
  cycle?: (state?: any) => void;
  onClick?: () => void;
};

const Chip = ({ children, className, onClick, selected, disabled = false }: Readonly<ChipProps>) => {
  return (
    <motion.button
      whileHover={'shine'}
      whileTap={'shine'}
      disabled={disabled}
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

const Marker = ({ marker, popup, className }: { className: string; marker: LocationMarker; popup: string }) => {
  return (
    <Chip className={cx(className)} selected={marker.index === popup}>
      {+marker.index.split('-')[0]}
    </Chip>
  );
};

Chip.Marker = Marker;

Chip.Accented = AccentedChip;

export default Chip;
