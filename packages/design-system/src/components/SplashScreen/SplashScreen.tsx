'use client';
import classNames from 'classnames/bind';
import { motion } from 'framer-motion';
import { ReactNode, useCallback, useState } from 'react';
import Style from './splash-screen.module.scss';

const cx = classNames.bind(Style);

export default function SplashScreen({
  children,
  isLoading = true,
}: Readonly<{ children: ReactNode; isLoading: boolean }>) {
  const [isVisible, setIsVisible] = useState(isLoading);

  const handleLoadingState = useCallback(() => {
    setIsVisible(isLoading);
  }, [isLoading]);

  return isVisible ? (
    <motion.section
      className={cx('loading', 'section')}
      initial={{ opacity: 1, y: 0 }}
      animate={{ opacity: 1, y: '-100%' }}
      transition={{ duration: 0.8, delay: 1 }}
      onAnimationComplete={handleLoadingState}
    >
      {children}
    </motion.section>
  ) : null;
}
