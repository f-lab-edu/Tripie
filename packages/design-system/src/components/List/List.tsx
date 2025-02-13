//
import classNames from 'classnames/bind';
import { ReactNode } from 'react';
import TripieContainer from '../TripieContainer/TripieContainer';
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
    <TripieContainer margin="m" className={cx(className)} applyMargin="top-bottom">
      <ul className={cx('list', rowView ? 'row-view' : '')}>{children}</ul>
    </TripieContainer>
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
    <TripieContainer margin="m" className={cx(className)} applyMargin="top-bottom">
      <ul className={cx('list', 'wrap')}>{children}</ul>
    </TripieContainer>
  );
};

List.Grid = GridList;

export default List;
