import classNames from 'classnames/bind';
import { Cycle, motion } from 'framer-motion';

import Style from './switch.module.scss';
import { SWITCH_VARIANTS } from './variants';

const cx = classNames.bind(Style);

const Switch = ({ current, cycle }: { current: string; cycle: Cycle }) => {
  return (
    <motion.div className={cx('switch')} animate={current} onTapStart={() => cycle()}>
      <motion.div
        className={cx('background')}
        variants={SWITCH_VARIANTS.BACKGROUND}
        transition={{ ease: 'easeInOut' }}
      />
      <motion.div className={cx('button')} variants={SWITCH_VARIANTS.BUTTON} transition={{ ease: 'easeInOut' }} />
      <motion.div className={cx('switch-text')} variants={SWITCH_VARIANTS.TEXT} transition={{ ease: 'easeInOut' }}>
        {current}
      </motion.div>
    </motion.div>
  );
};

export default Switch;
