import classNames from 'classnames/bind';
import { Variants, motion } from 'framer-motion';
import { ReactNode } from 'react';
import Divider from 'shared/components/Divider/Divider';
import Style from './contact.module.scss';
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
    <motion.div
      className={cx('wrap', className)}
      onClick={onClick}
      variants={TEXT_UNDERLINE_VARIANTS}
      whileHover={'open'}
      whileTap={'open'}
    >
      {children}
      <Divider variants={TEXT_UNDERLINE_VARIANTS.DIVIDER as unknown as Variants} className={cx('divider')} />
    </motion.div>
  );
};

export default TextUnderLineAnimation;
