'use client';

import { ReactNode } from 'react';
import { classNames, Motion } from '../../../wrappers';

import TripieContainer from '@core/layout/TripieContainer';
import Style from './splash-screen.module.scss';
const cx = classNames.bind(Style);

const SplashScreen = ({ children, className }: Readonly<{ children: ReactNode; className?: string }>) => {
  return (
    <Motion.Div
      className={cx('splash-full-screen', className)}
      initial={{ opacity: 1, y: 0 }}
      animate={{ opacity: 1, y: '-120%' }}
      transition={{ duration: 0.8, delay: 1 }}
    >
      <TripieContainer alignItems="center" justifyContent="center">
        {children}
      </TripieContainer>
    </Motion.Div>
  );
};

const ControlledSplashScreen = ({ children, className }: Readonly<{ children: ReactNode; className?: string }>) => {
  return (
    <Motion.Div className={cx('splash-full-screen', className)} initial={{ opacity: 1, y: 0 }}>
      <TripieContainer alignItems="center" justifyContent="center">
        {children}
      </TripieContainer>
    </Motion.Div>
  );
};

SplashScreen.Controlled = ControlledSplashScreen;
export default SplashScreen;
