import classNames from 'classnames/bind';

import Style from './chip-marker.module.scss';

import { Chip } from '@tripie-pyotato/design-system';
import { LocationMarker } from 'models/Geo';

const cx = classNames.bind(Style);

const ChipMarker = ({ marker, popup, className }: { className: string; marker: LocationMarker; popup: string }) => {
  return (
    <Chip className={cx(className)} selected={marker.index === popup}>
      {+marker.index.split('-')[1] + 1}
    </Chip>
  );
};

export default ChipMarker;
