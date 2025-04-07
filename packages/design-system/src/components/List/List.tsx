import { ReactNode } from 'react';
import { classNames } from '../../shared/wrappers';
import TripieContainer, { TripieContainerProps } from '../TripieContainer/TripieContainer';
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
  );
};

export const ListItem = ({
  children,
  justifyContent = 'flex-start',
  alignItems = 'normal',
  gap = 'default',
  className,
}: {
  children: ReactNode;
  justifyContent?: TripieContainerProps['justifyContent'];
  alignItems?: TripieContainerProps['alignItems'];
  gap?: 'default' | 'l'; // 0.5rem 1rem
  className?: string;
}) => {
  return (
    <li
      className={cx(
        'list-item',
        `justify-content-${justifyContent}`,
        `align-items-${alignItems}`,
        `gap-${gap}`,
        className
      )}
    >
      {children}
    </li>
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
