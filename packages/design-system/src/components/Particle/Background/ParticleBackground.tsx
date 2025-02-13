import { TripieContainer } from '@tripie-pyotato/design-system';

import classNames from 'classnames/bind';

import { ReactNode } from 'react';
import ParticleField from '../Field/ParticleField';
import Style from './particle-background.module.scss';

const cx = classNames.bind(Style);

export default function ParticleBackground({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <TripieContainer className={cx('background')} margin="none">
      <TripieContainer className={cx('gradient-bottom')} margin="none"></TripieContainer>
      {children}
      <ParticleField />
    </TripieContainer>
  );
}
