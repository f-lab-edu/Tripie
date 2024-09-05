'use client';
import classNames from 'classnames/bind';
import { motion } from 'framer-motion';
import TextFillAnimation from '../../shared/TextFill/TextFillAnimation';
import Style from './loading.module.scss';
const cx = classNames.bind(Style);

export default function Loading() {
  return (
    <motion.section
      className={cx('loading', 'section')}
      initial={{ opacity: 1, y: 0 }}
      animate={{ opacity: 1, y: '-100%' }}
      transition={{ duration: 0.8, delay: 1 }}
    >
      <motion.div className={cx('title')}>
        <TextFillAnimation>Tripie.</TextFillAnimation>
      </motion.div>
    </motion.section>
  );
}
