'use client';
import { Icon } from '@tripie-pyotato/design-system/@components';
import { Container, Headings, Text } from '@tripie-pyotato/design-system/@core';
import { classNames } from 'wrapper';
import Calendar from './Calendar';

import { ContinentKeys } from 'models/Continent';
import Style from './duration.module.scss';

const cx = classNames.bind(Style);

interface Props {
  context: {
    continent: ContinentKeys;
    country: string;
    city: { all: string[]; selected: string[] };
    duration?: string;
    companion?: string;
    preference?: string;
  };
  onNext: (duration: string) => void;
  onPrev: () => void;
}

const DurationStep = ({ context, onNext, onPrev }: Props) => {
  return (
    <>
      <Container applyMargin="top" margin="l" padding="l" applyPadding="top">
        <Headings.H2 className={cx('flex-text')}>
          <Icon.Navigate
            sizes="large"
            onTapStart={() => {
              onPrev();
            }}
          />
          <Container margin="none">
            여행 <Text.Accented>기간</Text.Accented>은?
          </Container>
        </Headings.H2>
      </Container>
      <Calendar onNext={onNext} context={context} />
    </>
  );
};

export default DurationStep;
