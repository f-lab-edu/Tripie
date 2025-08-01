import { MotionProps } from '../../../wrappers/motion-wrapper';

export const VARIANTS = {
  FLICK_TEXT: {
    rest: {
      opacity: 1,
      y: '0',
    },
    hover: {
      opacity: 1,
      y: '-3.85rem',
      transition: {
        bounce: 0,
      },
    },
  },
  TEXT: (fontSize = 1) => ({
    rest: {
      opacity: 1,
      y: `${fontSize + 0.125}rem`,
      // y: '150%',
      // y: `${fontSize / 2 + fontSize * 0.125}rem`,
      // y: `${fontSize / 2}rem`,
    },
    hover: {
      opacity: 1,
      y: `-${fontSize + 0.125}rem`,
      // y: '-150%',
      // y: `-${fontSize / 2}rem`,
      transition: {
        bounce: 0,
      },
    },
  }),

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
