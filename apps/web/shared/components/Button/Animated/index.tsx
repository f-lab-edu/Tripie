'use client';
import { AnimatedButton, TripieContainer } from '@tripie-pyotato/design-system';
import classNames from 'classnames/bind';
import { ReactNode } from 'react';
import { InView } from 'react-intersection-observer';
import Icon from '../../Icon/Icon';
import Style from './animated-button.module.scss';

const cx = classNames.bind(Style);

const NextButton = ({ children }: { children: ReactNode }) => {
  return (
    <InView>
      {({ inView, ref }) => (
        <TripieContainer ref={ref} margin="none" className={cx('next-button-wrap')}>
          <AnimatedButton withBorder={true} animate={inView ? 'hover' : 'rest'} className={cx('submit-button')}>
            <TripieContainer margin="none" className={cx('flex')}>
              {children}
            </TripieContainer>
          </AnimatedButton>
          <TripieContainer margin="none">
            <Icon.Cursor hovered={inView ? 'hover' : ''} className={cx('all-info-cursor')} />
          </TripieContainer>
        </TripieContainer>
      )}
    </InView>
  );
};

export default NextButton;
