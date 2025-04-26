import { classNames } from '../../../wrappers';
import { TripieContainerProps } from '../TripieContainer';
import Style from './tripie-background.module.scss';

export type TripieBackgroundProps = {
  variant: number;
} & Partial<TripieContainerProps>;

const cx = classNames.bind(Style);

const TripieBackground = ({
  variant = 0,
  children,
  className,
  align,
  alignItems,
  justifyContent,
  gap,
  padding,
  applyPadding,
  textAlign,
  ...args
  // preserveWhiteSpace,
}: TripieBackgroundProps) => {
  return (
    <section
      className={cx(
        `background-${variant}`,
        `align-${align}`,
        `align-items-${alignItems}`,
        alignItems != 'none' || gap !== 'none' || justifyContent !== 'none' ? 'flex' : '',
        'container',
        `padding-${padding}`,
        `padding-${applyPadding}`,
        `text-align-${textAlign}`,
        `justify-content-${justifyContent}`,
        `gap-${gap}`,
        // preserveWhiteSpace ? 'preserve-white-space' : '',

        className
      )}
      {...args}
    >
      {children}
    </section>
  );
};

export default TripieBackground;
