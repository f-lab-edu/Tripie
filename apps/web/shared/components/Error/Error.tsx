'use client';
import { Chip, Container, Headings, ParticleBackground } from '@tripie-pyotato/design-system';

import classNames from 'classnames/bind';

import Style from './error.module.scss';

const cx = classNames.bind(Style);

export default function Error() {
  return (
    <ParticleBackground>
      <Container className={cx('center')} margin="none">
        <div>
          <Container className={cx('heading')} margin="none">
            <Headings.H1 className={cx('accented')}>5</Headings.H1>
            <Headings.H1>0</Headings.H1>
            <Headings.H1 className={cx('accented')}>0</Headings.H1>
          </Container>
        </div>

        <Container className={cx('button-wrap')} margin="none">
          Oops, something went wrong.
          <Chip.Accented>bring me back home</Chip.Accented>
        </Container>
      </Container>
    </ParticleBackground>
  );
}
