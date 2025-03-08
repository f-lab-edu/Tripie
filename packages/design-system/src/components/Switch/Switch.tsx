import classNames from 'classnames/bind';

import MotionWrapper from '../../shared/wrappers/motion-wrapper';
import Style from './switch.module.scss';
import { SWITCH_VARIANTS } from './variants';

const cx = classNames.bind(Style);

const Switch = ({
  current,
  cycle,
  className,
  text,
}: {
  text?: string;
  current: any;
  cycle: () => void;
  className?: string;
}) => {
  return (
    <MotionWrapper.Div className={cx('switch', className)} animate={current} onTapStart={() => cycle()}>
      <MotionWrapper.Div
        className={cx('background')}
        variants={SWITCH_VARIANTS.BACKGROUND}
        transition={{ ease: 'easeInOut' }}
      />
      <MotionWrapper.Div
        className={cx('button')}
        variants={SWITCH_VARIANTS.BUTTON}
        transition={{ ease: 'easeInOut' }}
      />
      <MotionWrapper.Div
        className={cx('switch-text')}
        variants={SWITCH_VARIANTS.TEXT}
        transition={{ ease: 'easeInOut' }}
      >
        {text}
      </MotionWrapper.Div>
    </MotionWrapper.Div>
  );
};

export default Switch;
