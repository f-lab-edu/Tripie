import { MotionProps } from '../../shared/wrappers/motion-wrapper';

export const ICON_VARIANTS = {
  DEFAULT: {
    closed: () => ({}),
    open: () => ({
      rotate: '45deg',
      transition: {
        animationDuration: 0.5,
        bounce: 0,
      },
    }),
    hover: () => ({
      rotate: '45deg',
      transition: {
        animationDuration: 0.5,
        bounce: 0,
      },
    }),
  } as MotionProps['variants'],
  ROTATE: {
    hover: () => ({
      rotate: '360deg',
      transition: {
        animationDuration: 1.2,
        bounce: 0.5,
      },
    }),
  } as MotionProps['variants'],
  NAVIGATE: (direction: 'back' | 'front') =>
    (direction === 'back'
      ? {
          closed: () => ({
            rotate: '-135deg',
            transition: {
              animationDuration: 0.1,
              bounce: 1,
            },
          }),
          hover: () => ({
            rotate: '-90deg',
            transition: {
              animationDuration: 0.1,
              bounce: 1,
            },
          }),
        }
      : {
          closed: () => ({
            rotate: '45deg',
            transition: {
              animationDuration: 0.1,
              bounce: 1,
            },
          }),
          hover: () => ({
            rotate: '0deg',
            transition: {
              animationDuration: 0.1,
              bounce: 1,
            },
          }),
        }) as MotionProps['variants'],
  REFRESH: (action: 'redo' | 'undo') =>
    (action === 'redo'
      ? {
          closed: () => ({
            rotate: '-135deg',
            transition: {
              animationDuration: 0.1,
              bounce: 1,
            },
          }),
          hover: () => ({
            rotate: '-90deg',
            transition: {
              animationDuration: 0.1,
              bounce: 1,
            },
          }),
        }
      : {
          closed: () => ({
            rotate: '45deg',
            transition: {
              animationDuration: 0.1,
              bounce: 1,
            },
          }),
          hover: () => ({
            rotate: '0deg',
            transition: {
              animationDuration: 0.1,
              bounce: 1,
            },
          }),
        }) as MotionProps['variants'],
  PLANE: {
    rotate: {
      rotate: '90deg',
    },
    fly: () => ({
      translateX: '100vw',
      transition: {
        repeat: Infinity,
        animationDuration: 5,
        bounce: 1,
      },
    }),
  } as MotionProps['variants'],
  CLOUD: {
    rest: () => ({
      opacity: `${Math.random()}`,
      translateX: `${Math.random() * 1000}rem`,
      translateY: `${Math.random() * 100}px`,
    }),
    float: () => ({
      translateX: '-100%',
      delay: 1,
      transition: {
        decelerate: 2,
        repeat: Infinity,
        animationDuration: 8,
        bounce: 1,
      },
    }),
  } as MotionProps['variants'],
  CURSOR: {
    initial: () => ({
      translateY: '-10px',
    }),
    hover: () => ({
      pointerEvents: 'none',
      translateX: '-50px',
      translateY: '-5px',
      transition: {
        decelerate: 2,
        animationDuration: 0.5,
        bounce: 0,
      },
    }),
  } as MotionProps['variants'],
  SCROLL: (next: boolean) =>
    (next
      ? {
          initial: () => ({
            rotate: '0deg',
            transition: {
              animationDuration: 0.1,
              bounce: 1,
            },
          }),
          hover: () => ({
            rotate: '-90deg',
            transition: {
              animationDuration: 0.1,
              bounce: 1,
            },
          }),
        }
      : {
          initial: () => ({
            rotate: '-180deg',
            transition: {
              animationDuration: 0.1,
              bounce: 1,
            },
          }),
          hover: () => ({
            rotate: '0deg',
            transition: {
              animationDuration: 0.1,
              bounce: 1,
            },
          }),
        }) as MotionProps['variants'],
};
