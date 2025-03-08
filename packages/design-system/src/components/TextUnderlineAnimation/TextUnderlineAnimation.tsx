import classNames from 'classnames/bind';
import { Variants } from 'framer-motion';
import { ReactNode } from 'react';

import MotionWrapper from '../../shared/wrappers/motion-wrapper';
import Divider from '../Divider';
import Style from './text-underline.module.scss';
import { TEXT_UNDERLINE_VARIANTS } from './variants';

const cx = classNames.bind(Style);

const TextUnderLineAnimation = ({
  children,
  onClick,
  className,
}: {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
}) => {
  return (
    <MotionWrapper.Div
      className={cx('wrap', className)}
      onClick={onClick}
      variants={TEXT_UNDERLINE_VARIANTS}
      whileHover={'open'}
      whileTap={'open'}
    >
      {children}
      <Divider variants={TEXT_UNDERLINE_VARIANTS.DIVIDER as unknown as Variants} className={cx('divider')} />
    </MotionWrapper.Div>
  );
};

export default TextUnderLineAnimation;
