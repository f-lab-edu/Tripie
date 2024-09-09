import classNames from 'classnames/bind';
import Divider from 'components/shared/Divider/Divider';
import { motion } from 'framer-motion';
import { ReactNode } from 'react';
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
      <Divider variants={TEXT_UNDERLINE_VARIANTS.DIVIDER} className={cx('divider')} />
    </motion.div>
  );
};

export default TextUnderLineAnimation;
