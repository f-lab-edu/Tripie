import classNames from 'classnames/bind';
import { motion } from 'framer-motion';

import Style from './particles.module.scss';

const cx = classNames.bind(Style);

const Particles = ({ x, y, duration }: { x: number; y: number; duration: number }) => {
  return (
    <motion.div
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
