import { MotionProps } from 'framer-motion';

const variants = (next: boolean) =>
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
      }) as MotionProps['variants'];

export default variants;
