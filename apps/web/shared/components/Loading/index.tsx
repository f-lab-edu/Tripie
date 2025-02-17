'use client';
import { SplashScreen, TextFillAnimation } from '@tripie-pyotato/design-system';
// import classNames from 'classnames/bind';
// import Style from './loading.module.scss';

// const cx = classNames.bind(Style);

const Loading = ({ isLoading = true }: Readonly<{ isLoading?: boolean }>) => {
  return (
    <SplashScreen isLoading={isLoading}>
      <TextFillAnimation.Title>Tripie.</TextFillAnimation.Title>
    </SplashScreen>
  );
};

const LoadingFullScreen = ({ isLoading = true }: Readonly<{ isLoading?: boolean }>) => {
  return (
    <SplashScreen isLoading={isLoading}>
      <TextFillAnimation.Title>Tripie.</TextFillAnimation.Title>
    </SplashScreen>
  );
};

Loading.FullScreen = LoadingFullScreen;
export default Loading;
