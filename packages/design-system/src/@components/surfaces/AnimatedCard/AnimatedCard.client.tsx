// https://mui.com/material-ui/react-card/

import { ReactNode, RefObject } from 'react';
import { SHINE_VARIANT } from '../../../shared/motion-variants';
import { Motion, classNames } from '../../../wrappers';
import { CardProps } from '../Card';
import Style from './animated-card.module.scss';

const cx = classNames.bind(Style);

export type CustomAnimationProps = {
  duration: number;
  delay: number;
  replays: boolean;
  text?: string;
  endColor?: string;
  children?: ReactNode;
  className?: string;
  baseColor?: string;
  repeat?: number;
} & CardProps;

const AnimatedCard = ({
  children,
  ref,
  className,
  onClick,
  selected,
}: Readonly<{
  ref?: RefObject<HTMLDivElement>;
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  selected?: boolean;
}>) => {
  return (
    <Motion.Div
      ref={ref}
      whileHover={'shine'}
      whileTap={'shine'}
      animate={selected ? 'selected' : 'rest'}
      variants={SHINE_VARIANT}
      onClick={onClick}
      className={cx('animated-card', className)}
    >
      {children}
    </Motion.Div>
  );
};

export default AnimatedCard;
