import { TripieContainerProps } from '@components/TripieContainer';
import { classNames } from '../../../wrappers';
import Style from './no-style-button.module.scss';

const cx = classNames.bind(Style);

const NoStyleButton = ({
  action,
  children,
  name = 'no-style-button',
  type = 'button',
  className,
  alignItems,
  padding,
  applyPadding,
  applyMargin,
  margin,
  justifyContent,
  gap,
}: Partial<TripieContainerProps> & {
  action?: () => void | Promise<unknown>;
  name?: string;
  type?: 'submit' | 'reset' | 'button';
}) => {
  return (
    <button
      type={type}
      name={name}
      onClick={action}
      className={cx(
        'clear-btn',
        `align-items-${alignItems}`,
        'container',
        `padding-${padding}`,
        `padding-${applyPadding}`,
        applyMargin,
        margin,
        `justify-content-${justifyContent}`,
        `gap-${gap}`,
        className
      )}
    >
      {children}
    </button>
  );
};

export default NoStyleButton;
