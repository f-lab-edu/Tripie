'use client';

import { ReactNode } from 'react';
import { classNames, Motion } from '../../../wrappers';

import { TripieContainerProps } from '@core/layout/TripieContainer';
import { COLORS } from 'shared';
import Style from './notification.module.scss';
const cx = classNames.bind(Style);

// <path d="M13 8C13 10.7614 10.7614 13 8 13C5.23858 13 3 10.7614 3 8C3 5.23858 5.23858 3 8 3C10.7614 3 13 5.23858 13 8Z" fill="currentColor"></path>

const sizes = { small: 16, medium: 24, large: 36 };

const Notification = ({
  children,
  position = 'top-right',
  color = COLORS['50'],
  size = 'small',
  zIndex = 'notification',
}: {
  children: ReactNode;
  position?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left';
  color?: string;
  size?: 'small' | 'medium' | 'large';
  zIndex?: TripieContainerProps['zIndex'];
}) => {
  return (
    <Motion.Div className={cx(`wrap`)}>
      <Motion.Svg
        viewBox={`0 0 ${sizes[size]} ${sizes[size]}`}
        strokeLinejoin="round"
        style={{ color }}
        width={sizes[size]}
        height={sizes[size]}
        className={cx('svg', `position-${position}`, `z-index-${zIndex}`)}
      >
        <Motion.Path
          className={cx('notification')}
          d={
            'M13 8C13 10.7614 10.7614 13 8 13C5.23858 13 3 10.7614 3 8C3 5.23858 5.23858 3 8 3C10.7614 3 13 5.23858 13 8Z'
          }
          fill="currentColor"
        />
      </Motion.Svg>
      {children}
    </Motion.Div>
  );
};

export default Notification;
