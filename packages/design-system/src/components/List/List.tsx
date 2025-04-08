import { ReactNode } from 'react';
import { classNames } from '../../shared/wrappers';
import TripieContainer, { TripieContainerProps } from '../TripieContainer/TripieContainer';
import Style from './list.module.scss';
import ListItem from './ListItem';

const cx = classNames.bind(Style);

const List = ({
  children,
  className,
  view = 'row',
  gap = 'none',
}: Partial<TripieContainerProps> & {
  view?: 'row' | 'column';
}) => {
  return (
    <TripieContainer margin="m" className={cx(className)} applyMargin="top-bottom">
      <ul className={cx('list', `gap-${gap}`, view)}>{children}</ul>
    </TripieContainer>
  );
};

const GridList = ({ children, className }: { children: ReactNode; className?: string }) => {
  return (
    <TripieContainer margin="m" className={cx(className)} applyMargin="top-bottom">
      <ul className={cx('list', 'wrap')}>{children}</ul>
    </TripieContainer>
  );
};

List.Item = ListItem;
List.Grid = GridList;

export default List;
