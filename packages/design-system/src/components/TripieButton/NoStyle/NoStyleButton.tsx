import classNames from 'classnames/bind';
import { ReactNode } from 'react';
import Style from './no-style-button.module.scss';

const cx = classNames.bind(Style);

const NoStyleButton = ({
  action,
  children,
  className,
}: {
  action: () => void | Promise<unknown>;
  children: ReactNode;
  className?: string;
}) => {
  return (
    <button onClick={action} className={cx('inherit', className)}>
      {children}
    </button>
  );
};

export default NoStyleButton;
