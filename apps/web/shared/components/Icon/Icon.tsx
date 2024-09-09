import classNames from 'classnames/bind';
import { AnimationProps, Variants, motion } from 'framer-motion';
import Style from './icon.module.scss';
import { ICON_VARIANTS } from './variants';

const cx = classNames.bind(Style);

export type IconProps = {
  className?: string;
  withBorder?: boolean;
  onTapStart?: () => void;
  animate?: AnimationProps['animate'];
  variants?: Variants;
  src: string;
  transition?: AnimationProps['transition'];
};

const Icon = ({
  className,
  onTapStart,
  src,
  animate,
  variants = ICON_VARIANTS.DEFAULT,
  transition,
}: Readonly<IconProps>) => {
  return (
    <motion.div
      onTapStart={onTapStart}
      className={cx('icon', className)}
      variants={variants}
      transition={transition}
      animate={animate}
    >
      <img src={src} />
    </motion.div>
  );
};

export default Icon;
