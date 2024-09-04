import classNames from 'classnames/bind';
import ROUTES from 'constants/routes';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { MenuItem } from './MenuItem';
import Style from './navigation.module.scss';

const cx = classNames.bind(Style);

const variants = {
  open: {
    opacity: 1,
    display: 'inline-block',
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    opacity: 0,
    display: 'none',
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

export const Navigation = () => (
  <motion.ul className={cx('navigation')} variants={variants}>
    {ROUTES.PAGE.LANDING.map(({ label, href }) => (
      <MenuItem key={href}>
        <Link href={href}>{label}</Link>
      </MenuItem>
    ))}
    {process.env.NODE_ENV === 'development' ? (
      <MenuItem key={'dev'}>
        <Link href={ROUTES.PAGE.PLAYGROUND.href}>{ROUTES.PAGE.PLAYGROUND.label}</Link>
      </MenuItem>
    ) : null}
  </motion.ul>
);
