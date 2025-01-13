import classNames from 'classnames/bind';
import { motion } from 'framer-motion';

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
  // console.log(current);
  return (
    <motion.div className={cx('switch', className)} animate={current} onTapStart={() => cycle()}>
      <motion.div
        className={cx('background')}
        variants={SWITCH_VARIANTS.BACKGROUND}
        transition={{ ease: 'easeInOut' }}
      />
      <motion.div className={cx('button')} variants={SWITCH_VARIANTS.BUTTON} transition={{ ease: 'easeInOut' }} />
      <motion.div className={cx('switch-text')} variants={SWITCH_VARIANTS.TEXT} transition={{ ease: 'easeInOut' }}>
        {text}
      </motion.div>
    </motion.div>
  );
};

export default Switch;
