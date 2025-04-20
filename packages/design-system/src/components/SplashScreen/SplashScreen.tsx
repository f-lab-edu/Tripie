'use client';

import { ReactNode } from 'react';
import { classNames, Motion } from '../../wrappers';
import Container from '../core/TripieContainer/TripieContainer';
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
      <Container alignItems="center" justifyContent="center">
        {children}
      </Container>
    </Motion.Div>
  );
};

const ControlledSplashScreen = ({ children, className }: Readonly<{ children: ReactNode; className?: string }>) => {
  return (
    <Motion.Div className={cx('splash-full-screen', className)} initial={{ opacity: 1, y: 0 }}>
      <Container alignItems="center" justifyContent="center">
        {children}
      </Container>
    </Motion.Div>
  );
};

SplashScreen.Controlled = ControlledSplashScreen;
export default SplashScreen;
