import classNames from 'classnames/bind';
import { ComponentProps, ReactNode, RefObject } from 'react';
import Style from './tripie-container.module.scss';

export type TripieContainerProps = {
  margin?: 'xl' | 'l' | 'm' | 'sm' | 'xsm' | 'none';
  align?: 'left' | 'center' | 'right';
  children?: ReactNode;
  refs?: RefObject<HTMLDivElement>;
  preserveWhiteSpace?: boolean;
  applyMargin?:
    | 'top-bottom'
    | 'top-left-right'
    | 'left-right-bottom'
    | 'left-right'
    | 'all'
    | 'left'
    | 'right'
    | 'top'
    | 'bottom';
} & Omit<ComponentProps<'div'>, 'children'>;

const cx = classNames.bind(Style);

const TripieContainer = ({
  children,
  className,
  align = 'left',
  margin = 'm',
  applyMargin = 'all',
  preserveWhiteSpace = false,
  refs,
  ...props
}: TripieContainerProps) => {
  return (
    <div
      ref={refs}
      className={cx(
        'layout-fill-available',
        `align-${align}`,
        'container',
        applyMargin,
        margin,
        preserveWhiteSpace ? 'preserve-white-space' : '',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default TripieContainer;
