'use client';
// import { AnimatedText, Icon, SplashScreen, TextFillAnimation } from '@tripie-pyotato/design-system/@components';
import AnimatedText from '@tripie-pyotato/design-system/@components/AnimatedText';
import SplashScreen from '@tripie-pyotato/design-system/@components/SplashScreen';
import TextFillAnimation from '@tripie-pyotato/design-system/@components/TextFillAnimation';
import Stack from '@tripie-pyotato/design-system/@core/Stack';
import TripieIcon from './TripieIcon/TripieIcon';

const Loading = () => {
  return (
    <SplashScreen duration={1} loading={false}>
      <TextFillAnimation isTitle={true}>Tripie.</TextFillAnimation>
    </SplashScreen>
  );
};

const ControlledLoader = () => {
  return (
    <SplashScreen.Controlled display={'inline-flex'}>
      <TextFillAnimation isTitle={true}>Tripie.</TextFillAnimation>
    </SplashScreen.Controlled>
  );
};

const SemiTransparentLoader = ({ loading }: { loading: boolean }) => {
  return (
    <SplashScreen variant="backdrop" loading={loading} duration={1} centerItems={true}>
      <Stack justifyContent="center" display={'inline-flex'} alignItems="center" fillAvailable={false} gap="sm">
        <TripieIcon variant="loading" />
        <AnimatedText.Jump>loading...</AnimatedText.Jump>
      </Stack>
    </SplashScreen>
  );
};

Loading.Controlled = ControlledLoader;

Loading.SemiTransparent = SemiTransparentLoader;

export default Loading;
