import { MotionProps } from 'framer-motion';

const VARIANTS = {
  hover: () => ({
    rotate: '360deg',
    transition: {
      duration: 1.2,
      bounce: 0.5,
    },
  }),
} as MotionProps['variants'];

export default VARIANTS;
