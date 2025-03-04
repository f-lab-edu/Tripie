import { Variants } from 'framer-motion';

export const VARIANTS = {
  FLICK_TEXT: {
    rest: { opacity: 1, y: '0', duration: 0.5 },
    hover: {
      opacity: 1,
      y: '-3rem',
      transition: {
        duration: 0.5,
      },
    },
  } as Variants,

  TEXT: {
    rest: { opacity: 1, y: '2rem', duration: 0.5 },
    hover: {
      opacity: 1,
      y: '-2.25rem',
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
  SLIDE: (duration: number) =>
    ({
      rest: () => ({}),
      fly: () => ({
        translateX: '100vw',
        transition: {
          repeat: Infinity,
          duration: duration,
          bounce: 1,
        },
      }),
    }) as Variants,
};
