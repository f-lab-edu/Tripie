import { MotionProps } from 'wrappers';

const variants = (action: 'redo' | 'undo') =>
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
      }) as MotionProps['variants'];

export default variants;
