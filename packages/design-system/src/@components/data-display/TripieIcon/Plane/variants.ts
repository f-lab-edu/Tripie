import { MotionProps } from 'framer-motion';

const variants = {
  rotate: {
    rotate: '90deg',
  },
  fly: () => ({
    translateX: '100vw',
    transition: {
      repeat: Infinity,
      duration: 5,
      bounce: 1,
    },
  }),
} as MotionProps['variants'];

export default variants;
