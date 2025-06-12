import { classNames } from '../../../wrappers';
import { TripieContainerProps } from '../TripieContainer';
import Style from './tripie-background.module.scss';

export type TripieBackgroundProps = {
  variant: number;
  isFullScreen?: boolean;
} & Partial<TripieContainerProps>;

const cx = classNames.bind(Style);

const TripieBackground = ({
  variant = 0,
  children,
  className,
  alignItems,
  isFullScreen = false,
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
        `align-items-${alignItems}`,
        alignItems != 'none' || gap !== 'none' || justifyContent !== 'none' ? 'flex' : '',
        'container',
        `paddings_${padding}_to_${applyPadding}`,
        `text-align-${textAlign}`,
        `justify-content-${justifyContent}`,
        `gap-${gap}`,
        'layout-fill-available',
        isFullScreen ? 'full-screen' : '',
        className
      )}
      {...args}
    >
      {children}
    </section>
  );
};

export default TripieBackground;
