'use client';
import 'react-calendar/dist/Calendar.css';
import { LooseValue } from 'wrappers/react-calendar';

import TripieContainer from '@core/layout/TripieContainer';
import { yearlyCalendar } from '@tripie-pyotato/utils/@date';
import { useMemo } from 'react';

import { classNames } from 'shared';
import Style from './calendar.module.scss';
import CalendarBody, { CustomCalendarProps } from './CalendarBody.client';
import CalendarHeader from './CalendarHeader.client';
import SelectedDates from './SelectedDates.client';

const cx = classNames.bind(Style);

const Calendar = ({
  calendar,
  scrollOverFlow = true,
  displaySelectedDates = true,
  selected = [null, null],
  onChange,
  onClickDay,
  selectRange = true,
  allowPartialRange = false,
  showNavigation = false,
  showNeighboringMonth = true,
}: Partial<CustomCalendarProps> & {
  calendar?: {
    days: Date;
    max: Date;
    min: Date;
  }[];
  displaySelectedDates?: boolean;
  scrollOverFlow?: boolean;
  selected?: LooseValue;
}) => {
  const yearlyCalendarFromToday = useMemo(() => calendar ?? yearlyCalendar(), [calendar]);
  return (
    <>
      {!displaySelectedDates ? null : <SelectedDates selected={selected} />}
      <TripieContainer margin="none" className={cx(scrollOverFlow ? 'calendar-wrap' : '')}>
        <CalendarHeader selectRange={true} allowPartialRange={false} />
        <TripieContainer margin="none">
          {yearlyCalendarFromToday.map(({ days, min, max }, index) => (
            <CalendarBody
              minDate={min}
              maxDate={max}
              value={selected}
              onChange={onChange}
              onClickDay={onClickDay}
              selectRange={selectRange}
              key={days.toDateString() + index}
              allowPartialRange={allowPartialRange}
              showNeighboringMonth={showNeighboringMonth}
              activeStartDate={days}
              showNavigation={showNavigation}
            />
          ))}
        </TripieContainer>
      </TripieContainer>
    </>
  );
};

export default Calendar;
