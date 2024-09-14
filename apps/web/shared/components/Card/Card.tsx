import classNames from 'classnames/bind';

import { Container } from '@tripie-pyotato/design-system';
import { ReactNode } from 'react';
import MotionSlideUp from '../MotionSlideUp/MotionSlideUp';

import { MotionSlideUpProps } from 'types/Animation';
import Style from './card.module.scss';

const cx = classNames.bind(Style);

const Card = ({ duration, replays, delay = 0.3, children, className }: MotionSlideUpProps) => {
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
Card.Description = CardDescription;

export default Card;
