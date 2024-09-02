import classNames from 'classnames/bind';
import { motion } from 'framer-motion';
import Style from './rotating-blur.module.scss';

const cx = classNames.bind(Style);

const RotatingBlur = () => {
  return (
    <motion.div
      className={cx('pie', 'rotating-blur')}
      initial={{ rotate: 0 }}
      animate={{ scale: [1, 1.5, 1.5, 1.2, 1], rotate: 360 }}
      transition={{
        duration: 10,
        times: [0, 0.2, 0.5, 0.8, 1],
        repeat: Infinity,
        ease: 'linear',
      }}
    >
      <motion.div className={cx('segment', 'segment-1')}></motion.div>
      <motion.div className={cx('segment', 'segment-2')}></motion.div>
      <motion.div className={cx('segment', 'segment-3')}></motion.div>
    </motion.div>
  );
};

export default RotatingBlur;
