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
  NAVIGATE: (direction: 'back' | 'front') =>
    (direction === 'back'
      ? {
          closed: () => ({
            rotate: '-135deg',
            transition: {
              duration: 0.1,
              bounce: 1,
            },
          }),
          hover: () => ({
            rotate: '-90deg',
            transition: {
              duration: 0.1,
              bounce: 1,
            },
          }),
        }
      : {
          closed: () => ({
            rotate: '45deg',
            transition: {
              duration: 0.1,
              bounce: 1,
            },
          }),
          hover: () => ({
            rotate: '0deg',
            transition: {
              duration: 0.1,
              bounce: 1,
            },
          }),
        }) as Variants,
};
