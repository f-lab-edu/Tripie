'use client';
import { Container, Headings, Icon, Text } from '@tripie-pyotato/design-system';
import classNames from 'classnames/bind';
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
}

const DurationStep = ({ context, onNext }: Props) => {
  return (
    <>
      <Container margin="none">
        <Headings.H2 className={cx('flex-text')}>
          <Icon.Navigate sizes="large" />
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
