'use client';
import { AnimatedText, Icon, SplashScreen, TextFillAnimation } from '@tripie-pyotato/design-system/@components';
import { Container } from '@tripie-pyotato/design-system/@components/core';
import { classNames } from 'wrapper';
import Style from './loader.module.scss';

const cx = classNames.bind(Style);

const Loading = () => {
  return (
    <SplashScreen>
      <TextFillAnimation.Title>Tripie.</TextFillAnimation.Title>
    </SplashScreen>
  );
};

const ControlledLoader = () => {
  return (
    <SplashScreen.Controlled>
      <TextFillAnimation.Title>Tripie.</TextFillAnimation.Title>
    </SplashScreen.Controlled>
  );
};

const SemiTransparentLoader = () => {
  return (
    <SplashScreen.Controlled className={cx('semi-transparent')}>
      <Container margin="none" align="center" className={cx('loader-wrap')}>
        <Icon.Loading /> <AnimatedText.Jump>loading...</AnimatedText.Jump>
      </Container>
    </SplashScreen.Controlled>
  );
};

Loading.Controlled = ControlledLoader;

Loading.SemiTransparent = SemiTransparentLoader;

export default Loading;
