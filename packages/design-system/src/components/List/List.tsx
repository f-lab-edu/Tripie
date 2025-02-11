//
import classNames from 'classnames/bind';
import { ReactNode } from 'react';
import Container from '../Container/Container';
import Style from './list.module.scss';

const cx = classNames.bind(Style);

const List = ({
  children,
  className,
  rowView = false,
}: {
  children: ReactNode;
  className?: string;
  rowView?: boolean;
}) => {
  return (
    <Container margin="m" className={cx(className)} applyMargin="top-bottom">
      <ul className={cx('list', rowView ? 'row-view' : '')}>{children}</ul>
    </Container>
    // <div className={cx(className)}>
    //   <ul className={cx('list', rowView ? 'row-view' : '')}>{children}</ul>
    // </div>
  );
};

const GridList = ({ children, className }: { children: ReactNode; className?: string }) => {
  return (
    // <div className={cx(className)}>
    //   <ul className={cx('list', 'wrap')}>{children}</ul>
    // </div>
    <Container margin="m" className={cx(className)} applyMargin="top-bottom">
      <ul className={cx('list', 'wrap')}>{children}</ul>
    </Container>
  );
};

List.Grid = GridList;

export default List;
