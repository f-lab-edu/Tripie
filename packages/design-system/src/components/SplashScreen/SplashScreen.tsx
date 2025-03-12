'use client';

import { ReactNode } from 'react';
import { classNames, Motion } from '../../shared/wrappers';
import Container from '../TripieContainer/TripieContainer';
import Style from './splash-screen.module.scss';
const cx = classNames.bind(Style);

const SplashScreen = ({ children }: Readonly<{ children: ReactNode }>) => {
  return (
    <Motion.Section
      className={cx('section')}
      initial={{ opacity: 1, y: 0 }}
      animate={{ opacity: 1, y: '-120%' }}
      transition={{ duration: 0.8, delay: 1 }}
    >
      <Container align="center">{children}</Container>
    </Motion.Section>
  );
};

const ControlledSplashScreen = ({ children }: Readonly<{ children: ReactNode }>) => {
  return (
    <Motion.Section className={cx('section')} initial={{ opacity: 1, y: 0 }}>
      <Container align="center">{children}</Container>
    </Motion.Section>
  );
};

SplashScreen.Controlled = ControlledSplashScreen;
export default SplashScreen;
