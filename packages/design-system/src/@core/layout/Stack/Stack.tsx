// 참고
// https://mui.com/material-ui/react-grid/
// http://mui.com/material-ui/react-stack/

import { classNames } from '../../../wrappers';
import TripieContainer, { TripieContainerProps } from '../TripieContainer';
import Style from './stack.module.scss';

export type GridWrapOn = 'no-wrap' | 'wrap-xs' | 'wrap-sm' | 'wrap-md' | 'wrap-lg' | 'wrap-xl' | 'wrap-xxl';

export type FlexWrapOn =
  | 'wrap-reverse-xs'
  | 'wrap-reverse-sm'
  | 'wrap-reverse-md'
  | 'wrap-reverse-lg'
  | 'wrap-reverse-xl'
  | 'wrap-reverse-xxl'
  | GridWrapOn;

export type StackProps = {
  direction?: 'row' | 'column';
  flexWrapOn?: FlexWrapOn;
  rows?: number;
  cols?: number;
  gridWrapOn?: {
    // GridWrapOn 중 하나의 key만
    [K in GridWrapOn]: { [P in K]: number };
  }[GridWrapOn];
  stretchGridLastChild?: boolean;
  gridRepeat?: Partial<Record<GridWrapOn, number>>;
} & Partial<TripieContainerProps>;

const cx = classNames.bind(Style);

const Stack = ({
  children,
  className,
  display = 'inline-flex',
  direction = 'row',
  alignItems = 'none',
  padding = 'none',
  margin = 'm',
  applyMargin = 'all',
  applyPadding = 'all',
  preserveWhiteSpace = 'none',
  refs,
  stretchGridLastChild = false,
  gap = 'none',
  justifyContent = 'none',
  withBorder = false,
  textAlign = 'start',
  flexWrapOn = 'no-wrap',
  rows = 1,
  cols = 2,
  zIndex = 'base',
  gridRepeat,
  gridWrapOn,
  fillAvailable = true,
  ...props
}: StackProps) => {
  const gridRepeatArr =
    display === 'grid' && gridRepeat != null
      ? Object.entries(gridRepeat).map(([key, value]) => `grid-repeat-${key}-${value}`)
      : [];

  const gridWrapMax =
    gridWrapOn != null ? Object.entries(gridWrapOn).map(([key, value]) => `grid-break-max-${key}-${value}`)[0] : '';

  return (
    <TripieContainer
      zIndex={zIndex}
      fillAvailable={fillAvailable}
      ref={refs}
      padding={padding}
      applyPadding={applyPadding}
      textAlign={textAlign}
      alignItems={alignItems}
      applyMargin={applyMargin}
      withBorder={withBorder}
      margin={margin}
      justifyContent={justifyContent}
      gap={gap}
      preserveWhiteSpace={preserveWhiteSpace}
      display={display}
      className={cx(
        `flex-${flexWrapOn}`,
        `direction-${direction}`,
        stretchGridLastChild ? 'stretch-grid-last-child' : '',
        display === 'grid' ? `grid-template-rows-${rows}` : '',
        display === 'grid' ? `grid-template-cols-${cols}` : '',
        gridWrapMax,
        ...gridRepeatArr,
        className
      )}
      {...props}
    >
      {children}
    </TripieContainer>
  );
};

export default Stack;
