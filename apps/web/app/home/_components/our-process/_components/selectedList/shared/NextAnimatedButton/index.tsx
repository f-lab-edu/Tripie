'use client';
import { AnimatedButton, Container, Icon } from '@tripie-pyotato/design-system';
import classNames from 'classnames/bind';
import { ReactNode } from 'react';
import { InView } from 'react-intersection-observer';
import Style from './next-animated-button.module.scss';

const cx = classNames.bind(Style);

const NextButton = ({ children }: { children: ReactNode }) => {
  return (
    <InView>
      {({ inView, ref }) => (
        <Container ref={ref} margin="none" className={cx('next-button-wrap')}>
          <AnimatedButton withBorder={true} animate={inView ? 'hover' : 'rest'} className={cx('submit-button')}>
            <Container margin="none" className={cx('flex')}>
              {children}
            </Container>
          </AnimatedButton>
          <Container margin="none">
            <Icon.Cursor hovered={inView ? 'hover' : ''} className={cx('all-info-cursor')} />
          </Container>
        </Container>
      )}
    </InView>
  );
};

export default NextButton;
