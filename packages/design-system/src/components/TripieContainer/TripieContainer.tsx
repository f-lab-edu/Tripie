'use client';
import { ComponentProps, ReactNode, RefObject } from 'react';
import { classNames } from '../../shared/wrappers';
import Style from './tripie-container.module.scss';

export type TripieContainerProps = {
  margin?: 'xl' | 'l' | 'm' | 'sm' | 'xsm' | 'none';
  padding?: 'xl' | 'l' | 'm' | 'sm' | 'xsm' | 'none';
  justifyContent?:
    | 'none'
    | 'start'
    | 'end'
    | 'left'
    | 'right'
    | 'center'
    | 'normal'
    | 'flex-start'
    | 'flex-end'
    | 'space-between'
    | 'space-around'
    | 'space-evenly'
    | 'stretch';
  applyPadding?:
    | 'top-bottom'
    | 'top-left-right'
    | 'left-right-bottom'
    | 'left-right'
    | 'all'
    | 'left'
    | 'right'
    | 'top'
    | 'bottom';
  align?: 'left' | 'center' | 'right';
  alignItems?: 'none' | 'normal' | 'center' | 'start' | 'stretch' | 'end' | 'flex-start' | 'flex-end';
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
  gap?: 'none' | 'sm' | 'default' | 'l';
  withBorder?: boolean;
} & Omit<ComponentProps<'div'>, 'children'>;

const cx = classNames.bind(Style);

const TripieContainer = ({
  children,
  className,
  align = 'left',
  alignItems = 'none',
  padding = 'none',
  margin = 'm',
  applyMargin = 'all',
  applyPadding = 'all',
  preserveWhiteSpace = false,
  refs,
  gap = 'none',
  justifyContent = 'none',
  withBorder = false,
  ...props
}: TripieContainerProps) => {
  return (
    <div
      ref={refs}
      className={cx(
        'layout-fill-available',
        `align-${align}`,
        `align-items-${alignItems}`,
        alignItems != 'none' || gap !== 'none' || justifyContent !== 'none' ? 'flex' : '',
        'container',
        `padding-${padding}`,
        `padding-${applyPadding}`,
        applyMargin,
        margin,
        withBorder ? 'with-border' : '',
        `justify-content-${justifyContent}`,
        `gap-${gap}`,
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
