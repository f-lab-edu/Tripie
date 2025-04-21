import { classNames } from '../../wrappers';
import { TripieContainerProps } from '../TripieContainer/TripieContainer';
import Style from './list-item.module.scss';

const cx = classNames.bind(Style);

export type ListItemProps = Partial<TripieContainerProps>;

const ListItem = ({
  children,
  justifyContent = 'flex-start',
  alignItems = 'normal',
  gap = 'default',
  padding = 'none',
  applyPadding = 'all',
  applyMargin = 'all',
  margin = 'none',
  className,
}: ListItemProps) => {
  return (
    <li
      className={cx(
        `align-items-${alignItems}`,
        alignItems != 'none' || gap !== 'none' || justifyContent !== 'none' ? 'flex' : '',
        'list-item',
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
    </li>
  );
};

export default ListItem;
