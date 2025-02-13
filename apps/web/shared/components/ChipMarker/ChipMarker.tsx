import classNames from 'classnames/bind';

import Style from './chip-marker.module.scss';

import { Chip } from '@tripie-pyotato/design-system';
import { LocationMarker } from 'models/Geo';

const cx = classNames.bind(Style);

const ChipMarker = ({
  marker,
  popup,
  className,
  selected,
}: {
  className: string;
  marker: LocationMarker;
  popup?: string;
  selected?: boolean;
}) => {
  console.log(popup);
  return (
    <Chip className={cx('marker', className)} selected={selected}>
      {+marker.index.split('-')[1] + 1}
    </Chip>
  );
};

export default ChipMarker;
