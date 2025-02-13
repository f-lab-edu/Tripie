import classNames from 'classnames/bind';
import { ComponentProps, ReactNode } from 'react';
import Style from './tripie-container.module.scss';

export type TripieContainerProps = {
  margin?: 'xl' | 'l' | 'm' | 'sm' | 'xsm' | 'none';
  align?: 'left' | 'center' | 'right';
  children?: ReactNode;
  applyMargin?: 'top-bottom' | 'top-left-right' | 'left-right' | 'all' | 'left' | 'right' | 'top' | 'bottom';
} & Omit<ComponentProps<'div'>, 'children'>;

const cx = classNames.bind(Style);

const TripieContainer = ({
  children,
  className,
  align = 'left',
  margin = 'm',
  applyMargin = 'all',
  ...props
}: TripieContainerProps) => {
  return (
    <div
      className={cx('layout-fill-available', `align-${align}`, 'container', applyMargin, margin, className)}
      {...props}
    >
      {children}
    </div>
  );
};

export default TripieContainer;
