'use client';
import { Icon } from '@tripie-pyotato/design-system/@components';
import { Container } from '@tripie-pyotato/design-system/@core';
import classNames from 'classnames/bind';
import { ReactNode } from 'react';
import Style from './cloud.module.scss';

const cx = classNames.bind(Style);

const Clouds = ({ rows = 1, length = 13, children }: { rows?: number; length?: number; children?: ReactNode }) => {
  return (
    <Container margin="none" padding="none" className={cx('cloud-wrap')}>
      {children}
      {Array.from({ length: rows }, (_, rowIndex) => (
        <Container key={rowIndex + 'cloud-row'} margin="none" padding="none" zIndex="hide">
          {Array.from({ length }, (_, index) => (
            <Icon.Cloud key={index} index={index} delay={Math.random() * (index + rowIndex)} />
          ))}
        </Container>
      ))}
    </Container>
  );
};

export const PlaneInClouds = () => {
  return (
    <Clouds rows={3}>
      <Icon.Plane />
    </Clouds>
  );
};

Clouds.WithPlane = PlaneInClouds;

export default Clouds;
