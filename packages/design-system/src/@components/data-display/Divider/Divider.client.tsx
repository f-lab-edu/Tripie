'use client';

import { classNames, Motion, MotionProps } from '../../../wrappers';

import { ACCORDION_VARIANTS } from '../../../shared/motion-variants';

import TripieContainer, { TripieContainerProps } from '@core/layout/TripieContainer';
import HR_MARGINS from './constants';
import Style from './divider.module.scss';

const cx = classNames.bind(Style);

export type DividerProps = Partial<{ current: string; variants: MotionProps['variants']; className: string }>;

export type ArticleDividerProps = { type: 'hr1' | 'hr2' | 'hr3' | 'hr4' | 'hr5' };

const Divider = ({ className, current, variants = ACCORDION_VARIANTS.DIVIDER }: DividerProps) => {
  return <Motion.Div variants={variants} animate={current} className={cx('divider', className)} />;
};

const ArticleDivider = ({ item }: { item: ArticleDividerProps }) => {
  return (
    <TripieContainer applyMargin="top-bottom" margin={HR_MARGINS[item.type] as TripieContainerProps['margin']}>
      <Divider className={cx('divider', `divider-${item.type}`)} />
    </TripieContainer>
  );
};

Divider.Article = ArticleDivider;

export default Divider;
