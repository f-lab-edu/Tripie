'use client';
import FlickTextButton from '@tripie-pyotato/design-system/@components/FlickTextButton';
import Icon from '@tripie-pyotato/design-system/@components/Icon';
import Container from '@tripie-pyotato/design-system/@core/Container';
import { classNames, InView } from '@tripie-pyotato/design-system/@wrappers';
import { ReactNode } from 'react';
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
            <Icon.Cursor hovered={inView ? 'hover' : ''} className={cx('all-info-cursor')} />
          </Container>
        </Container>
      )}
    </InView>
  );
};

export default NextButton;
