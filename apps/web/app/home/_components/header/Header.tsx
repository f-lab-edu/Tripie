'use client';
import { Container } from '@tripie/design-system';
import Heading from '@tripie/design-system/components/typography/headings/_headings';
import classNames from 'classnames/bind';
import ROUTES from 'constants/routes';
import AnimatedButton from 'shared/components/Button/AnimatedButton';
import Icon from 'shared/components/Icon/Icon';

import { useRouter } from 'next/navigation';
import ParticleBackground from 'shared/components/Particle/ParticleBackground';
import Nav from '../nav/Nav';
import RotatingBlur from './RotatingBlur/RotatingBlur';
import Style from './header.module.scss';

const cx = classNames.bind(Style);

export default function Header() {
  const router = useRouter();
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
          <AnimatedButton withBorder={true} onClick={() => router.push(ROUTES.PAGE.SERVICES.href)}>
            Our services
          </AnimatedButton>
          <AnimatedButton withBorder={true} onClick={() => router.push(ROUTES.PAGE.CONTACT.href)}>
            <Container margin="none" className={cx('flex')}>
              Get in touch <Icon src={ROUTES.RESOURCE.ARROW['src']} />
            </Container>
          </AnimatedButton>
        </Container>
      </Container>
    </ParticleBackground>
  );
}
