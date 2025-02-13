'use client';
import { Card, Headings, Text, TripieContainer } from '@tripie-pyotato/design-system';
import classNames from 'classnames/bind';

import Style from './selected-dates.module.scss';

const cx = classNames.bind(Style);

type SelectedDateProps = { duration: { start: string; end: string } };

const DateSection = ({
  date,
  duration,
}: {
  date: keyof SelectedDateProps['duration'];
  duration: SelectedDateProps['duration'];
}) => {
  return (
    <TripieContainer margin="none">
      <Headings.H2>{date === 'start' ? '시작' : '끝'}</Headings.H2>
      <TripieContainer margin="sm" applyMargin="top">
        {duration[date] === '' ? (
          <TripieContainer margin="none" className={cx('not-selected')}>
            <Text.Jump>날짜를 선택해주세요!</Text.Jump>
          </TripieContainer>
        ) : (
          duration[date]
        )}
      </TripieContainer>
    </TripieContainer>
  );
};

const SelectedDates = ({ duration }: SelectedDateProps) => {
  return (
    <Card className={cx('start-end-card')}>
      <DateSection date={'start'} duration={duration} />
      <DateSection date={'end'} duration={duration} />
    </Card>
  );
};

export default SelectedDates;
