import { ReactNode } from 'react';
import { classNames } from '../../../shared/wrappers';
import Style from './no-style-button.module.scss';

const cx = classNames.bind(Style);

const NoStyleButton = ({
  action,
  children,
  name = 'no-style-button',
  type = 'button',
  className,
}: {
  action?: () => void | Promise<unknown>;
  name?: string;
  children: ReactNode;
  className?: string;
  type?: 'submit' | 'reset' | 'button';
}) => {
  return (
    <button type={type} name={name} onClick={action} className={cx('clear-btn', className)}>
      {children}
    </button>
  );
};

export default NoStyleButton;
