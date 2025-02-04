'use client';
import { Chip, Container, ParticleField } from '@tripie-pyotato/design-system';
import Heading from '@tripie-pyotato/design-system/components/typography/headings/_headings';
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
        <div>
          <Container className={cx('heading')} margin="none">
            <Heading.H1 className={cx('accented')}>4</Heading.H1>
            <Heading.H1>0</Heading.H1>
            <Heading.H1 className={cx('accented')}>4</Heading.H1>
          </Container>
        </div>

        <Container className={cx('wrap')} margin="none">
          Oops, the page you're looking for doesn't exist.
          <div className={cx('chip')}>
            <Chip.Accented onClick={handleClickHome}>bring me back home</Chip.Accented>
          </div>
        </Container>
      </Container>

      <ParticleField />
    </Container>
  );
}
