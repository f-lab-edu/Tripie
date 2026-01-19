'use client';

import { ReactNode, useEffect, useState } from 'react';
import { classNames, Motion } from '../../../wrappers';

import TripieContainer, { TripieContainerProps } from '@core/layout/TripieContainer';
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
  lock?: boolean;
}>;

const SplashScreen = ({
  variant = 'default',
  children,
  duration = 0.8,
  className,
  loading = true,
  delay = 0,
  centerItems = true,
  lock = false,
}: SplashScreenProps) => {
  const [shouldAnimateOut, setShouldAnimateOut] = useState(false);

  useEffect(() => {
    if (!loading) {
      const timeout = setTimeout(() => setShouldAnimateOut(true), delay * 1000);
      return () => clearTimeout(timeout);
    }
  }, [loading, delay]);

  // Lock body scroll when splash is visible
  useEffect(() => {
    if (lock && loading) {
      const originalStyle = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = originalStyle;
      };
    }
  }, [lock, loading]);

  return (
    <Motion.Div
      className={cx(
        'splash-full-screen',
        centerItems ? `center` : '',
        `variant-${variant}`,
        `${lock ? 'locked' : ''}`,
        className
      )}
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
  display = 'inline-flex',
  lock = false,
}: SplashScreenProps & Pick<TripieContainerProps, 'display'>) => {
  // Lock body scroll when splash is visible
  useEffect(() => {
    if (lock) {
      const originalStyle = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = originalStyle;
      };
    }
  }, [lock]);

  return (
    <Motion.Div
      className={cx(
        `variant-${variant}`,
        'splash-full-screen',
        centerItems ? `center` : '',
        `${lock ? 'locked' : ''}`,
        className
      )}
      initial={{ opacity: 1, y: 0 }}
    >
      <TripieContainer alignItems="center" justifyContent="center" display={display}>
        {children}
      </TripieContainer>
    </Motion.Div>
  );
};

SplashScreen.Controlled = ControlledSplashScreen;

export default SplashScreen;
