import { COLORS } from '../../../shared/colors';
import { MotionProps } from '../../../wrappers/motion-wrapper';

export const SWITCH_VARIANTS = {
  BACKGROUND: {
    off: () => ({
      backgroundColor: COLORS[40],
      borderColor: COLORS[400],
    }),
    on: () => ({
      backgroundColor: COLORS[50],
      borderColor: COLORS[50],
    }),
  } as MotionProps['variants'],
  BUTTON: {
    off: () => ({
      x: '150%',
      backgroundColor: COLORS[40],
    }),
    on: () => ({
      x: '30%',
      backgroundColor: COLORS[50],
    }),
  } as MotionProps['variants'],
  TEXT: {
    off: () => ({
      x: '0%',
    }),
    on: () => ({
      x: '200%',
      color: COLORS[50],
    }),
  } as MotionProps['variants'],
};
