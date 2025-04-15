import { MotionProps } from '../wrappers/motion-wrapper';
import { COLORS } from './colors';

type Variant = MotionProps['variants'][string];

const GLOW_VARIANT = {
  rest: { boxShadow: 'none' } as Variant,
  glow: {
    boxShadow: [`-2px 0px 10px 0px ${COLORS[50]}`, `2px 0px 10px 0px ${COLORS[50]}`, `0px 2px 10px 0px ${COLORS[50]}`],
    transition: {
      ease: 'circInOut',
    },
  } as Variant,
};

const SHINE_VARIANT = {
  rest: { boxShadow: 'none' } as Variant,
  selected: {
    backgroundColor: COLORS[100],
    borderColor: COLORS[300],
  } as Variant,
  shine: { backgroundColor: COLORS[100], borderColor: COLORS[300] } as Variant,
};

const ACCORDIAN_VARIANTS = {
  DETAILS: {
    closed: () => ({
      height: '0%',
      opacity: 0,
    }),
    open: () => ({
      transform: {
        height: '100%',
      },
      transition: {
        duration: 2,
        bounce: 0,
        damping: 2,
        stiffness: 10,
      },
    }),
  },
  BUTTON: {
    closed: () => ({}),
    open: () => ({
      rotate: '45deg',
      transition: {
        duration: 0.5,
        bounce: 0,
      },
    }),
  } as MotionProps['variants'],
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
  } as MotionProps['variants'],
};

export { ACCORDIAN_VARIANTS, GLOW_VARIANT, SHINE_VARIANT };
