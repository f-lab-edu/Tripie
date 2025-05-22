// https://mui.com/material-ui/react-drawer/
'use client';

import { classNames, Motion } from '../../../wrappers';

import Style from './drawer.module.scss';

import TripieContainer, { TripieContainerProps } from '@core/layout/TripieContainer';
import Card, { CardProps } from '../../surfaces/Card';
import DrawerButton from './DrawerButton.client';
import { VARIANTS } from './variants';

const cx = classNames.bind(Style);

const drawerDirection = (d: 'top' | 'bottom' | 'right' | 'left') => {
  const dirs = {
    top: { top: 0, left: 0, right: 0 },
    bottom: { bottom: 0, left: 0, right: 0 },
    left: { bottom: 0, left: 0, top: 0 },
    right: { bottom: 0, right: 0, top: 0 },
  };
  return dirs[d];
};

const DrawerContent = ({
  children,
  isOpen,
  initial = true,
  toggleOpen,
  margin = 'none',
  position = 'left',
  className,
  exposePercentage = 100,
  zIndex,
  customDrawer = false,
  sizes = 'full',
  ...args
}: TripieContainerProps & {
  exposePercentage?: number;
  position: 'top' | 'bottom' | 'left' | 'right';
  initial: boolean;
  isOpen?: boolean;
  customDrawer?: boolean;
  sizes?: CardProps['sizes'];
  toggleOpen: (index?: number) => void;
}) => {
  if (exposePercentage > 100 || exposePercentage < 0) {
    throw Error(
      `exposePercentage should be between 0 and 100. exposePercentage value of ${exposePercentage} may cause style breaks!`
    );
  }
  return (
    <Motion.Div
      className={cx(`drawer-content`, `drawer-position-${position}`, className)}
      animate={isOpen ? 'open' : 'closed'}
      variants={VARIANTS['CONTENTS'](position, exposePercentage)}
      style={{
        position: 'absolute',
        ...drawerDirection(position),
        display: 'inline-flex',
        alignItems: 'center',
        flexDirection: position == 'bottom' || position == 'top' ? 'column' : 'row',
      }}
    >
      {position == 'bottom' || position == 'right' ? (
        <DrawerButton toggleOpen={toggleOpen} isOpen={isOpen} position={position} />
      ) : null}

      {!customDrawer ? (
        <Card sizes={sizes} margin="none" className={cx('max')}>
          <Card.Description margin={margin} {...args} className={cx('full')}>
            {children}
          </Card.Description>
        </Card>
      ) : (
        <TripieContainer margin="none">
          <TripieContainer margin={margin} {...args}>
            {children}
          </TripieContainer>
        </TripieContainer>
      )}
      {position == 'left' || position == 'top' ? (
        <DrawerButton toggleOpen={toggleOpen} isOpen={isOpen} position={position} />
      ) : null}
    </Motion.Div>
  );
};

export default DrawerContent;
