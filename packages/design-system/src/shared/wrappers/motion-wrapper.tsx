import { motion, Variants } from 'framer-motion';

export type MotionWraperVariants = Variants;

const MotionWrapper = {
  Div: motion.div,
  Button: motion.button,
};

export default MotionWrapper;
