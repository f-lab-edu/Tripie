'use client';
import classNames from 'classnames/bind';
import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import { Container } from '..';
import Style from './splash-screen.module.scss';

const cx = classNames.bind(Style);

export default function SplashScreen({ children, repeat = 1 }: Readonly<{ children: ReactNode; repeat?: number }>) {
  // const [isVisible, setIsVisible] = useState(isLoading);

  // const handleLoadingState = useCallback(() => {
  //   setIsVisible(isLoading);
  // }, [isLoading]);

  // return isVisible ? (
  //   <motion.section
  //     className={cx('section')}
  //     initial={{ opacity: 1, y: 0 }}
  //     animate={{ opacity: 1, y: '-120%' }}
  //     transition={{ duration: 0.8, delay: 1 }}
  //     onAnimationComplete={handleLoadingState}
  //   >
  //     <Container align="center">{children}</Container>
  //   </motion.section>
  // ) : null;
  // const [isVisible, setIsVisible] = useState(isLoading);

  // const handleLoadingState = useCallback(() => {
  //   setIsVisible(isLoading);
  // }, [isLoading]);

  return (
    <motion.section
      className={cx('section')}
      initial={{ opacity: 1, y: 0 }}
      animate={{ opacity: 1, y: '-120%' }}
      transition={{ duration: 0.8, delay: 1, repeat }}
      // onAnimationComplete={handleLoadingState}
    >
      <Container align="center">{children}</Container>
    </motion.section>
  );
}
