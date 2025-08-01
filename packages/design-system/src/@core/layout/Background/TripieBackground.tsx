import { classNames } from '../../../wrappers';
import { TripieContainerProps } from '../TripieContainer';
import Style from './tripie-background.module.scss';

export type TripieBackgroundProps = {
  variant: number;
  position?: 'absolute' | 'relative' | 'static' | 'sticky' | 'fixed';
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
  padding = 'none',
  applyPadding = 'all',
  textAlign,
  zIndex,
  position = 'relative',
  ...args
}: TripieBackgroundProps) => {
  return (
    <section
      className={cx(
        `background-${variant}`,
        `align-items-${alignItems}`,
        alignItems != 'none' || gap !== 'none' || justifyContent !== 'none' ? 'flex' : '',
        `paddings_${padding}_to_${applyPadding}`,
        `text-align-${textAlign}`,
        `justify-content-${justifyContent}`,
        `gap-${gap}`,
        `z-index-${zIndex}`,
        `position-${position}`,
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
