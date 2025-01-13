import { Variants } from 'framer-motion';

export const VARIANTS = {
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
  TITLE: (restY: number, hoverY: number) =>
    ({
      rest: { opacity: 1, y: restY, duration: 0.5 },
      hover: {
        opacity: 1,
        y: hoverY,
        transition: {
          duration: 0.5,
        },
      },
    }) as Variants,
};
