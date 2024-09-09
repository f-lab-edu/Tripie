import { Container } from '@tripie/design-system';

import classNames from 'classnames/bind';

import { ReactNode } from 'react';
import ParticleField from './ParticleField';
import Style from './particle-background.module.scss';

const cx = classNames.bind(Style);

export default function ParticleBackground({ children }: { children: ReactNode }) {
  return (
    <Container className={cx('background')} margin="none">
      <Container className={cx('gradient-bottom')} margin="none"></Container>
      {children}
      <ParticleField />
    </Container>
  );
}
