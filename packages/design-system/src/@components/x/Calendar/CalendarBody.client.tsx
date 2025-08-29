'use client';
import { differenceInCalendarDays } from 'date-fns';
import { RefAttributes, useCallback, useMemo } from 'react';
import { CalendarProps, ReactCalendar } from '../../../wrappers';

import { Headings } from '@core';
import TripieContainer from '@core/layout/TripieContainer';

import { classNames } from 'shared';
import Style from './calendar-body.module.scss';
const cx = classNames.bind(Style);

export type ValuePiece = Date | null;

// https://github.com/wojtekmaj/react-calendar/wiki/Recipes#selectively-style-tiles 참고
// function isSameDay(a: ValuePiece, b: ValuePiece): null | number {
//   if (a == null || b == null) {
//     return null;
//   }
//   return differenceInCalendarDays(a, b);
// }

export type CustomCalendarProps = CalendarProps & RefAttributes<unknown>;

const CalendarBody = ({
  minDate,
  maxDate,
  value,
  onChange,
  onClickDay,
  selectRange,
  allowPartialRange,
  className = '',
  activeStartDate,
  showNavigation,
  showNeighboringMonth,
  tileContent,
}: CustomCalendarProps) => {
  const selectedRange = useCallback(
    ({ date }: { date: Date }) => {
      // range 선택
      if (Array.isArray(value)) {
        if (value.length === 2) {
          const [start, end] = value;

          if (start != null && end != null) {
            const isSingleDayTrip = differenceInCalendarDays(start, end) === 0;
            const selectedStartDate = differenceInCalendarDays(date, start) === 0;
            const selectedStartEnd = differenceInCalendarDays(date, end) === 0;
            const inSelectedRange =
              date >= start &&
              date <= end &&
              (differenceInCalendarDays(start, date) >= 0 || differenceInCalendarDays(date, end) <= 0);
            return `${isSingleDayTrip ? '' : 'more-than-'}one-day-trip${selectedStartEnd ? ' selected-end' : ''}${selectedStartDate ? ' selected-start' : ''}${inSelectedRange ? ' in-selected-range' : ''}`;
          }
        }
      }

      return '';
    },
    [value]
  );

  /**
   * range을 선택할 시 해당 영역들 모두 스타일을 적용하기 위해 className을 추가해주는 useCallback
   */

  // const addSelectedTileClassName = useCallback(
  //   ({ date, value }: { date: Date; value: Value }) => {
  //     console.log('addSelectedTileClassName', value);

  //     if (value == null || !Array.isArray(value)) {
  //       return 'start-date end-date';
  //     }

  //     // range가 두 시간대에 걸쳐 있는 경우
  //     if (Array.isArray(value) && value.length === 2) {
  //       const [start, end] = value.map(dDate => isSameDay(dDate, date));

  //       if (start == null || end == null) {
  //         return '';
  //       }

  //       //   시작일
  //       if (start === 0) {
  //         return 'start-date';
  //       }
  //       // 끝 일
  //       else if (end === 0) {
  //         return 'end-date';
  //       }
  //       // 시작과 끝 날짜 사이의 tile들
  //       else if (Math.abs(start + end) <= Math.abs(isSameDay(...value) as number)) {
  //         return 'in-range';
  //       } else {
  //         //  당일치기
  //         const singleDay = value as ValuePiece[];
  //         if (isSameDay(singleDay[0], date) <= 1) {
  //           return 'start-date end-date';
  //         }
  //       }
  //     }
  //     return '';
  //   },
  //   [selectRange]
  // );

  const month = useMemo(() => {
    return activeStartDate?.toDateString().split(' ')[1];
  }, [activeStartDate]);

  return (
    <TripieContainer margin="none" padding={'none'} className={cx('calendar-body-wrap')}>
      <TripieContainer applyMargin="left" margin="m">
        <Headings.H2>{month}</Headings.H2>
      </TripieContainer>
      <ReactCalendar
        minDate={minDate}
        maxDate={maxDate}
        value={value}
        onChange={onChange}
        onClickDay={onClickDay}
        selectRange={selectRange}
        showNeighboringMonth={showNeighboringMonth}
        allowPartialRange={allowPartialRange}
        className={cx(className)}
        activeStartDate={activeStartDate}
        showNavigation={showNavigation}
        // tileClassName={({ date }) => addSelectedTileClassName({ date, value: selectedRange })}
        tileClassName={({ date }) => selectedRange({ date })}
        tileContent={tileContent}
      />
    </TripieContainer>
  );
};

export default CalendarBody;
