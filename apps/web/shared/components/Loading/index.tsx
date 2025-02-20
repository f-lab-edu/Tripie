'use client';
import { SplashScreen, TextFillAnimation } from '@tripie-pyotato/design-system';

const Loading = () => {
  return (
    <SplashScreen>
      <TextFillAnimation.Title>Tripie.</TextFillAnimation.Title>
    </SplashScreen>
  );
};

const ControlledLoading = () => {
  return (
    <SplashScreen.Controlled>
      <TextFillAnimation.Title>Tripie.</TextFillAnimation.Title>
    </SplashScreen.Controlled>
  );
};

Loading.Controlled = ControlledLoading;

export default Loading;
