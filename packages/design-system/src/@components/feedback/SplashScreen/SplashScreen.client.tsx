'use client';

import { ReactNode, useEffect, useState } from 'react';
import { classNames, Motion } from '../../../wrappers';

import TripieContainer from '@core/layout/TripieContainer';
import Style from './splash-screen.module.scss';
const cx = classNames.bind(Style);

export type SplashScreenProps = Readonly<{
  loading?: boolean;
  children: ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
  variant?: 'default' | 'backdrop';
  centerItems?: boolean;
}>;

const SplashScreen = ({
  variant = 'default',
  children,
  duration = 0.8,
  className,
  loading = true,
  delay = 0,
  centerItems = true,
}: SplashScreenProps) => {
  const [shouldAnimateOut, setShouldAnimateOut] = useState(false);

  useEffect(() => {
    if (!loading) {
      const timeout = setTimeout(() => setShouldAnimateOut(true), delay * 1000);
      return () => clearTimeout(timeout);
    }
  }, [loading, delay]);

  return (
    <Motion.Div
      className={cx('splash-full-screen', centerItems ? `center` : '', `variant-${variant}`, className)}
      initial={{ y: '0%' }}
      animate={shouldAnimateOut ? { y: '-100%' } : { y: '0%' }}
      transition={{ duration }}
      style={{ opacity: 1 }}
    >
      {children}
    </Motion.Div>
  );
};

const ControlledSplashScreen = ({
  variant = 'default',
  children,
  className,
  centerItems = true,
}: SplashScreenProps) => {
  return (
    <Motion.Div
      className={cx(`variant-${variant}`, 'splash-full-screen', centerItems ? `center` : '', className)}
      initial={{ opacity: 1, y: 0 }}
    >
      <TripieContainer alignItems="center" justifyContent="center">
        {children}
      </TripieContainer>
    </Motion.Div>
  );
};

SplashScreen.Controlled = ControlledSplashScreen;

export default SplashScreen;
