'use client';
import classNames from 'classnames/bind';
import Style from './nav.module.scss';

import { motion, useCycle } from 'framer-motion';
import Button from '../../shared/Button/Button';
import { MenuToggle } from './Menu/MenuToggle';
import { Navigation } from './Menu/Navigation';

const cx = classNames.bind(Style);

const Nav = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);

  return (
    <motion.nav className={cx('nav')} initial={false} animate={isOpen ? 'open' : 'closed'}>
      <Button.Unstyled>Tripie</Button.Unstyled>
      <Navigation />
      <MenuToggle toggle={() => toggleOpen()} />
    </motion.nav>
  );
};

export default Nav;
