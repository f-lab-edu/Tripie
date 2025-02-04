'use client';
import classNames from 'classnames/bind';
import Style from './nav.module.scss';

import { motion } from 'framer-motion';
import useCycle from 'hooks/useCycle';

import { AnimatedButton } from '@tripie-pyotato/design-system';
import { Navigation } from './Menu/MenuList';
import { MenuToggle } from './Menu/MenuToggle';

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
