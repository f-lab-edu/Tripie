import classNames from 'classnames/bind';

import { Variants, motion } from 'framer-motion';

import { ACCORDIAN_VARIANTS } from '../../shared/variants';
import Container, { ContainerProps } from '../Container';
import HR_MARGINS from './constants';
import Style from './divider.module.scss';

const cx = classNames.bind(Style);

export type DividerProps = Partial<{ current: string; variants: Variants; className: string }>;

export type ArticleDividerProps = { type: 'hr1' | 'hr2' | 'hr3' | 'hr4' | 'hr5' };

const Divider = ({ className, current, variants = ACCORDIAN_VARIANTS.DIVIDER }: DividerProps) => {
  return <motion.div variants={variants} animate={current} className={cx('divider', className)} />;
};

const ArticleDivider = ({ item }: { item: ArticleDividerProps }) => {
  return (
    <Container applyMargin="top-bottom" margin={HR_MARGINS[item.type] as ContainerProps['margin']}>
      <Divider className={`divider-${item.type}`} />
    </Container>
  );
};

Divider.Article = ArticleDivider;

export default Divider;
