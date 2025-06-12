'use client';

import { ReactNode } from 'react';
import { Motion } from 'wrappers';
import TripieContainer, { TripieContainerProps } from '../../../@core/layout/TripieContainer';

// slide up
const AnimatedContainer = ({
  children,
  duration = 10,
  margin = 'none',
  padding = 'none',
  repeat = Infinity,
  repeatDelay = 2,
  scrollY = '-100%',
  ...args
}: {
  repeatDelay?: number;
  repeat?: number;
  duration?: number;
  children: ReactNode;
  scrollY?: string | number;
} & Partial<TripieContainerProps>) => {
  return (
    <Motion.Div
      initial={{ y: '0%' }}
      animate={{ y: scrollY }}
      transition={{
        duration,
        ease: 'linear',
        repeat,
        repeatDelay,
        repeatType: 'loop',
      }}
    >
      <TripieContainer margin={margin} padding={padding} {...args}>
        {children}
      </TripieContainer>
    </Motion.Div>
  );
};

export default AnimatedContainer;
