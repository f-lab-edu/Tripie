'use client';
import classNames from 'classnames/bind';
import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import Text from '../../Text';
import TripieContainer from '../../TripieContainer/TripieContainer';
import Style from './animated-button.module.scss';
// import { VARIANTS } from '../../../shared/variants';

const cx = classNames.bind(Style);

// const AnimatedButton = ({
//   children,
//   className,
//   disabled = false,
//   otherChild = children,
//   withBorder = false,
//   onClick,
//   animate = 'rest',
//   withMinWidth = false,
// }: Readonly<{
//   children: ReactNode;
//   disabled?: boolean;
//   otherChild?: ReactNode;
//   className?: string;
//   withBorder?: boolean;
//   onClick?: () => void;
//   animate?: 'rest' | 'hover';
//   withMinWidth?: boolean;
// }>) => {
//   return (
//     <motion.button
//       disabled={disabled}
//       onClick={onClick}
//       className={cx('button', withBorder && 'with-border', withMinWidth && 'min', className)}
//       initial="rest"
//       whileHover={disabled ? 'rest' : 'hover'}
//       whileTap={disabled ? 'rest' : 'hover'}
//       animate={animate}
//     >
//       <Text.Flick>{children}</Text.Flick>
//       <Container applyMargin="top"> </Container>
//       <Text.Flick className={cx('hovered')}>{otherChild}</Text.Flick>
//     </motion.button>
//   );
// };

const AnimatedButton = ({
  children,
  className,
  disabled = false,
  otherChild = children,
  withBorder = false,
  onClick,
  animate = 'rest',
  withMinWidth = false,
}: Readonly<{
  children: ReactNode;
  disabled?: boolean;
  otherChild?: ReactNode;
  className?: string;
  withBorder?: boolean;
  onClick?: () => void;
  animate?: 'rest' | 'hover';
  withMinWidth?: boolean;
}>) => {
  return (
    <motion.button
      disabled={disabled}
      onClick={onClick}
      className={cx('button', withBorder && 'with-border', withMinWidth && 'min', className)}
      initial="rest"
      whileHover={disabled ? 'rest' : 'hover'}
      whileTap={disabled ? 'rest' : 'hover'}
      animate={animate}
    >
      <Text.Flick>{children}</Text.Flick>
      <TripieContainer applyMargin="top"> </TripieContainer>
      <Text.Flick className={cx('hovered')}>{otherChild}</Text.Flick>
    </motion.button>
  );
};

export const AnimatedText = ({
  children,
  className,
  disabled = false,
  otherChild = children,
  withBorder = false,

  animate = 'rest',
  withMinWidth = false,
}: Readonly<{
  children: ReactNode;
  disabled?: boolean;
  otherChild?: ReactNode;
  className?: string;
  withBorder?: boolean;

  animate?: 'rest' | 'hover';
  withMinWidth?: boolean;
}>) => {
  return (
    <motion.div
      className={cx('button', withBorder && 'with-border', withMinWidth && 'min', className)}
      initial="rest"
      whileHover={disabled ? 'rest' : 'hover'}
      whileTap={disabled ? 'rest' : 'hover'}
      animate={animate}
      // variants={VARIANTS['FLICK_TEXT']}
    >
      <Text.Flick>{children}</Text.Flick>
      <TripieContainer applyMargin="top"> </TripieContainer>
      <Text.Flick className={cx('hovered')}>{otherChild}</Text.Flick>
    </motion.div>
  );
};

AnimatedButton.Text = AnimatedText;

export default AnimatedButton;
