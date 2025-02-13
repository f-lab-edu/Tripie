'use client';
import { Chip, Headings, ParticleField, TripieContainer } from '@tripie-pyotato/design-system';
import classNames from 'classnames/bind';

import ROUTE from 'constants/routes';
import { useRouter } from 'next/navigation';
import Style from './not-found.module.scss';

const cx = classNames.bind(Style);

export default function NotFound() {
  const router = useRouter();
  const handleClickHome = () => router.replace(ROUTE.HOME.href);
  return (
    <TripieContainer className={cx('header')} margin="none">
      <TripieContainer className={cx('gradient-bottom')} margin="none"></TripieContainer>
      <TripieContainer className={cx('center')} margin="none">
        <div>
          <TripieContainer className={cx('heading')} margin="none">
            <Headings.H1 className={cx('accented')}>4</Headings.H1>
            <Headings.H1>0</Headings.H1>
            <Headings.H1 className={cx('accented')}>4</Headings.H1>
          </TripieContainer>
        </div>

        <TripieContainer className={cx('wrap')} margin="none">
          Oops, the page you're looking for doesn't exist.
          <div className={cx('chip')}>
            <Chip.Accented onClick={handleClickHome}>bring me back home</Chip.Accented>
          </div>
        </TripieContainer>
      </TripieContainer>

      <ParticleField />
    </TripieContainer>
  );
}
