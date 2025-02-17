'use client';
import { Chip, Container, Headings, ParticleField } from '@tripie-pyotato/design-system';
import classNames from 'classnames/bind';

import ROUTE from 'constants/routes';
import { useRouter } from 'next/navigation';
import Style from './not-found.module.scss';

const cx = classNames.bind(Style);

export default function NotFound() {
  const router = useRouter();
  const handleClickHome = () => router.replace(ROUTE.HOME.href);
  return (
    <Container className={cx('header')} margin="none">
      <Container className={cx('gradient-bottom')} margin="none"></Container>
      <Container className={cx('center')} margin="none">
        <Container margin="none" align="center">
          <Container className={cx('heading')} align="center" margin="none">
            <Headings.H1 className={cx('accented')}>4</Headings.H1>
            <Headings.H1>0</Headings.H1>
            <Headings.H1 className={cx('accented')}>4</Headings.H1>
          </Container>
        </Container>

        <Container className={cx('wrap')} margin="none">
          Oops, the page you're looking for doesn't exist.
          <Container className={cx('chip')} margin="none" align="center">
            <Chip.Accented onClick={handleClickHome}>bring me back home</Chip.Accented>
          </Container>
        </Container>
      </Container>

      <ParticleField />
    </Container>
  );
}
