import { classNames, Motion } from '../../shared/wrappers';
import Style from './rotating-blur.module.scss';

const cx = classNames.bind(Style);

const RotatingBlur = () => {
  return (
    <Motion.Div
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
      <Motion.Div className={cx('segment', 'segment-1')}></Motion.Div>
      <Motion.Div className={cx('segment', 'segment-2')}></Motion.Div>
      <Motion.Div className={cx('segment', 'segment-3')}></Motion.Div>
    </Motion.Div>
  );
};

export default RotatingBlur;
