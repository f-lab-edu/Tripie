import { Variants } from 'framer-motion';
import COLORS from '../../shared/colors';

export const ACCORDIAN_VARIANTS = {
  DETAILS: {
    closed: () => ({
      height: '0%',
      opacity: 0,
      display: 'none',
    }),
    open: () => ({
      transform: {
        height: 'fit-content',
      },
      transition: {
        duration: 2,
        bounce: 0,
        damping: 2,
        stiffness: 10,
      },
    }),
  } as unknown as Variants,
  BUTTON: {
    closed: () => ({}),
    open: () => ({
      rotate: '45deg',
      transition: {
        duration: 0.5,
        bounce: 0,
      },
    }),
  } as Variants,
  DIVIDER: {
    closed: () => ({
      backgroundColor: COLORS[400],
    }),
    open: () => ({
      backgroundColor: COLORS[50],
      transition: {
        duration: 0.5,
        bounce: 0,
      },
    }),
  } as Variants,
};
