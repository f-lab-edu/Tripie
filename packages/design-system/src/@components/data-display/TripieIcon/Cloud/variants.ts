import { MotionProps } from 'wrappers';

const VARIANTS = {
  rest: () => ({
    opacity: `${Math.random()}`,
    translateX: `${Math.random() * 1000}rem`,
    translateY: `${Math.random() * 100}px`,
  }),
  float: () => ({
    translateX: '-100%',
    delay: 1,
    transition: {
      decelerate: 2,
      repeat: Infinity,
      duration: 8,
      bounce: 1,
    },
  }),
} as MotionProps['variants'];

export default VARIANTS;
