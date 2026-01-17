import { TripieContainerProps } from '@/src/@core/layout/TripieContainer';
import { HTMLMotionProps } from 'framer-motion';
import { ReactNode } from 'react';
import { classNames, Motion } from '../../../wrappers';
import { Button } from '../TripieButton';
import Style from './input.module.scss';

const cx = classNames.bind(Style);

export type InputProps = {
  className?: string;
  placeHolder?: string;
} & HTMLMotionProps<'input'> &
  Pick<TripieContainerProps, 'padding'> &
  Pick<TripieContainerProps, 'applyPadding'> &
  Pick<TripieContainerProps, 'margin'> &
  Pick<TripieContainerProps, 'applyMargin'>;

const Input = ({
  className,
  value,
  placeHolder,
  disabled,
  type,
  animate,
  padding = 'none',
  margin = 'm',
  applyMargin = 'all',
  applyPadding = 'all',
  ...props
}: InputProps) => {
  return (
    <Motion.Span
      className={cx(
        'input',
        `paddings_${padding}_to_${applyPadding}`,
        `margins_${margin}_to_${applyMargin}`,
        className
      )}
      animate={animate}
    >
      <Motion.Input type={type} disabled={disabled} value={value} placeholder={placeHolder} {...props} />
    </Motion.Span>
  );
};

const InputWithLabel = ({ htmlFor, ...props }: InputProps & HTMLMotionProps<'label'>) => {
  return (
    <label htmlFor={htmlFor}>
      <Input {...props} />
    </label>
  );
};

const InputWithButton = ({
  htmlFor,
  children,
  ...props
}: InputProps & HTMLMotionProps<'label'> & { children: ReactNode }) => {
  return (
    <span>
      <Input {...props} />
      <Button type="submit">{children}</Button>
    </span>
  );
};

Input.WithLabel = InputWithLabel;
Input.WithButton = InputWithButton;

export default Input;
