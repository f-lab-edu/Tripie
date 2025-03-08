import classNames from 'classnames/bind';
import MotionWrapper from '../../shared/wrappers/motion-wrapper';
import Style from './rotating-blur.module.scss';

const cx = classNames.bind(Style);

const RotatingBlur = () => {
  return (
    <MotionWrapper.Div
      className={cx('pie', 'rotating-blur')}
      initial={{ rotate: 0 }}
      animate={{ scale: [1, 1.2, 1.5, 1.2, 1], rotate: 360 }}
      transition={{
        duration: 5,
        times: [0, 0.25, 0.5, 0.75, 1],
        repeat: Infinity,
        ease: 'linear',
      }}
    >
      <MotionWrapper.Div className={cx('segment', 'segment-1')}></MotionWrapper.Div>
      <MotionWrapper.Div className={cx('segment', 'segment-2')}></MotionWrapper.Div>
      <MotionWrapper.Div className={cx('segment', 'segment-3')}></MotionWrapper.Div>
    </MotionWrapper.Div>
  );
};

export default RotatingBlur;
