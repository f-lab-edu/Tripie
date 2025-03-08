'use client';

import classNames from 'classnames/bind';
import Link from 'next/link';
import Text, { TextProps } from '../Text';
import Style from './link.module.scss';

const style = classNames.bind(Style);

export interface LinkProps extends React.RefAttributes<HTMLAnchorElement> {
  href: string;
  children: string;
  className?: string;
  'aria-selected'?: boolean;
  'aria-disabled'?: boolean;
  role?: string;
  size?: TextProps['size'];
  bold?: TextProps['bold'];
}

function UnstyledLink({ children, className, href, role, size = 'default', ...props }: Readonly<LinkProps>) {
  return (
    <Link href={href} className={style('link', className)} role={role} {...props}>
      <Text bold={true} size={size}>
        {children}
      </Text>
    </Link>
  );
}

export default UnstyledLink;
