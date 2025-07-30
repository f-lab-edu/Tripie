'use client';
import FlickTextButton from '@tripie-pyotato/design-system/@components/FlickTextButton';
import Container from '@tripie-pyotato/design-system/@core/Container';
import { classNames, InView } from '@tripie-pyotato/design-system/@wrappers';
import { ReactNode } from 'react';
import TripieIcon from 'shared/components/TripieIcon/TripieIcon';
import Style from './next-animated-button.module.scss';

const cx = classNames.bind(Style);

const NextButton = ({ children }: { children: ReactNode }) => {
  return (
    <InView>
      {({ inView, ref }) => (
        <Container ref={ref} margin="none" className={cx('next-button-wrap')}>
          <FlickTextButton
            withBorder={true}
            animate={inView ? 'hover' : 'rest'}
            className={cx('submit-button')}
            sizes="large"
          >
            <span className={cx('flex-text')}>{children}</span>
          </FlickTextButton>
          <Container margin="none">
            <TripieIcon variant="cursor" hovered={inView ? 'hover' : ''} className={cx('all-info-cursor')} />
          </Container>
        </Container>
      )}
    </InView>
  );
};

export default NextButton;
