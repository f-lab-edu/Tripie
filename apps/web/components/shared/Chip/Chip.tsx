import classNames from 'classnames/bind';

import { Text } from '@tripie/design-system';
import { ReactNode } from 'react';
import Style from './chip.module.scss';

import { Cycle, motion } from 'framer-motion';
import { GLOW_VARIANT } from './variants';

const cx = classNames.bind(Style);

type ChipProps = { children: ReactNode; className?: string; current?: string; cycle?: Cycle };

const Chip = ({ children, current, cycle, className }: Readonly<ChipProps>) => {
  return (
    <Text size="tiny" className={cx('chip', 'with-border', className)}>
      {children}
    </Text>
  );
};

const AccentedChip = ({ children, current, className }: Readonly<ChipProps>) => {
  return (
    <motion.div
      initial={'rest'}
      transition={{
        duration: 0.8,
        ease: 'circInOut',
      }}
      className={cx('wrap', 'with-border', current === 'on' ? 'selected' : 'chip', className)}
      variants={GLOW_VARIANT}
      whileHover={'glow'}
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
    </motion.div>
  );
};

Chip.Accented = AccentedChip;

export default Chip;
