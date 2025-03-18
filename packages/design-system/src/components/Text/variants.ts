import { MotionProps } from '../../shared/wrappers/motion-wrapper';

export const VARIANTS = {
  FLICK_TEXT: {
    rest: { opacity: 1, y: '0', 
    // duration: 0.5 
  },
    hover: {
      opacity: 1,
      y: '-3rem',
      transition: {
        bounce:0
        // duration: 0.5,
      },
    },
  },
  TEXT: {
    rest: { opacity: 1, y: '2rem', duration: 0.5 },
    hover: {
      opacity: 1,
      y: '-2rem',
      transition: {
        duration: 0.5,
      },
    },
  },

  TITLE: (restY: number, hoverY: number) => ({
    rest: { opacity: 1, y: restY, duration: 0.5 },
    hover: {
      opacity: 1,
      y: hoverY,
      transition: {
        duration: 0.5,
      },
    },
  }),
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
    }) as MotionProps['variants'],
};
