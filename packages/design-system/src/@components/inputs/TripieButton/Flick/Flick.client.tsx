'use client';

import { ReactNode } from 'react';
import { BTN_FONT_SIZE } from 'shared';
import { classNames } from '../../../../wrappers';
import { FlickText as Text } from '../../../data-display/AnimatedText/AnimatedText.client';
import Button, { TripieButtonProps } from '../Button.client';
import Style from './flick.module.scss';

const cx = classNames.bind(Style);

const FlickTextButton = ({
  children,
  className,
  disabled = false,
  type = 'button',
  otherChild = children,
  withBorder = false,
  onClick,
  animate = 'rest',
  selected = false,
  sizes = 'medium',
  ...args
}: Readonly<{
  otherChild?: ReactNode;
  sizes?: 'large' | 'medium' | 'small' | 'tiny';
}> &
  TripieButtonProps) => {
  return (
    <Button
      disabled={disabled}
      onTap={onClick}
      type={type}
      className={cx('button', `button-gap-${sizes}`, className)}
      initial="rest"
      selected={selected}
      sizes={sizes}
      withBorder={withBorder}
      whileHover={disabled ? 'rest' : 'hover'}
      whileTap={disabled ? 'rest' : 'hover'}
      animate={animate}
      {...args}
    >
      <Text sizes={BTN_FONT_SIZE[sizes]}>{children}</Text>
      <Text className={cx('hovered')} sizes={BTN_FONT_SIZE[sizes]}>
        {otherChild}
      </Text>
    </Button>
  );
};

export default FlickTextButton;
