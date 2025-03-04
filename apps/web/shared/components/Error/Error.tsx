'use client';
import { Chip, Container, Headings, ParticleBackground, Text } from '@tripie-pyotato/design-system';

import classNames from 'classnames/bind';
import { useRouter } from 'next/navigation';
import Style from './error.module.scss';
import ROUTE from 'constants/routes';

const cx = classNames.bind(Style);

export default function SeverError() {
  const router = useRouter();
  const handleClickHome = () => router.replace(ROUTE.HOME.href);
  return (
    <ParticleBackground>
      <Container className={cx('center')} margin="none">
        <div>
          <Container className={cx('heading')} margin="none">
            <Headings.H1 className={cx('accented')}>
              <Text.Accented>5</Text.Accented> 0 <Text.Accented>0</Text.Accented>
            </Headings.H1>
          </Container>
        </div>

        <Container className={cx('button-wrap')} margin="none">
          Oops, something went wrong.
          <Chip.Accented onClick={handleClickHome}>bring me back home</Chip.Accented>
        </Container>
      </Container>
    </ParticleBackground>
  );
}
