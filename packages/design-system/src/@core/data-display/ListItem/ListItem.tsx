import { classNames } from '../../../wrappers';
import { TripieContainerProps } from '../../layout/TripieContainer/TripieContainer';
import Style from './list-item.module.scss';

const cx = classNames.bind(Style);

export type ListItemProps = Partial<TripieContainerProps>;

const ListItem = ({
  children,
  justifyContent = 'flex-start',
  alignItems = 'center',
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
        `paddings_${padding}_to_${applyPadding}`,
        `margins_${margin}_to_${applyMargin}`,
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
