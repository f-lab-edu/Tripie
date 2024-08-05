'use client';

import classNames from 'classnames';
import { HTMLAttributes, ReactNode } from 'react';
import { useAppTheme } from '../../hooks';
import maruBuri from '../typography/font';
import './_body.scss';

export interface BodyProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
}

const Body = ({ children, className, ...props }: BodyProps) => {
  const { mode } = useAppTheme();

  return (
    <section className={classNames(mode, maruBuri.className, className)} {...props}>
      <div className="background-container">
        <div className="stars"></div>
        <div className="twinkling"></div>
      </div>
      <div className="layout-wrap">{children}</div>
    </section>
  );
};
export default Body;
