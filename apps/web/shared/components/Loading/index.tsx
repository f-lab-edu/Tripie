'use client';
import { SplashScreen, TextFillAnimation } from '@tripie-pyotato/design-system';
import classNames from 'classnames/bind';
import { motion } from 'framer-motion';
import Style from './loading.module.scss';

const cx = classNames.bind(Style);

export default function Loading({ isLoading = true }: Readonly<{ isLoading?: boolean }>) {
  return (
    <SplashScreen isLoading={isLoading}>
      <motion.div className={cx('title')}>
        <TextFillAnimation.Title>Tripie.</TextFillAnimation.Title>
      </motion.div>
    </SplashScreen>
  );
}
