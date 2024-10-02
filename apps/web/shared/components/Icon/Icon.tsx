import classNames from 'classnames/bind';
import { AnimationProps, Variants, motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
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

export type NavigationDirection = { direction?: 'back' | 'front' };
export type NavigationIconProps = IconProps & NavigationDirection;

const NavigateIcon = ({
  className,
  direction = 'back',
  src,
  animate,
  variants = ICON_VARIANTS.NAVIGATE(direction),
  transition,
}: Readonly<NavigationIconProps>) => {
  const navigate = useRouter();

  const onNavigate = ({ direction }: NavigationDirection) => {
    direction === 'back' ? navigate.back() : navigate.forward();
  };

  return (
    <motion.div
      onTapStart={() => onNavigate({ direction })}
      whileTap={'hover'}
      whileHover={'hover'}
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
