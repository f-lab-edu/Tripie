import classNames from 'classnames/bind';

import { motion } from 'framer-motion';
import { MutableRefObject, ReactNode, RefObject } from 'react';
import { SHINE_VARIANT } from '../../shared/variants';
import Container from '../Container/Container';
import MotionSlideUp from '../MotionSlideUp/MotionSlideUp';
import Style from './card.module.scss';
const cx = classNames.bind(Style);

export type CustomAnimationProps = {
  duration: number;
  delay: number;
  replays: boolean;
  text?: string;
  startColor?: string;
  endColor?: string;
  children?: ReactNode;
  className?: string;
};

const Card = ({ duration, replays, delay = 0.3, children, className }: Partial<CustomAnimationProps>) => {
  return (
    <MotionSlideUp
      delay={delay}
      duration={duration}
      replays={replays}
      className={cx('with-border', 'outer-wrap', className)}
    >
      {children}
      <div className={cx('noise')}></div>
    </MotionSlideUp>
  );
};

const CardContent = ({
  children,
  className,
  ref,
}: Readonly<{
  children: ReactNode;
  className?: string;
  ref?: MutableRefObject<HTMLDivElement | null>;
}>) => {
  return (
    <Container margin="none" ref={ref} className={cx('with-border', 'inner-wrap', className)}>
      {children}
    </Container>
  );
};

const ClickableCardContent = ({
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
    <motion.div
      ref={ref}
      whileHover={'shine'}
      whileTap={'shine'}
      animate={selected ? 'selected' : 'rest'}
      variants={SHINE_VARIANT}
      onClick={onClick}
      className={cx('chip', 'with-border', 'inner-wrap', className)}
    >
      {children}
    </motion.div>
  );
};

const CardDescription = ({
  children,
  className,
}: Readonly<{
  children: ReactNode;
  className?: string;
}>) => {
  return (
    <Container margin="none" className={cx('inner-wrap', 'with-description', className)}>
      {children}
    </Container>
  );
};

Card.Content = CardContent;
Card.ClickableContent = ClickableCardContent;
Card.Description = CardDescription;

export default Card;
