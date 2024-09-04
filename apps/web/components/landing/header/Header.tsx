'use client';
import { Container } from '@tripie/design-system';
import Heading from '@tripie/design-system/components/typography/headings/_headings';
import classNames from 'classnames/bind';
import { motion } from 'framer-motion';
import Button from '../../shared/Button/Button';
import Nav from '../nav/Nav';
import ParticleField from './Particle/ParticleField';
import RotatingBlur from './RotatingBlur/RotatingBlur';
import Style from './header.module.scss';
const cx = classNames.bind(Style);

export default function Header() {
  return (
    <Container className={cx('header')} margin="none">
      <div className={cx('gradient-bottom')}></div>
      <Nav />

      <div className={cx('center')}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <div className={cx('heading')}>
            <Heading.H1 className={cx('accented-text')}>AI</Heading.H1>
            <Heading.H1>enhanced trip planner.</Heading.H1>
          </div>
        </motion.div>
        <div className={cx('button-wrap')}>
          <Button>Our services</Button>
          <Button>Get in touch</Button>
        </div>
      </div>
      <RotatingBlur />
      <ParticleField />
    </Container>
  );
}
