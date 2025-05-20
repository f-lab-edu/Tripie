'use client';

import { ReactNode } from 'react';
import { classNames, Motion } from '../../../wrappers';

import Style from './drawer.module.scss';

import { Container } from '@core';
import TripieContainer, { TripieContainerProps } from '@core/layout/TripieContainer';
import { COLORS } from 'shared';
import Card, { CardProps } from '../../surfaces/Card';
import { VARIANTS } from './variants';

const cx = classNames.bind(Style);

const btn = (d: 'top' | 'bottom' | 'right' | 'left', isOpen?: boolean) => {
  const direction = {
    right: { open: '>', closed: '<' },
    top: { open: '^', closed: 'ｖ' },
  };

  if (d === 'left') {
    return direction['right'][!isOpen ? 'open' : 'closed'];
  } else if (d === 'bottom') {
    return direction['top'][!isOpen ? 'open' : 'closed'];
  } else return direction[d][isOpen ? 'open' : 'closed'];
};

const drawerDirection = (d: 'top' | 'bottom' | 'right' | 'left') => {
  const dirs = {
    top: { top: 0, left: 0, right: 0 },
    bottom: { bottom: 0, left: 0, right: 0 },
    left: { bottom: 0, left: 0, top: 0 },
    right: { bottom: 0, right: 0, top: 0 },
  };
  return dirs[d];
};

const borderRadius = {
  top: `0px 0px 1rem 1rem`,
  bottom: `1rem 1rem 0px 0px`,
  left: `0px 1rem 1rem 0px`,
  right: `1rem 0px 0px 1rem`,
};

const DrawerButton = ({
  toggleOpen,
  isOpen,
  position,
}: {
  isOpen?: boolean;
  toggleOpen: (index?: number) => void;
  position: 'top' | 'bottom' | 'left' | 'right';
}) => {
  return (
    <Motion.Button
      className={cx(`drawer-toggle-btn`)}
      onTouchStart={() => toggleOpen()}
      onClick={() => toggleOpen()}
      aria-label={`${isOpen ? 'close' : 'open'} panel`}
      variants={VARIANTS['BUTTON'](position)}
      style={{ border: `1px solid ${!isOpen ? COLORS[50] : COLORS[30]}`, borderRadius: borderRadius[position] }}
    >
      {btn(position, isOpen)}
    </Motion.Button>
  );
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
  withBorder = false,
  sizes = 'full',
  ...args
}: TripieContainerProps & {
  exposePercentage?: number;
  position: 'top' | 'bottom' | 'left' | 'right';
  initial: boolean;
  isOpen?: boolean;
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

      {withBorder ? (
        <Card sizes={sizes} margin="none" {...args}>
          <Card.Description margin="none" className={cx('full')}>
            {children}
          </Card.Description>
        </Card>
      ) : (
        <TripieContainer margin="none" {...args} withBorder={withBorder}>
          <TripieContainer margin="none">{children}</TripieContainer>
        </TripieContainer>
      )}
      {position == 'left' || position == 'top' ? (
        <DrawerButton toggleOpen={toggleOpen} isOpen={isOpen} position={position} />
      ) : null}
    </Motion.Div>
  );
};

const DrawerBody = ({ children, className, zIndex = 'base', content, ...props }: TripieContainerProps) => {
  return (
    <TripieContainer zIndex={zIndex} className={cx('drawer', className)} {...props}>
      {children}
    </TripieContainer>
  );
};

const Drawer = ({
  children,
  className,
  contentZIndex = 'modal',
  bodyZIndex = 'base',
  initial = true,
  content,
  position = 'left',
  margin = 'none',
  body,
  ...props
}: TripieContainerProps & {
  contentZIndex?: TripieContainerProps['zIndex'];
  bodyZIndex?: TripieContainerProps['zIndex'];
  initial?: boolean;
  position?: 'top' | 'bottom' | 'left' | 'right';
  content?: ReactNode;
  body?: ReactNode;
}) => {
  return (
    <Container margin={margin} zIndex={bodyZIndex} className={cx('drawer', className)} {...props}>
      {children}
    </Container>
  );
};

Drawer.Body = DrawerBody;
Drawer.Content = DrawerContent;

export default Drawer;
