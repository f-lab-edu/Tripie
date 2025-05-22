// https://mui.com/material-ui/react-drawer/
'use client';

import { classNames } from '../../../wrappers';

import Style from './drawer.module.scss';

import TripieContainer, { TripieContainerProps } from '@core/layout/TripieContainer';

const cx = classNames.bind(Style);

const DrawerBody = ({
  children,
  className,
  zIndex = 'base',
  content,
  margin = 'none',
  padding = 'none',
  ...props
}: TripieContainerProps) => {
  return (
    <TripieContainer zIndex={zIndex} className={cx('drawer', className)} margin={margin} padding={padding} {...props}>
      {children}
    </TripieContainer>
  );
};

export default DrawerBody;
