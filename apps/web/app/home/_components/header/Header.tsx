'use client';
import {
  AnimatedButton,
  Container,
  Headings,
  Icon,
  ParticleBackground,
  RotatingBlur,
  Text,
} from '@tripie-pyotato/design-system';
import classNames from 'classnames/bind';

import ROUTE from 'constants/routes';
import Link from 'next/link';

import Nav from '../nav/Nav';

import Style from './header.module.scss';

const cx = classNames.bind(Style);

export default function Header() {
  return (
    <ParticleBackground>
      <Nav />
      <RotatingBlur />
      <Container align="center" className={cx('wrap')} margin="none">
        <Container className={cx('heading')} margin="none" align="center">
          <Headings.H1>
            <Text.Accented>AI</Text.Accented>
          </Headings.H1>
          <Headings.H1>enhanced trip planner.</Headings.H1>
        </Container>
        <Container align="center" margin="none" className={cx('flex', 'button-wrap')}>
          <Link href={ROUTE.SERVICES.href}>
            <AnimatedButton withBorder={true} className={cx('main-button')}>
              Our services
            </AnimatedButton>
          </Link>
          <Link href={ROUTE.CONTACT.href}>
            <AnimatedButton withBorder={true} className={cx('main-button')}>
              <Container margin="none" className={cx('flex')}>
                Get in touch <Icon />
              </Container>
            </AnimatedButton>
          </Link>
        </Container>
      </Container>
    </ParticleBackground>
  );
}
