import { AnimationProps, motion, MotionStyle, SVGMotionProps, Variants } from 'framer-motion';

export type MotionWraperVariants = Variants;
export type MotionWraperAnimationProps = AnimationProps;
export type MotionWrapperMotionStyle = MotionStyle;
export type MotionWrapperSVGMotionProps = SVGMotionProps<SVGPathElement>;
const MotionWrapper = {
  Div: motion.div,
  Button: motion.button,
  Section: motion.section,
  Span: motion.span,
  Li: motion.li,
  Ul: motion.ul,
  Img: motion.img,
  Path: motion.path,
  Nav: motion.nav,
};

export default MotionWrapper;
