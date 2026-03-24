'use client';
import { classNames, Motion, MotionProps, useInView } from '../../../wrappers';

import { COLORS } from '../../../shared/colors';

import { CustomAnimationProps } from '@components/surfaces/AnimatedCard';
import TripieContainer from '@core/layout/TripieContainer';
import { useRef } from 'react';
import Text, { TextProps } from '../../../@core/data-display/Text';
import Style from './text-fill-animation.module.scss';

const cx = classNames.bind(Style);

export type TextFillAnimation = Partial<CustomAnimationProps> &
  Partial<TextProps> & {
    isTitle?: boolean;
  };

const TextFillAnimation = ({
  text,
  baseColor,
  endColor = COLORS[0],
  duration = 1,
  delay = 0,
  isTitle = false,
  size,
  children,
  replays = true,
}: TextFillAnimation) => {
  const titleRef = useRef(null);
  const titleInView = useInView(titleRef);
  const ref = useRef(null);
  const inView = useInView(ref);
  if (isTitle) {
    return (
      <div className={cx('animation', 'pre-title', 'default')} ref={titleRef}>
        <span className={cx('wrap')}>
          {children}
          <Motion.Span
            className={cx('text', 'title')}
            animate={titleInView ? 'visible' : 'hidden'}
            initial={{ width: '0%' }}
            variants={{
              visible: { width: '100%' },
              hidden: { width: '0%' },
            }}
            transition={{ repeat: 1, duration }}
          >
            {children}
          </Motion.Span>
        </span>
      </div>
    );
  }
  return (
    <TripieContainer
      preserveWhiteSpace={'none'}
      margin="none"
      className={cx('animation', 'wrap', baseColor == null ? 'default' : '')}
      ref={ref}
    >
      <Text size={size}>{text}</Text>
      <Motion.Span
        className={cx('text')}
        style={
          {
            color: baseColor ?? endColor,
          } as MotionProps['motionStyle']
        }
        animate={inView ? 'visible' : 'hidden'}
        initial={{ width: '0%' }}
        variants={{
          visible: { width: 'fit-content' },
          hidden: { width: '0%' },
        }}
        transition={{ baseColor, endColor, duration, delay, replays }}
      >
        <Text size={size}>{text}</Text>
      </Motion.Span>
    </TripieContainer>
  );
};

export default TextFillAnimation;
