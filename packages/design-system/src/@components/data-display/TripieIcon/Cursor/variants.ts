import { MotionProps } from 'framer-motion';

const VARIANTS = {
  initial: () => ({
    translateY: '-10px',
  }),
  hover: () => ({
    pointerEvents: 'none',
    translateX: '-50px',
    translateY: '-5px',
    transition: {
      decelerate: 2,
      duration: 0.5,
      bounce: 0,
    },
  }),
} as MotionProps['variants'];

export default VARIANTS;
