import classNames from 'classnames/bind';

import { Variants, motion } from 'framer-motion';
import { DefaultProps } from 'types/Props';
import Style from './divider.module.scss';
import { ACCORDIAN_VARIANTS } from './variants';

const cx = classNames.bind(Style);

type DividerProps = { current?: string; variants?: Variants } & DefaultProps;

const Divider = ({ className, current, variants = ACCORDIAN_VARIANTS.DIVIDER }: DividerProps) => {
  return <motion.div variants={variants} animate={current} className={cx('divider', className)} />;
};

export default Divider;
