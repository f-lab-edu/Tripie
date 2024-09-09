import { DefaultProps } from './Props';

export type AnimationProps = {
  duration: number;
  delay: number;
  replays: boolean;
  text?: string;
  startColor?: string;
  endColor?: string;
};
export type MotionSlideUpProps = Partial<AnimationProps> & DefaultProps;
