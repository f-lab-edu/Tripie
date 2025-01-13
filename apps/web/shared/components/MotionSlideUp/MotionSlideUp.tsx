import { motion } from 'framer-motion';

import { InView } from 'react-intersection-observer';
import { MotionSlideUpProps } from '../Icon/Icon';

const cardMotion = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

export type CustomMotionSlideUpProps = Partial<
  MotionSlideUpProps & {
    duration: number;
    delay: number;
    replays: boolean;
  }
>;

const MotionSlideUp = ({ duration = 1, delay = 0, replays = true, children, className }: CustomMotionSlideUpProps) => {
  return (
    <InView>
      {({ inView, ref }) => (
        <motion.div
          animate={inView ? 'visible' : 'hidden'}
          ref={ref}
          variants={cardMotion}
          transition={{ duration, delay, damping: 2, stiffness: 10, replays }}
          className={className}
        >
          {children}
        </motion.div>
      )}
    </InView>
  );
};
export default MotionSlideUp;
