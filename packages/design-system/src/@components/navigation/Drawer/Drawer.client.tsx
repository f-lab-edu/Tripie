'use client';
// https://mui.com/material-ui/react-drawer/

import { ReactNode, useMemo } from 'react';
import { classNames } from '../../../wrappers';

import Style from './drawer.module.scss';

import { Container } from '@core';
import { TripieContainerProps } from '@core/layout/TripieContainer';
import { CardProps } from '../../surfaces/Card';
import DrawerBody from './DrawerBody.client';
import DrawerContent from './DrawerContent.client';

const cx = classNames.bind(Style);

const Drawer = ({
  drawerContent = {
    zIndex: 'modal',
    children: null,
    position: 'left',
    margin: 'none',
    sizes: 'full',
    exposePercentage: 100,
    customDrawer: false,
    className: '',
  },
  drawerBody = {
    filter: 0,
    className: '',
    children: null,
    zIndex: 'base',
  },
  initial = true,
  isOpen,
  toggleOpen,
  closeOutFocusedDrawer = true,
  ...props
}: Partial<TripieContainerProps> & {
  drawerBody: {
    filter?: number; // overlay blur over content under the drawer
    className?: string;
    children?: ReactNode;
    zIndex: TripieContainerProps['zIndex'];
  };
  drawerContent: Partial<TripieContainerProps> & {
    className?: string;
    children?: ReactNode;
    zIndex?: TripieContainerProps['zIndex'];
    sizes?: CardProps['sizes'];
    position: 'top' | 'bottom' | 'left' | 'right';
    exposePercentage?: number;
    customDrawer?: boolean;
  };
  initial?: boolean;
  isOpen?: boolean;
  closeOutFocusedDrawer?: boolean; // on focusing drawer body, close drawer content
  toggleOpen: (index?: number) => void;
}) => {
  const filter = useMemo(() => {
    if (drawerBody?.filter == null) {
      return 0;
    } else return drawerBody.filter;
  }, [drawerBody]);

  return (
    <Container margin="none" {...props} className={cx('full', 'max')}>
      <DrawerBody
        onFocus={() => {
          if ((filter > 0 || closeOutFocusedDrawer) && isOpen) {
            toggleOpen();
          }
        }}
        className={drawerBody.className}
        zIndex={filter == 0 ? drawerBody.zIndex : 'hide'}
      >
        {drawerBody.children}
      </DrawerBody>
      {isOpen && filter != 0 ? (
        <Container
          zIndex="base"
          margin="none"
          padding="none"
          className={cx(`backdrop-filter-${filter}`, 'drawer-backdrop', 'full', 'max')}
        ></Container>
      ) : null}
      <DrawerContent
        {...drawerContent}
        exposePercentage={drawerContent.exposePercentage}
        isOpen={isOpen}
        initial={initial}
        toggleOpen={toggleOpen}
        margin={'none'}
        position={drawerContent.position}
        zIndex={drawerContent.zIndex}
        customDrawer={false}
        sizes={drawerContent.sizes}
      >
        {drawerContent.children}
      </DrawerContent>
    </Container>
  );
};

Drawer.Body = DrawerBody;
Drawer.Content = DrawerContent;

export default Drawer;
