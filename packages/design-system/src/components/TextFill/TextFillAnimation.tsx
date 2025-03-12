import { classNames, Motion, MotionProps } from '../../shared/wrappers';

import { ReactNode } from 'react';
import { InView } from 'react-intersection-observer';
import COLORS from '../../shared/colors';

import { CustomAnimationProps } from '../TripieCard';
import TripieContainer from '../TripieContainer/TripieContainer';
import Style from './text-fill-animation.module.scss';

const cx = classNames.bind(Style);

const TextFillAnimation = ({
  text,
  baseColor,
  endColor = COLORS[0],
  duration = 1,
  delay = 0,
  replays = true,
}: Partial<CustomAnimationProps>) => {
  return (
    <InView>
      {({ inView, ref }) => (
        <TripieContainer margin="none" className={cx('animation', baseColor == null ? 'default' : '')} ref={ref}>
          <span className={cx('wrap')}>
            {text}
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
                visible: { width: '100%' },
                hidden: { width: '0%' },
              }}
              transition={{ baseColor, endColor, duration, delay, replays }}
            >
              {text}
            </Motion.Span>
          </span>
        </TripieContainer>
      )}
    </InView>
  );
};

const TitleTextFillAnimation = ({
  children,
  repeat = 1,
  duration = 1,
}: Readonly<{
  children: ReactNode;
  repeat?: number;
  duration?: number;
}>) => {
  return (
    <InView>
      {({ inView, ref }) => (
        <div className={cx('animation', 'pre-title', 'default')} ref={ref}>
          <span className={cx('wrap')}>
            {children}
            <Motion.Span
              className={cx('text', 'title')}
              animate={inView ? 'visible' : 'hidden'}
              initial={{ width: '0%' }}
              variants={{
                visible: { width: '100%' },
                hidden: { width: '0%' },
              }}
              transition={{ repeat, duration }}
            >
              {children}
            </Motion.Span>
          </span>
        </div>
      )}
    </InView>
  );
};

TextFillAnimation.Title = TitleTextFillAnimation;

export default TextFillAnimation;
