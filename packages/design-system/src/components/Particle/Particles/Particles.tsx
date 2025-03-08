import classNames from 'classnames/bind';

import MotionWrapper from '../../../shared/wrappers/motion-wrapper';
import Style from './particles.module.scss';

const cx = classNames.bind(Style);

const Particles = ({ x, y, duration }: { x: number; y: number; duration: number }) => {
  return (
    <MotionWrapper.Div
      initial={{ opacity: 0, x: 0, y: 0 }}
      animate={{ opacity: 1, x, y }}
      transition={{
        repeat: Infinity,
        repeatType: 'mirror',
        duration: duration,
      }}
      className={cx('particle')}
    />
  );
};

export default Particles;
