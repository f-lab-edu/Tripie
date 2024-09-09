import { Variants } from 'framer-motion';

export const ICON_VARIANTS = {
  DEFAULT: {
    closed: () => ({}),
    open: () => ({
      rotate: '45deg',
      transition: {
        duration: 0.5,
        bounce: 0,
      },
    }),
    hover: () => ({
      rotate: '45deg',
      transition: {
        duration: 0.5,
        bounce: 0,
      },
    }),
  } as Variants,
};
