import classNames from 'classnames/bind';
import COLORS from 'constants/colors';
import { SVGMotionProps, motion } from 'framer-motion';
import Style from './menu-toggle.module.scss';

const cx = classNames.bind(Style);

const Path = (props: SVGMotionProps<SVGPathElement>) => (
  <motion.path fill="transparent" strokeWidth="1" stroke={COLORS[0]} strokeLinecap="round" {...props} />
);

export const MenuToggle = ({ toggle }: { toggle: () => null }) => (
  <button onClick={() => toggle()} className={cx('menu-toggle')}>
    <svg width="24" height="24" viewBox="0 0 24 24" className={cx('svg')}>
      <Path
        variants={{
          closed: { d: 'M 2 2.5 L 20 2.5' },
          open: { d: 'M 3 16.5 L 17 2.5' },
        }}
      />
      <Path
        d="M 2 9.423 L 20 9.423"
        variants={{
          closed: { opacity: 1 },
          open: { opacity: 0 },
        }}
        transition={{ duration: 0.1 }}
      />
      <Path
        variants={{
          closed: { d: 'M 2 16.346 L 20 16.346' },
          open: { d: 'M 3 2.5 L 17 16.346' },
        }}
      />
    </svg>
  </button>
);
