'use client';

import Link from 'next/link';
import { ReactNode } from 'react';
import { classNames } from '../../wrappers';

import Style from './link.module.scss';

import { Text } from '@core';
import { TextProps } from '@core/Text';

const cs = classNames.bind(Style);

export interface LinkProps extends React.RefAttributes<HTMLAnchorElement> {
  href: string;
  children: ReactNode | string;
  className?: string;
  'aria-selected'?: boolean;
  'aria-disabled'?: boolean;
  role?: string;
  size?: TextProps['size'];
  bold?: TextProps['bold'];
}

function UnstyledLink({ children, className, href, role, size = 'default', ...props }: Readonly<LinkProps>) {
  return (
    <Link href={href} className={cs('link', className)} role={role} {...props}>
      {children?.toString === children ? (
        <Text bold={true} size={size}>
          {children}
        </Text>
      ) : (
        children
      )}
    </Link>
  );
}

export default UnstyledLink;
