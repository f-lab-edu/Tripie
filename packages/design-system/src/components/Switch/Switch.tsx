import { classNames, Motion } from '../../wrappers';
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
    <Motion.Div className={cx('switch', className)} animate={current} onTapStart={() => cycle()}>
      <Motion.Div
        className={cx('background')}
        variants={SWITCH_VARIANTS.BACKGROUND}
        transition={{ ease: 'easeInOut' }}
      />
      <Motion.Div className={cx('button')} variants={SWITCH_VARIANTS.BUTTON} transition={{ ease: 'easeInOut' }} />
      <Motion.Div className={cx('switch-text')} variants={SWITCH_VARIANTS.TEXT} transition={{ ease: 'easeInOut' }}>
        {text}
      </Motion.Div>
    </Motion.Div>
  );
};

export default Switch;
