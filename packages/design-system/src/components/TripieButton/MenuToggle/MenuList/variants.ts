import { MotionProps } from '../../../../shared/wrappers/motion-wrapper';

export const NAVIGATION_VARIANT = {
  open: {
    opacity: 1,
    display: 'inline-block',
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    opacity: 0,
    display: 'none',
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
} as MotionProps['variants'];
