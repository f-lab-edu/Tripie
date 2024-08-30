import classNames from 'classnames/bind';
import { motion } from 'framer-motion';
import { MenuItem } from './MenuItem';
import Style from './navigation.module.scss';

const cx = classNames.bind(Style);

const variants = {
  open: {
    opacity: 1,
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    opacity: 0,
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

export const Navigation = () => (
  <motion.ul className={cx('navigation')} variants={variants}>
    {itemIds.map(i => (
      <MenuItem key={i}>{i}</MenuItem>
    ))}
  </motion.ul>
);

const itemIds = ['Process', 'Services', 'Work', 'Plans', 'Contact'];
