import { classNames } from '../../wrappers';
import ListItem from '../ListItem/ListItem';
import TripieContainer, { TripieContainerProps } from '../TripieContainer/TripieContainer';
import Style from './list.module.scss';

const cx = classNames.bind(Style);

export type ListProps = Partial<TripieContainerProps> & {
  view?: 'row' | 'column';
};

const List = ({
  children,
  className,
  view = 'row',
  justifyContent = 'flex-start',
  alignItems = 'normal',
  padding = 'none',
  applyPadding = 'all',
  margin = 'none',
  applyMargin = 'all',
  gap = 'none',
}: ListProps) => {
  return (
    <TripieContainer margin="m" applyMargin="top-bottom">
      <ul
        className={cx(
          'list',
          view,
          `align-items-${alignItems}`,
          `padding-${padding}`,
          `padding-${applyPadding}`,
          applyMargin,
          margin,
          `justify-content-${justifyContent}`,
          `gap-${gap}`,
          className
        )}
      >
        {children}
      </ul>
    </TripieContainer>
  );
};

const GridList = ({
  children,
  className,
  justifyContent = 'flex-start',
  alignItems = 'normal',
  padding = 'none',
  applyPadding = 'all',
  margin = 'none',
  applyMargin = 'all',
  gap = 'none',
}: Omit<ListProps, 'view'>) => {
  return (
    // <TripieContainer margin="m" className={cx(className)} applyMargin="top-bottom">
    //   <ul className={cx('list', 'wrap')}>{children}</ul>
    // </TripieContainer>
    <TripieContainer margin="m" applyMargin="top-bottom">
      <ul
        className={cx(
          'list',
          'wrap',
          `align-items-${alignItems}`,
          'container',
          `padding-${padding}`,
          `padding-${applyPadding}`,
          applyMargin,
          margin,
          `justify-content-${justifyContent}`,
          `gap-${gap}`,
          className
        )}
      >
        {children}
      </ul>
    </TripieContainer>
  );
};

List.Item = ListItem;
List.Grid = GridList;

export default List;
