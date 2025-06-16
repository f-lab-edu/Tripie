import {
  AnimationControls,
  AnimationProps,
  HTMLMotionProps,
  motion,
  MotionStyle,
  SVGMotionProps,
  TapHandlers,
  TapInfo,
  Target,
  TargetAndTransition,
  Variant,
  VariantLabels,
  Variants,
} from 'framer-motion';

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
  VariantLabels?: VariantLabels;
  Target?: Target;
  AnimationControls?: AnimationControls;
  TapInfo?: TapInfo;
  onTap?: TapHandlers['onTap'];
  TargetAndTransition?: TargetAndTransition;
};

export type ValidHTMLElementTag = keyof HTMLElementTagNameMap;

export type HTMLMotionPropsWithoutMotion<T extends ValidHTMLElementTag> = Partial<HTMLMotionProps<T>>;

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
  Svg: motion.svg,
};
export default Motion;
