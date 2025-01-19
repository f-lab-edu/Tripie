'use client';
import { Container } from '@tripie-pyotato/design-system';

import SelectedDates from 'app/trip-planner/_components/Duration/SelectedDates';
import RESOURCE from 'constants/resources';
import useCalendar from 'hooks/useCalendar';
import useServerTime from 'hooks/useServerTime';
import { useMemo } from 'react';
import { LooseValue } from 'react-calendar/dist/esm/shared/types.js';
import AnimatedButton from 'shared/components/Button/AnimatedButton';
import Calendar from 'shared/components/Calendar';
import CalendarHeader from 'shared/components/Calendar/CalendarHeader';
import Icon from 'shared/components/Icon/Icon';

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
  const { date } = useServerTime();

  const selected = useMemo(() => {
    let today = new Date();
    if (date) {
      today = new Date(date);
    }
    const nextDay = new Date(today);
    nextDay.setDate(today.getDate() + 1);

    return [today, nextDay];
  }, [calendar, date]);

  const duration = useMemo(() => {
    const [startDate, startTime, endDate, endTime] = selected?.toLocaleString().split(',');
    return { start: startDate + startTime, end: endDate + endTime };
  }, [selected]);

  return (
    <Container margin="none">
      <Container margin="none">
        <Calendars calendar={calendar.slice(0, 1)} duration={duration} selected={selected as LooseValue} />
      </Container>
      <AnimatedButton.Next>
        {duration.start} ~ {duration.end} <Icon src={RESOURCE.ARROW} />
      </AnimatedButton.Next>
    </Container>
  );
};

export default DurationSelect;
