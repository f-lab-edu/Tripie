'use client';
import { Container } from '@tripie-pyotato/design-system';
import classNames from 'classnames/bind';
import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import { InView } from 'react-intersection-observer';
import Icon from '../Icon/Icon';
import Style from './animated-button.module.scss';
import { BUTTON_VARIANTS } from './variants';

const cx = classNames.bind(Style);

const Text = ({
  children,
  className,
}: Readonly<{
  children: ReactNode;
  className?: string;
}>) => {
  return (
    <motion.span className={cx('text', className)} variants={BUTTON_VARIANTS['TEXT']}>
      {children}
    </motion.span>
  );
};

const AnimatedButton = ({
  children,
  className,
  disabled = false,
  otherChild = children,
  withBorder = false,
  onClick,
  animate = 'rest',
}: Readonly<{
  children: ReactNode;
  disabled?: boolean;
  otherChild?: ReactNode;
  className?: string;
  withBorder?: boolean;
  onClick?: () => void;
  animate?: 'rest' | 'hover';
}>) => {
  return (
    <motion.button
      disabled={disabled}
      onClick={onClick}
      className={cx('button', withBorder && 'with-border', className)}
      initial="rest"
      whileHover={disabled ? 'rest' : 'hover'}
      whileTap={disabled ? 'rest' : 'hover'}
      animate={animate}
    >
      <Text>{children}</Text>
      <Text className={cx('hovered')}>{otherChild}</Text>
    </motion.button>
  );
};

const NextButton = ({ children }: { children: ReactNode }) => {
  return (
    <InView>
      {({ inView, ref }) => (
        <Container ref={ref} margin="none" className={cx('next-button-wrap')}>
          <AnimatedButton withBorder={true} animate={inView ? 'hover' : 'rest'} className={cx('submit-button')}>
            <Container margin="none" className={cx('flex')}>
              {children}
            </Container>
          </AnimatedButton>
          <Container margin="none">
            <Icon.Cursor hovered={inView ? 'hover' : ''} className={cx('all-info-cursor')} />
          </Container>
        </Container>
      )}
    </InView>
  );
};

AnimatedButton.Next = NextButton;

export default AnimatedButton;
