import classNames from 'classnames/bind';
import { ReactNode } from 'react';
import Container from '../Container/Container';
import Style from './list.module.scss';

const cx = classNames.bind(Style);

const List = ({ children, className }: { children: ReactNode; className?: string }) => {
  return (
    <Container margin="m" className={cx(className)} applyMargin="top-bottom">
      <ul className={cx('list')}>{children}</ul>
    </Container>
  );
};

const GridList = ({ children, className }: { children: ReactNode; className?: string }) => {
  return (
    <Container margin="m" className={cx(className)} applyMargin="top-bottom">
      <ul className={cx('list', 'wrap')}>{children}</ul>
    </Container>
  );
};

List.Grid = GridList;

export default List;
