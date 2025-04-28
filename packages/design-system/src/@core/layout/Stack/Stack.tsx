import { classNames } from '../../../wrappers';
import TripieContainer, { TripieContainerProps } from '../TripieContainer';
import Style from './stack.module.scss';

export type FlexWrapOn =
  | 'no-wrap'
  | 'wrap-reverse-xs'
  | 'wrap-reverse-sm'
  | 'wrap-reverse-md'
  | 'wrap-reverse-lg'
  | 'wrap-reverse-xl'
  | 'wrap-reverse-xxl'
  | 'wrap-xs'
  | 'wrap-sm'
  | 'wrap-md'
  | 'wrap-lg'
  | 'wrap-xl'
  | 'wrap-xxl';

export type StackProps = {
  direction?: 'row' | 'column';
  display?: 'inline-flex' | 'grid';
  flexWrapOn: FlexWrapOn;
} & Partial<TripieContainerProps>;

const cx = classNames.bind(Style);

const Stack = ({
  children,
  className,
  display = 'inline-flex',
  direction = 'row',
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
  flexWrapOn = 'no-wrap',
  ...props
}: StackProps) => {
  return (
    <TripieContainer
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
      className={cx(`stack-${display}`, `flex-${flexWrapOn}`, `direction-${direction}`, className)}
      {...props}
    >
      {children}
    </TripieContainer>
  );
};

export default Stack;
