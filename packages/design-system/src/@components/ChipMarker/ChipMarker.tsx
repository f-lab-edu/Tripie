import { classNames } from '../../wrappers';

import { useMemo } from 'react';
import Chip from '../Chip/Chip';
import Style from './chip-marker.module.scss';

const cx = classNames.bind(Style);

const ChipMarker = ({ className, children, selected }: { className: string; children: string; selected?: boolean }) => {
  const marker = useMemo(() => {
    return +children.split('-')[1] + 1;
  }, [children]);
  return (
    <Chip className={cx('marker', className)} selected={selected}>
      {marker}
    </Chip>
  );
};

export default ChipMarker;
