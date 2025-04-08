import { classNames } from '../../shared/wrappers';
import { TripieContainerProps } from '../TripieContainer/TripieContainer';
import Style from './list-item.module.scss';

const cx = classNames.bind(Style);

export const ListItem = ({
  children,
  justifyContent = 'flex-start',
  alignItems = 'normal',
  gap = 'default',
  padding = 'none',
  className,
  applyPadding = 'all',
  applyMargin,
  margin,
}: Partial<TripieContainerProps>) => {
  return (
    <li
      className={cx(
        'list-item',
        applyMargin,
        margin,
        `padding-${padding}`,
        `padding-${applyPadding}`,
        gap != 'none' || justifyContent != 'none' || alignItems != 'none' ? 'flex' : '',
        `gap-${gap}`,
        `justify-content-${justifyContent}`,
        `align-items-${alignItems}`,
        className
      )}
    >
      {children}
    </li>
  );
};

export default ListItem;
