import { ComponentProps, ReactNode, RefObject } from 'react';
import { classNames } from '../../../wrappers';
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
  preserveWhiteSpace?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'none';
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
  textAlign?: 'center' | 'left' | 'right' | 'justify' | 'end' | 'start';
  zIndex?:
    | 'default'
    | 'deep'
    | 'hide'
    | 'base'
    | 'mask'
    | 'masked'
    | 'sticky'
    | 'fixed'
    | 'overlay'
    | 'loader'
    | 'modal'
    | 'popup'
    | 'dropdown'
    | 'notification'
    | 'tooltip'
    | 'above-all';
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
  preserveWhiteSpace = 'none',
  refs,
  gap = 'none',
  justifyContent = 'none',
  withBorder = false,
  textAlign = 'start',
  zIndex = 'base',
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
        `text-align-${textAlign}`,
        applyMargin,
        margin,
        withBorder ? 'with-border' : '',
        `justify-content-${justifyContent}`,
        `gap-${gap}`,
        preserveWhiteSpace ? 'preserve-white-space' : '',
        `z-index-${zIndex}`,
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default TripieContainer;
