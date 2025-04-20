import { ReactNode } from 'react';

import { classNames } from '../../../wrappers';

import Style from './text.module.scss';

const cx = classNames.bind(Style);

export interface TextProps {
  size?: 'default' | 'h0' | 'h1' | 'h2' | 'h3' | 'h4' | 'text' | 'small' | 'tiny';
  bold?: boolean;
  children: ReactNode;
  className?: string;
  crossOut?: boolean;
}

const Text = ({
  children,
  className,
  size = 'default',
  bold = false,
  crossOut = false,
  ...props
}: Readonly<TextProps>) => {
  const splitText = `${children}`.split('\n').map((sentence, index) => {
    return (
      <span
        className={cx('text', bold ? 'bold' : '', size, crossOut ? 'cross' : '', className)}
        key={index + sentence}
        {...props}
      >
        {sentence}
      </span>
    );
  });
  return <>{splitText}</>;
};

const AccentedText = ({ children, className, bold, size = 'default', ...props }: Readonly<TextProps>) => {
  return (
    <span className={cx('text', 'accented', size, bold ? 'bold' : '', className)} {...props}>
      {children}
    </span>
  );
};

Text.Accented = AccentedText;

export default Text;
