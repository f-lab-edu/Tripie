'use client';

import { Calendar, Container, Icon, Text } from '@tripie-pyotato/design-system/@components';
import { useCalendar } from '@tripie-pyotato/design-system/@hooks';

import useServerTime from 'hooks/useServerTime';

import NextButton from 'app/home/_components/our-process/_components/selectedList/shared/NextAnimatedButton';
import { useMemo } from 'react';
import { classNames } from 'wrapper';
import Style from './duration.module.scss';

const cx = classNames.bind(Style);

const DurationSelect = () => {
  const { today, serverTime, isValidTime } = useServerTime();
  const { calendar } = useCalendar({
    serverTime,
    isValidTime,
  });

  // 선택한 날들, 오늘과 내일
  const selected = useMemo(() => {
    if (today == null) {
      return null;
    }
    const nextDay = new Date(today);
    nextDay.setDate(today.getDate() + 1);
    return [today, nextDay];
  }, [today]);

  if (today == null || selected == null) {
    return (
      <Container className={cx('loading-wrap')} margin="none" alignItems="center" justifyContent="center">
        <Container margin="none" gap={'sm'} className={cx('text-wrap')} alignItems="center" justifyContent="center">
          <Icon.Loading />
          <Text.Jump>Loading...</Text.Jump>
        </Container>
      </Container>
    );
  }

  return (
    <>
      <Container applyMargin="top-bottom">
        <Calendar calendar={calendar.slice(0, 1)} selected={selected} />
      </Container>
      <NextButton>
        {`${selected[0].toLocaleString()}`} ~ {`${selected[1].toLocaleString()}`} <Icon />
      </NextButton>
    </>
  );
};

export default DurationSelect;
