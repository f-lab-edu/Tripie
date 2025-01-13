'use client';
import classNames from 'classnames/bind';
import Style from './nav.module.scss';

import { motion } from 'framer-motion';
import useCycle from 'hooks/useCycle';
import AnimatedButton from 'shared/components/Button/AnimatedButton';
import { MenuToggle } from './Menu/MenuToggle';
import { Navigation } from './Menu/Navigation';

const cx = classNames.bind(Style);

const Nav = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);

  return (
    <motion.nav className={cx('nav')} initial={false} animate={isOpen ? 'open' : 'closed'}>
      <AnimatedButton>Tripie</AnimatedButton>
      <Navigation />
      <MenuToggle toggle={toggleOpen} />
    </motion.nav>
  );
};

export default Nav;
