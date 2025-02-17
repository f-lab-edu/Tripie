'use client';
import { SplashScreen, TextFillAnimation } from '@tripie-pyotato/design-system';

const Loading = ({ repeat }: Readonly<{ repeat?: number }>) => {
  return (
    <SplashScreen repeat={repeat}>
      <TextFillAnimation.Title>Tripie.</TextFillAnimation.Title>
    </SplashScreen>
  );
};

const LoadingFullScreen = ({ repeat }: Readonly<{ repeat?: number }>) => {
  return (
    <SplashScreen repeat={repeat}>
      <TextFillAnimation.Title>Tripie.</TextFillAnimation.Title>
    </SplashScreen>
  );
};

Loading.FullScreen = LoadingFullScreen;
export default Loading;
