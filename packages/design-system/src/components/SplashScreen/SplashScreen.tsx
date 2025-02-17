'use client';
import classNames from 'classnames/bind';
import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import { Container } from '..';
import Style from './splash-screen.module.scss';

const cx = classNames.bind(Style);

const SplashScreen = ({ children }: Readonly<{ children: ReactNode }>) => {
  return (
    <motion.section
      className={cx('section')}
      initial={{ opacity: 1, y: 0 }}
      animate={{ opacity: 1, y: '-120%' }}
      transition={{ duration: 0.8, delay: 1 }}
    >
      <Container align="center">{children}</Container>
    </motion.section>
  );
};

export default SplashScreen;
