import { AnimationProps, motion, MotionStyle, SVGMotionProps, Variant, Variants } from 'framer-motion';

export type MotionVariant = Variant;
export type MotionVariants = Variants;
export type MotionAnimationProps = AnimationProps;
export type MotionStyleProps = MotionStyle;
export type MotionSVGProps = SVGMotionProps<SVGPathElement>;

export type MotionProps = {
  variants: Variants;
  animationProps: AnimationProps;
  motionStyle: MotionStyle;
  svgProps: SVGMotionProps<SVGPathElement>;
};

export const Motion = {
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
export default Motion;
