'use client';
import classNames from 'classnames/bind';
import Style from './nav.module.scss';

import { motion } from 'framer-motion';
import useCycle from 'hooks/useCycle';

import { AnimatedButton } from '@tripie-pyotato/design-system';
import ROUTE from 'constants/routes';
import { useRouter } from 'next/navigation';
import { Navigation } from './Menu/MenuList';
import { MenuToggle } from './Menu/MenuToggle';

const cx = classNames.bind(Style);

const Nav = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const navigate = useRouter();
  return (
    <motion.nav className={cx('nav')} initial={false} animate={isOpen ? 'open' : 'closed'}>
      <AnimatedButton onClick={() => navigate.push(ROUTE.HOME.href)}>Tripie</AnimatedButton>
      <Navigation />
      <MenuToggle toggle={toggleOpen} />
    </motion.nav>
  );
};

export default Nav;
