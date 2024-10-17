import classNames from 'classnames/bind';
import ROUTES from 'constants/routes';
import { AnimationProps, Variants, motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { ReactNode } from 'react';
import Style from './icon.module.scss';
import { ICON_VARIANTS } from './variants';

const cx = classNames.bind(Style);

export type MotionSlideUpProps = Partial<AnimationProps> & { children?: ReactNode; className?: string };

export type IconProps = {
  className?: string;
  withBorder?: boolean;
  onTapStart?: () => void;
  animate?: AnimationProps['animate'];
  variants?: Variants;
  src?: string;
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

export type NavigationDirection = { direction?: 'back' | 'front'; disabled?: boolean };
export type NavigationIconProps = IconProps & NavigationDirection;

const NavigateIcon = ({
  className,
  direction = 'back',
  src,
  animate,
  disabled,
  variants = ICON_VARIANTS.NAVIGATE(direction),
  transition,
}: Readonly<NavigationIconProps>) => {
  const navigate = useRouter();

  const onNavigate = ({ direction }: NavigationDirection) => {
    direction === 'back' ? navigate.back() : navigate.forward();
  };

  return (
    <motion.button
      disabled={disabled}
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
    </motion.button>
  );
};

const RefreshIcon = ({ className, onTapStart, animate, transition }: Readonly<IconProps>) => {
  return (
    <motion.div
      onTapStart={onTapStart}
      whileTap={'hover'}
      whileHover={'hover'}
      className={cx('icon', className)}
      variants={ICON_VARIANTS.REFRESH('undo')}
      transition={transition}
      initial={'closed'}
      animate={animate}
    >
      <img src={ROUTES.RESOURCE.REFRESH['src']} />
    </motion.div>
  );
};

const PlaneIcon = () => {
  return (
    <motion.img
      variants={ICON_VARIANTS.PLANE}
      animate={'fly'}
      initial={'rotate'}
      src={ROUTES.RESOURCE.PLANE['src']}
      className={cx('plane')}
    />
  );
};

const CloudIcon = ({ index }: { index: number }) => {
  return (
    <motion.img
      variants={ICON_VARIANTS.CLOUD}
      initial={{
        opacity: `${0.2}`,
        translateX: `${80 * (Math.random() * (index + 1))}vw`,
        translateY: `${Math.random() * 100}px`,
      }}
      animate={{ translateX: '-100vw' }}
      transition={{ decelerate: 2, repeat: Infinity, duration: 35, bounce: 0, delay: index * 0.1 }}
      src={ROUTES.RESOURCE.CLOUD['src']}
      className={cx('cloud')}
    />
  );
};

const LoadingIcon = () => {
  return (
    <motion.img
      animate={{ rotate: '360deg' }}
      transition={{ repeat: Infinity, duration: 10, bounce: 0 }}
      src={ROUTES.RESOURCE.LOADING['src']}
      className={cx('cloud')}
    />
  );
};

Icon.Navigate = NavigateIcon;
Icon.Refresh = RefreshIcon;
Icon.Plane = PlaneIcon;
Icon.Cloud = CloudIcon;
Icon.Loading = LoadingIcon;

export default Icon;
