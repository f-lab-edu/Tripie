'use client';
import { AnimatedText, Icon, SplashScreen, TextFillAnimation } from '@tripie-pyotato/design-system/@components';
import { Stack } from '@tripie-pyotato/design-system/@core';
import { classNames } from 'wrapper';
import Style from './loader.module.scss';

const cx = classNames.bind(Style);

const Loading = () => {
  return (
    <SplashScreen duration={1} loading={false}>
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

// const SemiTransparentLoader = () => {
//   return (
//     // <SplashScreen.Controlled variant="backdrop">
//     //   <Icon.Loading />
//     //   <AnimatedText.Jump>loading...</AnimatedText.Jump>
//     // </SplashScreen.Controlled>

//   );
// };

const SemiTransparentLoader = ({ loading }: { loading: boolean }) => {
  return (
    <SplashScreen variant="backdrop" loading={loading} duration={1}>
      <Stack gap="sm">
        <Icon.Loading />
        <AnimatedText.Jump>loading...</AnimatedText.Jump>
      </Stack>
    </SplashScreen>
  );
};

Loading.Controlled = ControlledLoader;

Loading.SemiTransparent = SemiTransparentLoader;

export default Loading;
