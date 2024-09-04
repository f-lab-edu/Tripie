import { ReactNode } from 'react';

export type AnimationProps = {
  duration: number;
  delay: number;
  replays: boolean;
  text?: string;
  startColor?: string;
  endColor?: string;
};
export type MotionSlideUpProps = Partial<AnimationProps> & Partial<{ children: ReactNode; className: string }>;
