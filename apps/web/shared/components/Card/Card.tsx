import classNames from 'classnames/bind';

import { Container } from '@tripie-pyotato/design-system';
import { motion } from 'framer-motion';
import { ReactNode } from 'react';

import { SHINE_VARIANT } from '../Chip/variants';
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
}: Readonly<{
  children: ReactNode;
  className?: string;
}>) => {
  return (
    <Container margin="none" className={cx('with-border', 'inner-wrap', className)}>
      {children}
    </Container>
  );
};

const ClickableCardContent = ({
  children,
  className,
  onClick,
  selected,
}: Readonly<{
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  selected?: boolean;
}>) => {
  return (
    <motion.div
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
