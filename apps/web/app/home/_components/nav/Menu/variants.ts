import { Variants } from 'framer-motion';

export const MENU_VARIANTS = {
  MENU_ITEM: {
    open: {
      y: 0,
      opacity: 1,
      transition: {
        y: { stiffness: 1000, velocity: -100 },
      },
    },
    closed: {
      y: 50,
      opacity: 0,
      transition: {
        y: { stiffness: 1000 },
      },
    },
  } as Variants,
  NAVIGATION: {
    open: {
      opacity: 1,
      display: 'inline-block',
      transition: { staggerChildren: 0.07, delayChildren: 0.2 },
    },
    closed: {
      opacity: 0,
      display: 'none',
      transition: { staggerChildren: 0.05, staggerDirection: -1 },
    },
  } as Variants,
};
