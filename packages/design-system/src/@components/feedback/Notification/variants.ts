import { MotionProps } from 'wrappers';

export const VARIANTS = {
  active: { scaleX: '100%', transition: { bounce: 0 } },
  inactive: { opacity: 0, transition: { bounce: 0 } },
} as MotionProps['variants'];
