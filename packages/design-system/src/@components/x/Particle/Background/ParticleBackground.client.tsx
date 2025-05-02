import { classNames } from '../../../../wrappers';

import { ReactNode } from 'react';

import { Background } from '../../../../@core/layout';
import ParticleField from '../Field/ParticleField.client';
import Style from './particle-background.module.scss';

const cx = classNames.bind(Style);

export default function ParticleBackground({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <Background variant={0} className={cx('background')}>
      <Background variant={7} className={cx('gradient-bottom')}></Background>
      {children}
      <ParticleField />
    </Background>
  );
}
