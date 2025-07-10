import { classNames } from '../../../../wrappers';

import { ReactNode } from 'react';

import TripieContainer from '@core/layout/TripieContainer';
import Background from '../../../../@core/layout/Background/TripieBackground';
import ParticleField from '../Field/ParticleField.client';
import Style from './particle-background.module.scss';

const cx = classNames.bind(Style);

export default function ParticleBackground({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <Background padding="none" variant={0} className={cx('background')} isFullScreen={true}>
      {children}
      <ParticleField />
      <TripieContainer margin="none" padding="none" className={cx('gradient-bottom')}></TripieContainer>
    </Background>
  );
}
