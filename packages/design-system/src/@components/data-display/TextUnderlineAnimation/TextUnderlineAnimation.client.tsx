import { ReactNode } from 'react';

import { classNames, Motion, MotionProps } from '../../../wrappers';

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
    <Motion.Div
      className={cx('wrap', className)}
      onClick={onClick}
      variants={TEXT_UNDERLINE_VARIANTS}
      whileHover={'open'}
      whileTap={'open'}
    >
      {children}
      <Divider
        variants={TEXT_UNDERLINE_VARIANTS.DIVIDER as unknown as MotionProps['variants']}
        className={cx('divider')}
      />
    </Motion.Div>
  );
};

export default TextUnderLineAnimation;
