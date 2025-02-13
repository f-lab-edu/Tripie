import classNames from 'classnames/bind';

import { MotionStyle, motion } from 'framer-motion';

import { ReactNode } from 'react';
import { InView } from 'react-intersection-observer';
import COLORS from '../../shared/colors';

import { CustomAnimationProps } from '../TripieCard';
import Style from './text-fill-animation.module.scss';

const cx = classNames.bind(Style);

const TextFillAnimation = ({
  text,
  startColor = COLORS[800],
  endColor = COLORS[0],
  duration = 1,
  delay = 0,
  replays = true,
}: Partial<CustomAnimationProps>) => {
  return (
    <InView>
      {({ inView, ref }) => (
        <div className={cx('animation')} ref={ref}>
          <span className={cx('wrap')}>
            {text}
            <motion.span
              className={cx('text')}
              style={
                {
                  color: endColor,
                } as MotionStyle
              }
              animate={inView ? 'visible' : 'hidden'}
              initial={{ width: '0%' }}
              variants={{
                visible: { width: '100%' },
                hidden: { width: '0%' },
              }}
              transition={{ startColor, endColor, duration, delay, replays }}
            >
              {text}
            </motion.span>
          </span>
        </div>
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
        <div className={cx('animation', 'pre-title')} ref={ref}>
          <span className={cx('wrap')}>
            {children}
            <motion.span
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
            </motion.span>
          </span>
        </div>
      )}
    </InView>
  );
};

TextFillAnimation.Title = TitleTextFillAnimation;

export default TextFillAnimation;
