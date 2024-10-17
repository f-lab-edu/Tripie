'use client';
import { Container } from '@tripie-pyotato/design-system';
import Heading from '@tripie-pyotato/design-system/components/typography/headings/_headings';
import classNames from 'classnames/bind';

import Chip from 'shared/components/Chip/Chip';
import ParticleBackground from 'shared/components/Particle/ParticleBackground';
import Style from './error.module.scss';

const cx = classNames.bind(Style);

export default function Error() {
  return (
    <ParticleBackground>
      <Container className={cx('center')} margin="none">
        <div>
          <Container className={cx('heading')} margin="none">
            <Heading.H1 className={cx('accented')}>5</Heading.H1>
            <Heading.H1>0</Heading.H1>
            <Heading.H1 className={cx('accented')}>0</Heading.H1>
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
