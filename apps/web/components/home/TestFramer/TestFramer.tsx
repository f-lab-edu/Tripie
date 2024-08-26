'use client';
import classNames from 'classnames/bind';
import { motion } from 'framer-motion';
import Style from './test-framer.module.scss';

const cx = classNames.bind(Style);

export const TestFramer = () => (
  <motion.div className={cx('box')} initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} />
);
