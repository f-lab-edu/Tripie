import { Variants } from 'framer-motion';

export const VARIANTS = {
  TEXT: {
    rest: { opacity: 1, y: '105%', duration: 0.5 },
    hover: {
      opacity: 1,
      y: '-105%',
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
