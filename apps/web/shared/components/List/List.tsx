'use client';
import { Container } from '@tripie/design-system';
import classNames from 'classnames/bind';
import { ReactNode } from 'react';
import Style from './list.module.scss';

const cx = classNames.bind(Style);

const List = ({ children, className }: { children: ReactNode; className?: string }) => {
  return (
    <Container margin="m" className={cx(className)} applyMargin="top-bottom">
      <ul className={cx('list')}>{children}</ul>
    </Container>
  );
};

export default List;
