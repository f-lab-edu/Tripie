'use client';

import TripieContainer, { TripieContainerProps } from '@core/layout/TripieContainer';
import { useRef } from 'react';

const ToastBody = ({
  children,
  withBorder = true,
  alignItems = 'center',
  justifyContent = 'center',
  zIndex = 'notification',
  margin = 'l',
  ...args
}: TripieContainerProps) => {
  const toastRef = useRef<HTMLDivElement>(null);

  return (
    <TripieContainer
      tabIndex={0}
      ref={toastRef}
      margin={margin}
      alignItems={alignItems}
      justifyContent={justifyContent}
      zIndex={zIndex}
      {...args}
    >
      {children}
    </TripieContainer>
  );
};

export default ToastBody;
