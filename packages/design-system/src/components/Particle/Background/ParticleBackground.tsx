import { classNames } from '../../../shared/wrappers';

import { ReactNode } from 'react';
import TripieContainer from '../../TripieContainer';
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
