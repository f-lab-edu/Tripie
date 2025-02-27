'use client';
import classNames from 'classnames/bind';
import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import Text from '../../Text';
import Style from './animated-button.module.scss';

const cx = classNames.bind(Style);

const AnimatedButton = ({
  children,
  className,
  disabled = false,
  otherChild = children,
  withBorder = false,
  onClick,
  animate = 'rest',
  withMinWidth = false,
}: Readonly<{
  children: ReactNode;
  disabled?: boolean;
  otherChild?: ReactNode;
  className?: string;
  withBorder?: boolean;
  onClick?: () => void;
  animate?: 'rest' | 'hover';
  withMinWidth?: boolean;
}>) => {
  return (
    <motion.button
      disabled={disabled}
      onClick={onClick}
      className={cx('button', withBorder && 'with-border', withMinWidth && 'min', className)}
      initial="rest"
      whileHover={disabled ? 'rest' : 'hover'}
      whileTap={disabled ? 'rest' : 'hover'}
      animate={animate}
    >
      <Text.Flick>{children}</Text.Flick>
      <Text.Flick className={cx('hovered')}>{otherChild}</Text.Flick>
    </motion.button>
  );
};

export default AnimatedButton;
