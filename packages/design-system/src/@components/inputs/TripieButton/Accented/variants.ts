import { COLORS, MotionProps } from 'shared';

const GLOW_VARIANT = {
  rest: { boxShadow: 'none' },
  glow: {
    boxShadow: [`-2px 0px 10px 0px ${COLORS[50]}`, `2px 0px 10px 0px ${COLORS[50]}`, `0px 2px 10px 0px ${COLORS[50]}`],
    transition: {
      ease: 'circInOut',
    },
  },
} as MotionProps['variants'];

export default GLOW_VARIANT;
