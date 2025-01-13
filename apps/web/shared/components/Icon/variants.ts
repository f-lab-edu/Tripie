import { Variants } from 'framer-motion';

export const ICON_VARIANTS = {
  DEFAULT: {
    closed: () => ({}),
    open: () => ({
      rotate: '45deg',
      transition: {
        duration: 0.5,
        bounce: 0,
      },
    }),
    hover: () => ({
      rotate: '45deg',
      transition: {
        duration: 0.5,
        bounce: 0,
      },
    }),
  } as Variants,
  NAVIGATE: (direction: 'back' | 'front') =>
    (direction === 'back'
      ? {
          closed: () => ({
            rotate: '-135deg',
            transition: {
              duration: 0.1,
              bounce: 1,
            },
          }),
          hover: () => ({
            rotate: '-90deg',
            transition: {
              duration: 0.1,
              bounce: 1,
            },
          }),
        }
      : {
          closed: () => ({
            rotate: '45deg',
            transition: {
              duration: 0.1,
              bounce: 1,
            },
          }),
          hover: () => ({
            rotate: '0deg',
            transition: {
              duration: 0.1,
              bounce: 1,
            },
          }),
        }) as Variants,
  REFRESH: (action: 'redo' | 'undo') =>
    (action === 'redo'
      ? {
          closed: () => ({
            rotate: '-135deg',
            transition: {
              duration: 0.1,
              bounce: 1,
            },
          }),
          hover: () => ({
            rotate: '-90deg',
            transition: {
              duration: 0.1,
              bounce: 1,
            },
          }),
        }
      : {
          closed: () => ({
            rotate: '45deg',
            transition: {
              duration: 0.1,
              bounce: 1,
            },
          }),
          hover: () => ({
            rotate: '0deg',
            transition: {
              duration: 0.1,
              bounce: 1,
            },
          }),
        }) as Variants,
  PLANE: {
    rotate: {
      rotate: '90deg',
    },
    fly: () => ({
      translateX: '100vw',
      transition: {
        repeat: Infinity,
        duration: 5,
        bounce: 1,
      },
    }),
  } as Variants,
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
        duration: 8,
        bounce: 1,
      },
    }),
  } as Variants,
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
        duration: 0.5,
        bounce: 0,
      },
    }),
  } as Variants,
  SCROLL: (next: boolean) =>
    (next
      ? {
          initial: () => ({
            rotate: '0deg',
            transition: {
              duration: 0.1,
              bounce: 1,
            },
          }),
          hover: () => ({
            rotate: '-90deg',
            transition: {
              duration: 0.1,
              bounce: 1,
            },
          }),
        }
      : {
          initial: () => ({
            rotate: '-180deg',
            transition: {
              duration: 0.1,
              bounce: 1,
            },
          }),
          hover: () => ({
            rotate: '0deg',
            transition: {
              duration: 0.1,
              bounce: 1,
            },
          }),
        }) as Variants,
};
