'use client';
import { Container } from '@tripie-pyotato/design-system';
import Heading from '@tripie-pyotato/design-system/components/typography/headings/_headings';
import classNames from 'classnames/bind';
import AnimatedButton from 'shared/components/Button/Animated';
import Icon from 'shared/components/Icon/Icon';

import RESOURCE from 'constants/resources';
import ROUTE from 'constants/routes';
import Link from 'next/link';
import ParticleBackground from 'shared/components/Particle/ParticleBackground';
import Nav from '../nav/Nav';
import RotatingBlur from './RotatingBlur/RotatingBlur';
import Style from './header.module.scss';

const cx = classNames.bind(Style);

export default function Header() {
  return (
    <ParticleBackground>
      <Nav />
      <RotatingBlur />
      <Container className={cx('center')} margin="none">
        <div>
          <Container className={cx('heading')} margin="none">
            <Heading.H1 className={cx('accented')}>AI</Heading.H1>
            <Heading.H1>enhanced trip planner.</Heading.H1>
          </Container>
        </div>
        <Container className={cx('button-wrap')} margin="none">
          <Link href={ROUTE.SERVICES.href}>
            <AnimatedButton withBorder={true}>Our services</AnimatedButton>
          </Link>
          <Link href={ROUTE.CONTACT.href}>
            <AnimatedButton withBorder={true}>
              <Container margin="none" className={cx('flex')}>
                Get in touch <Icon src={RESOURCE.ARROW} />
              </Container>
            </AnimatedButton>
          </Link>
        </Container>
      </Container>
    </ParticleBackground>
  );
}
