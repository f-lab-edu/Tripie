'use client';
import { AnimatedButton, Container, Icon } from '@tripie-pyotato/design-system';

import classNames from 'classnames/bind';

import { ContinentKeys } from 'models/Continent';
import { useCallback, useMemo, useState } from 'react';

import useCalendar from 'hooks/useCalendar';
import { LooseValue } from 'react-calendar/dist/esm/shared/types.js';
import Calendar from 'shared/components/Calendar';
import CalendarHeader from 'shared/components/Calendar/CalendarHeader';
// import Icon from 'shared/components/Icon/Icon';
import { localeString2Date } from 'utils/date';
import SelectedDates from '../SelectedDates';
import Style from './calendar.module.scss';

const cx = classNames.bind(Style);

export type ValuePiece = Date;

export type Value = ValuePiece | [ValuePiece, ValuePiece];

const Calendars = ({
  onNext,
  context,
}: {
  onNext: (duration: string) => void;
  context?: {
    continent: ContinentKeys;
    country: string;
    city: { all: string[]; selected: string[] };
    duration?: string;
    companion?: string;
  };
}) => {
  const { calendarFormatTime, calendar, isValidTime } = useCalendar(context?.duration?.split(' ~ ')[0]);

  const [selected, setSelected] = useState<Date[] | Date>(() =>
    context?.duration == null || !isValidTime ? calendarFormatTime : localeString2Date(context.duration.split(' ~ '))
  );

  /**
   *  여행 시작과 끝 날짜를 memoize한 값
   *  */
  const duration = useMemo(() => {
    const dates = selected?.toLocaleString().split(',');
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
  }, [selected, context, selected]);

  const handleSubmit = useCallback(() => {
    if (duration.end === '' || duration.start === '') {
      return;
    } else {
      onNext(`${duration.start} ~ ${duration.end}`);
    }
  }, [duration]);

  return (
    <>
      <SelectedDates duration={duration} />
      <Container margin="none">
        <CalendarHeader selectRange={true} allowPartialRange={false} />
        <Container applyMargin="top-bottom" className={cx('calendar-wrap')}>
          {calendar.map(({ days, min, max }, index) => (
            <Calendar
              minDate={min}
              maxDate={max}
              value={selected as LooseValue}
              onChange={value => {
                setSelected((Array.isArray(value) ? value : [value]) as Date[]);
              }}
              onClickDay={setSelected}
              selectRange={true}
              key={days.toDateString() + index}
              allowPartialRange={false}
              showNeighboringMonth={true}
              activeStartDate={days}
              showNavigation={false}
            />
          ))}
        </Container>
      </Container>
      <Container margin="none">
        <AnimatedButton
          withBorder={true}
          disabled={duration.end === ''}
          onClick={handleSubmit}
          className={cx('submit-button', duration.end !== '' && 'long-text')}
        >
          <Container margin="none" className={cx('flex')}>
            {duration.end === '' ? (
              '여행의 시작과 끝나는 날짜를 선택해주세요.'
            ) : (
              <>
                {duration.start} ~ {duration.end} <Icon />
              </>
            )}
          </Container>
        </AnimatedButton>
      </Container>
    </>
  );
};

export default Calendars;
