'use client';
import classNames from 'classnames/bind';
import { ReactNode } from 'react';
import MotionWrapper from '../../shared/wrappers/motion-wrapper';
import Container from '../TripieContainer/TripieContainer';
import Style from './splash-screen.module.scss';
const cx = classNames.bind(Style);

const SplashScreen = ({ children }: Readonly<{ children: ReactNode }>) => {
  return (
    <MotionWrapper.Section
      className={cx('section')}
      initial={{ opacity: 1, y: 0 }}
      animate={{ opacity: 1, y: '-120%' }}
      transition={{ duration: 0.8, delay: 1 }}
    >
      <Container align="center">{children}</Container>
    </MotionWrapper.Section>
  );
};

const ControlledSplashScreen = ({ children }: Readonly<{ children: ReactNode }>) => {
  return (
    <MotionWrapper.Section className={cx('section')} initial={{ opacity: 1, y: 0 }}>
      <Container align="center">{children}</Container>
    </MotionWrapper.Section>
  );
};

SplashScreen.Controlled = ControlledSplashScreen;
export default SplashScreen;
