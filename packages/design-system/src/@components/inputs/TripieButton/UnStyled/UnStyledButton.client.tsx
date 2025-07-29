'use client';

import { TripieContainerProps } from '@core/layout/TripieContainer';
import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';
import { classNames } from '../../../../wrappers';
import Style from './Unstyled-button.module.scss';

const cx = classNames.bind(Style);

const UnstyledButton = ({
  onclick,
  children,
  name = 'no-style-button',
  type = 'button',
  className,
  alignItems = 'center',
  padding = 'none',
  applyPadding = 'all',
  applyMargin = 'all',
  margin = 'none',
  justifyContent = 'center',
  gap,
  withBorder = false,
  ...args
}: Partial<TripieContainerProps> & {
  onclick?: () => void | Promise<unknown>;
  name?: string;
  type?: 'submit' | 'reset' | 'button';
} & DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>) => {
  return (
    <button
      type={type}
      name={name}
      onClick={onclick}
      className={cx(
        'clear-btn',
        `align-items-${alignItems}`,
        `paddings_${padding}_to_${applyPadding}`,
        `margins_${margin}_to_${applyMargin}`,
        `justify-content-${justifyContent}`,
        `gap-${gap}`,
        `with-${!withBorder ? '-no' : ''}border`,
        className
      )}
      {...args}
    >
      {children}
    </button>
  );
};

export default UnstyledButton;
