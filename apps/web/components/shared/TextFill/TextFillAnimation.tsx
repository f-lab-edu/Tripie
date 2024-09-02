'use client';
import classNames from 'classnames/bind';
import COLORS from 'constants/colors';
import { MotionStyle, motion, useAnimation } from 'framer-motion';
import { CSSProperties, ReactNode, useEffect, useRef } from 'react';
import Style from './text-fill-animation.module.scss';

const cx = classNames.bind(Style);

type TextFillAnimationProps = {
  text: string;
  startColor: string;
  endColor: string;
  duration: number;
  delay: number;
  replays: boolean;
  style: CSSProperties;
};

const TextFillAnimation = ({
  text,
  startColor = COLORS[800],
  endColor = COLORS[0],
  duration = 1,
  delay = 0,
  replays = true,
  style,
}: Partial<TextFillAnimationProps>) => {
  const controls = useAnimation();
  const textRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(async ([entry]) => {
      if (entry.isIntersecting) {
        await new Promise(resolve => setTimeout(resolve, delay * 1000));
        controls.start('visible');
      } else if (!entry.isIntersecting && replays) {
        controls.start('hidden');
      }
    });
    if (textRef?.current != null) {
      observer.observe(textRef.current);
    }

    return () => observer.disconnect();
  }, [duration, controls, startColor, delay, replays]);

  return (
    <div className={cx('animation')} ref={textRef}>
      <span className={cx('wrap')}>
        {text}
        <motion.span
          className={cx('text')}
          style={
            {
              color: endColor,
              ...style,
            } as MotionStyle
          }
          animate={controls}
          initial={{ width: '0%' }}
          variants={{
            visible: { width: '100%' },
            hidden: { width: '0%' },
          }}
          transition={{ duration: duration }}
        >
          {text}
        </motion.span>
      </span>
    </div>
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
