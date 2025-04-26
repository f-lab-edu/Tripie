import { COLORS } from '../../../shared/colors';
import { MotionProps } from '../../../wrappers/motion-wrapper';

export const ACCORDIAN_VARIANTS = {
  DETAILS: {
    closed: () => ({
      height: '0%',
      opacity: 0,
      display: 'none',
    }),
    open: () => ({
      transform: {
        height: 'fit-content',
      },
      transition: {
        duration: 2,
        bounce: 0,
        damping: 2,
        stiffness: 10,
      },
    }),
  } as unknown as MotionProps['variants'],
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
