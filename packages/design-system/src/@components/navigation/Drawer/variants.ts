import { MotionProps } from 'wrappers';

const moves = (percentage: number) => ({
  left: { x: '0%' },
  bottom: { y: `${100 - percentage}%` },
  right: { x: '0%' },
  top: { y: `-${100 - percentage}%` },
});

const closeMoves = {
  left: { x: `-100%` },
  bottom: { y: `100%` },
  right: { x: `100%` },
  top: { y: '-100%' },
};

export const VARIANTS = {
  CONTENTS: (direction: 'top' | 'left' | 'bottom' | 'right', exposePercentage = 100) =>
    ({
      open: () => ({
        ...moves(exposePercentage)[direction],
        transition: {
          bounce: 0.5,
          duration: 0.2,
        },
      }),
      closed: () => ({
        ...closeMoves[direction],
        transition: {
          duration: 0.2,
          bounce: 0.5,
        },
      }),
    }) as MotionProps['variants'],
  BUTTON: (direction: 'top' | 'left' | 'bottom' | 'right') =>
    ({
      open: () => ({
        transition: {
          bounce: 0,
        },
      }),
      closed: () => ({
        ...(direction == 'left' ? { translateX: '100%' } : {}),
        ...(direction == 'top' ? { translateY: '100%' } : {}),
        ...(direction == 'bottom' ? { translateY: '-100%' } : {}),
        ...(direction == 'right' ? { translateX: '-100%' } : {}),
        transition: {
          duration: 0.2,
          bounce: 0,
        },
      }),
    }) as MotionProps['variants'],
};
