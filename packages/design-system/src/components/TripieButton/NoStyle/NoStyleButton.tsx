import classNames from 'classnames/bind';
import { ReactNode } from 'react';
import Style from './no-style-button.module.scss';

const cx = classNames.bind(Style);

const NoStyleButton = ({
  action,
  children,
  name = '',
  className,
}: {
  action: () => void | Promise<unknown>;
  name?: string;
  children: ReactNode;
  className?: string;
}) => {
  return (
    <button name={name} onClick={action} className={cx('clear-btn', className)}>
      {children}
    </button>
  );
};

export default NoStyleButton;
