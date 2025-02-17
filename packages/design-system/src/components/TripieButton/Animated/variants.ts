import { Variants } from 'framer-motion';

export const BUTTON_VARIANTS = {
  TEXT: {
    rest: { opacity: 1, y: 15, duration: 0.5 },
    hover: {
      opacity: 1,
      y: -15,
      transition: {
        duration: 0.5,
      },
    },
  } as Variants,
};
