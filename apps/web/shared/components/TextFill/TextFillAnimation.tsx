'use client';
import classNames from 'classnames/bind';
import COLORS from 'constants/colors';
import { MotionStyle, motion } from 'framer-motion';

import { ReactNode } from 'react';
import { InView } from 'react-intersection-observer';
import { CustomAnimationProps } from '../Card/Card';
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
}: Readonly<{
  children: ReactNode;
}>) => {
  return (
    <div>
      <motion.div
        className={cx('title')}
        initial={{ x: '0%', width: '0%', opacity: 1 }}
        animate={{ x: '0%', width: '100%', opacity: 1 }}
        transition={{ damping: 10, stiffness: 100, duration: 1 }}
      >
        {children}
      </motion.div>
    </div>
  );
};

TextFillAnimation.Title = TitleTextFillAnimation;

export default TextFillAnimation;
