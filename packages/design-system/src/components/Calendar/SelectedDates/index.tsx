'use client';
import { classNames } from '../../.././wrappers';
import AnimatedText from '../../AnimatedText/AnimatedText';
import Headings from '../../Headings/Headings';
import Card from '../../TripieCard/Card.client';
import TripieContainer from '../../TripieContainer/TripieContainer';

import { useMemo } from 'react';
import { LooseValue } from 'wrappers/react-calendar';
import Style from './selected-dates.module.scss';

const cx = classNames.bind(Style);

type SelectedDateProps = { duration: { start: string; end: string } };

const DateSection = ({ date, selected }: { date: keyof SelectedDateProps['duration']; selected: LooseValue }) => {
  /**
   *  여행 시작과 끝 날짜를 memoize한 값
   *  */
  const duration = useMemo(() => {
    const dates = selected?.toLocaleString().split(',');
    if (dates == null) {
      return { start: '', end: '' };
    }
    // 시작과 끝 날짜를 정한 경우
    if (dates.length === 4) {
      const [startDate, startTime, endDate, endTime] = dates;
      return { start: startDate + startTime, end: endDate + endTime };
    } else if (dates.length === 2) {
      const [startDate, startTime] = dates;
      return { start: startDate + startTime, end: '' };
    } else {
      return { start: '', end: '' };
    }
  }, [selected, selected]);

  return (
    <>
      <Headings.H4>{date === 'start' ? '시작' : '끝'}</Headings.H4>
      <TripieContainer margin="sm" applyMargin="top">
        {duration[date] === '' ? (
          <TripieContainer margin="none" className={cx('not-selected')}>
            <AnimatedText.Jump>날짜를 선택해주세요!</AnimatedText.Jump>
          </TripieContainer>
        ) : (
          duration[date]
        )}
      </TripieContainer>
    </>
  );
};

const SelectedDates = ({ selected }: { selected: LooseValue }) => {
  return (
    <TripieContainer margin="none" className={cx('card-wrap')}>
      <Card.Content>
        <DateSection date={'start'} selected={selected} />
      </Card.Content>
      <Card.Content>
        <DateSection date={'end'} selected={selected} />
      </Card.Content>
    </TripieContainer>
  );
};

export default SelectedDates;
