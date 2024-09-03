import { Container } from '@tripie/design-system';
import Heading from '@tripie/design-system/components/typography/headings/_headings';
import classNames from 'classnames/bind';
import AnimatedButton from 'components/shared/Button/AnimatedButton';
import Nav from '../nav/Nav';
import ParticleField from './Particle/ParticleField';
import RotatingBlur from './RotatingBlur/RotatingBlur';
import Style from './header.module.scss';
const cx = classNames.bind(Style);

export default function Header() {
  return (
    <Container className={cx('header')} margin="none">
      <Container className={cx('gradient-bottom')} margin="none"></Container>
      <Nav />

      <Container className={cx('center')} margin="none">
        <div>
          <Container className={cx('heading')} margin="none">
            <Heading.H1 className={cx('accented')}>AI</Heading.H1>
            <Heading.H1>enhanced trip planner.</Heading.H1>
          </Container>
        </div>
        <Container className={cx('button-wrap')} margin="none">
          <AnimatedButton withBorder={true}>Our services</AnimatedButton>
          <AnimatedButton withBorder={true}>Get in touch</AnimatedButton>
        </Container>
      </Container>
      <RotatingBlur />
      <ParticleField />
    </Container>
  );
}
