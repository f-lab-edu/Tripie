import { classNames, Motion } from '../../../../wrappers';

import Style from './particles.module.scss';

const cx = classNames.bind(Style);

const Particles = ({ x, y, duration = 0.5 }: { x: number; y: number; duration: number }) => {
  return (
    <Motion.Div
      initial={{ opacity: 0, x: 0, y: 0 }}
      animate={{ opacity: 1, x, y }}
      transition={{
        repeat: Infinity,
        repeatType: 'mirror',
        duration,
      }}
      className={cx('particle')}
    />
  );
};

export default Particles;
