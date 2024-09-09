import { Variants } from 'framer-motion';

export const CAROUSEL_VARIANTS = {
  initial: { x: 0 },
  slide: {
    translateX: '100%',
    transition: { repeat: Infinity, duration: 10 },
  },
} as Variants;
