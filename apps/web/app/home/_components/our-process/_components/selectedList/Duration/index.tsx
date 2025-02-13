'use client';
import { TextFillAnimation, TripieContainer } from '@tripie-pyotato/design-system';

import SelectedDates from 'app/trip-planner/_components/Duration/SelectedDates';
import RESOURCE from 'constants/resources';
import useCalendar from 'hooks/useCalendar';
import useServerTime from 'hooks/useServerTime';
import { useMemo } from 'react';
import { LooseValue } from 'react-calendar/dist/esm/shared/types.js';
import Calendar from 'shared/components/Calendar';
import CalendarHeader from 'shared/components/Calendar/CalendarHeader';
import Icon from 'shared/components/Icon/Icon';

import classNames from 'classnames/bind';
import 'maplibre-gl/dist/maplibre-gl.css';
import NextButton from 'shared/components/Button/Animated';
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
      <TripieContainer applyMargin="top">
        <CalendarHeader selectRange={true} allowPartialRange={false} />
        <TripieContainer applyMargin="top-bottom">
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
        </TripieContainer>
      </TripieContainer>
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
    console.log(today);
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
      <TripieContainer margin="none" className={cx('loading-wrap')}>
        <TripieContainer margin="none" className={cx('text-wrap')}>
          <Icon.Loading />
          <TextFillAnimation.Title>Loading..</TextFillAnimation.Title>
        </TripieContainer>
      </TripieContainer>
    );
  }

  return (
    <TripieContainer margin="none">
      <TripieContainer margin="none">
        <Calendars calendar={calendar.slice(0, 1)} duration={duration} selected={selected as LooseValue} />
      </TripieContainer>
      <NextButton>
        {duration.start} ~ {duration.end} <Icon src={RESOURCE.ARROW} />
      </NextButton>
    </TripieContainer>
  );
};

export default DurationSelect;
