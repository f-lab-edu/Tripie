'use client';
import { Container, Icon } from '@tripie-pyotato/design-system';

import SelectedDates from 'app/trip-planner/_components/Duration/SelectedDates';

import useCalendar from 'hooks/useCalendar';
import useServerTime from 'hooks/useServerTime';
import { useMemo } from 'react';
import { LooseValue } from 'react-calendar/dist/esm/shared/types.js';
import Calendar from 'shared/components/Calendar';
import CalendarHeader from 'shared/components/Calendar/CalendarHeader';

import NextButton from 'app/home/_components/our-process/_components/selectedList/shared/NextAnimatedButton';
import 'maplibre-gl/dist/maplibre-gl.css';
import { classNames } from 'wrapper';
import Style from './duration.module.scss';

const cx = classNames.bind(Style);

const Calendars = ({
  duration,
  calendar,
  selected,
}: {
  duration: { start: string; end: string };
  calendar: { days: Date; min: Date; max: Date }[];
  selected: LooseValue;
}) => {
  return (
    <>
      <SelectedDates duration={duration} />
      <Container applyMargin="top">
        <CalendarHeader selectRange={true} allowPartialRange={false} />
        <Container applyMargin="top-bottom">
          {calendar.map(({ days, min, max }) => (
            <Calendar
              minDate={min}
              maxDate={max}
              value={selected}
              key={days.toDateString()}
              allowPartialRange={false}
              showNeighboringMonth={true}
              activeStartDate={days}
              showNavigation={false}
            />
          ))}
        </Container>
      </Container>
    </>
  );
};

const DurationSelect = () => {
  const { calendar } = useCalendar();
  const { today } = useServerTime();

  // 선택한 날들, 오늘과 내일
  const selected = useMemo(() => {
    if (today == null) {
      return null;
    }
    const nextDay = new Date(today);
    nextDay.setDate(today.getDate() + 1);
    return [today, nextDay];
  }, [today]);

  // 여행 기간 시작과 끝
  const duration = useMemo(() => {
    if (selected == null) {
      return null;
    }
    const [startDate, startTime, endDate, endTime] = selected.toLocaleString().split(',');
    return { start: startDate + startTime, end: endDate + endTime };
  }, [selected]);

  if (today == null || duration == null) {
    return (
      <Container margin="none" gap={'sm'} className={cx('loading-wrap')} alignItems="center" justifyContent="center">
        <Icon.Loading />
        Loading...
      </Container>
    );
  }

  return (
    <Container margin="none">
      <Calendars calendar={calendar.slice(0, 1)} duration={duration} selected={selected as LooseValue} />
      <NextButton>
        {duration.start} ~ {duration.end} <Icon />
      </NextButton>
    </Container>
  );
};

export default DurationSelect;
