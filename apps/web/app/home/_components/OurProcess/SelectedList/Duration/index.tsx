'use client';

import AnimatedText from '@tripie-pyotato/design-system/@components/AnimatedText';
import Calendar from '@tripie-pyotato/design-system/@components/Calendar';
import Container from '@tripie-pyotato/design-system/@core/Container';
import Stack from '@tripie-pyotato/design-system/@core/Stack';
import { useCalendar } from '@tripie-pyotato/design-system/@hooks';
// import { classNames } from '@tripie-pyotato/design-system/@wrappers';
import NextButton from 'app/home/_components/OurProcess/SelectedList/shared/NextAnimatedButton';
import useServerTime from 'hooks/useServerTime';
import { useMemo } from 'react';
import TripieIcon from 'shared/components/TripieIcon/TripieIcon';
import { classNames } from '../../../../../../wrapper/classNames';
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
      <Container
        display="inline-flex"
        className={cx('loading-wrap')}
        margin="none"
        alignItems="center"
        gap="sm"
        justifyContent="center"
        fillAvailable={false}
      >
        <Stack
          display="inline-flex"
          margin="none"
          alignItems="center"
          gap="sm"
          justifyContent="center"
          fillAvailable={false}
        >
          <TripieIcon variant="loading" />
          <AnimatedText.Jump>Loading...</AnimatedText.Jump>
        </Stack>
      </Container>
    );
  }

  return (
    <>
      <Container applyMargin="top-bottom">
        <Calendar calendar={calendar.slice(0, 1)} selected={selected} />
      </Container>
      <NextButton>
        다음&nbsp;
        <TripieIcon />
      </NextButton>
    </>
  );
};

export default DurationSelect;
