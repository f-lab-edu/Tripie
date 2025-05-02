'use client';
import { AnimatedText, Icon, SplashScreen, TextFillAnimation } from '@tripie-pyotato/design-system/@components';
import { Container } from '@tripie-pyotato/design-system/@core';
import { classNames } from 'wrapper';
import Style from './loader.module.scss';

const cx = classNames.bind(Style);

const Loading = () => {
  return (
    <SplashScreen>
      <TextFillAnimation isTitle={true}>Tripie.</TextFillAnimation>
    </SplashScreen>
  );
};

const ControlledLoader = () => {
  return (
    <SplashScreen.Controlled>
      <TextFillAnimation isTitle={true}>Tripie.</TextFillAnimation>
    </SplashScreen.Controlled>
  );
};

const SemiTransparentLoader = () => {
  return (
    <SplashScreen.Controlled className={cx('semi-transparent')}>
      <Container margin="none" alignItems="center" className={cx('loader-wrap')}>
        <Icon.Loading /> <AnimatedText.Jump>loading...</AnimatedText.Jump>
      </Container>
    </SplashScreen.Controlled>
  );
};

Loading.Controlled = ControlledLoader;

Loading.SemiTransparent = SemiTransparentLoader;

export default Loading;
