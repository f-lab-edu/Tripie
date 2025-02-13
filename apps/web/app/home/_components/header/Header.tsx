'use client';
import { AnimatedButton, Headings, ParticleBackground, TripieContainer } from '@tripie-pyotato/design-system';
import classNames from 'classnames/bind';
import Icon from 'shared/components/Icon/Icon';

import RESOURCE from 'constants/resources';
import ROUTE from 'constants/routes';
import Link from 'next/link';

import Nav from '../nav/Nav';
import RotatingBlur from './RotatingBlur/RotatingBlur';
import Style from './header.module.scss';

const cx = classNames.bind(Style);

export default function Header() {
  return (
    <ParticleBackground>
      <Nav />
      <RotatingBlur />
      <TripieContainer className={cx('center')} margin="none">
        <div>
          <TripieContainer className={cx('heading')} margin="none">
            <Headings.H1 className={cx('accented')}>AI</Headings.H1>
            <Headings.H1>enhanced trip planner.</Headings.H1>
          </TripieContainer>
        </div>
        <TripieContainer className={cx('button-wrap')} margin="none">
          <Link href={ROUTE.SERVICES.href}>
            <AnimatedButton withBorder={true}>Our services</AnimatedButton>
          </Link>
          <Link href={ROUTE.CONTACT.href}>
            <AnimatedButton withBorder={true} className={cx('flex')}>
              <TripieContainer margin="none" className={cx('flex')}>
                Get in touch <Icon src={RESOURCE.ARROW} />
              </TripieContainer>
            </AnimatedButton>
          </Link>
        </TripieContainer>
      </TripieContainer>
    </ParticleBackground>
  );
}
