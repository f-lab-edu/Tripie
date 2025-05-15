'use client';
import AnimatedText from '../../data-display/AnimatedText/AnimatedText';

import { useMemo } from 'react';
import { LooseValue } from 'wrappers/react-calendar';
import Text from '../../../@core/data-display/Text';
import Stack from '../../../@core/layout/Stack';
import TripieContainer from '../../../@core/layout/TripieContainer';
import Card from '../../surfaces/Card';

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
      <Text size={'h4'} bold={true}>
        {date === 'start' ? '시작' : '끝'}
      </Text>
      <TripieContainer margin="sm" applyMargin="top">
        {duration[date] === '' ? (
          <Text.Accented>
            <AnimatedText.Jump>날짜를 선택해주세요!</AnimatedText.Jump>
          </Text.Accented>
        ) : (
          <Text size="text">{duration[date]}</Text>
        )}
      </TripieContainer>
    </>
  );
};

const SelectedDates = ({ selected }: { selected: LooseValue }) => {
  return (
    <Stack margin="none" gap="default" alignItems="stretch">
      <Card.Description padding="m">
        <DateSection date={'start'} selected={selected} />
      </Card.Description>
      <Card.Description padding="m">
        <DateSection date={'end'} selected={selected} />
      </Card.Description>
    </Stack>
  );
};

export default SelectedDates;
