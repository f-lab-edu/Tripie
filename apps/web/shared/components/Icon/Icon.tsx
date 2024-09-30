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
  onTap?: () => void;
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

export type NavigationIconProps = IconProps & { direction?: 'back' | 'front' };

const NavigateIcon = ({
  className,
  onTapStart,
  direction = 'back',
  src,
  animate,
  variants = ICON_VARIANTS.NAVIGATE(direction),
  transition,
}: Readonly<NavigationIconProps>) => {
  return (
    <motion.div
      onTapStart={onTapStart}
      whileTap={'hover'}
      className={cx('icon', className)}
      variants={variants}
      transition={transition}
      initial={'closed'}
      animate={animate}
    >
      <img src={src} />
    </motion.div>
  );
};

Icon.Navigate = NavigateIcon;

export default Icon;
