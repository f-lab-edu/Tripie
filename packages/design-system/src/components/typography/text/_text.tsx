'use client';

import classNames from 'classnames/bind';
import Style from './_text.module.scss';

const style = classNames.bind(Style);

export interface TextProps {
  dim?: boolean;
  size?: 'default' | 'h0' | 'h1' | 'h2' | 'h3' | 'h4' | 'text' | 'small' | 'tiny';
  color?: 'primary' | 'secondary' | 'danger' | 'warning' | 'gray' | 'emphasize';
  bold?: boolean;
  children: string;
  className?: string;
}

function Text({ children, className, ...props }: TextProps) {
  const splitText = `${children}`.split('\n').map((sentence, index) => {
    return (
      <span className={style(className, 'text')} key={index + sentence} {...props}>
        {sentence}
      </span>
    );
  });
  return <div>{splitText}</div>;
}

export default Text;
