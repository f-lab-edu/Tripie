import { Container, Headings } from '@tripie-pyotato/design-system';
import { Value, ValuePiece } from 'app/trip-planner/_components/Duration/Calendar';
import { differenceInCalendarDays } from 'date-fns';
import { RefAttributes, useCallback, useMemo } from 'react';
import { CalendarProps, Calendar as ReactCalendar } from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './calendar-custom.scss';
// https://github.com/wojtekmaj/react-calendar/wiki/Recipes#selectively-style-tiles 참고
function isSameDay(a: Date, b: Date): number {
  return differenceInCalendarDays(a, b);
}

type CustomCalendarProps = CalendarProps & RefAttributes<unknown>;

const Calendar = ({
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
}: CustomCalendarProps) => {
  const selectedRange = useMemo(() => {
    const range = (Array.isArray(value) ? value.map(item => item) : [value]) as Value;
    return range;
  }, [value]);

  /**
   * range을 선택할 시 해당 영역들 모두 스타일을 적용하기 위해 className을 추가해주는 useCallback
   */
  const addSelectedTileClassName = useCallback(({ date, value }: { date: Date; value: Value }) => {
    // range가 두 시간대에 걸쳐 있는 경우
    if (Array.isArray(value) && value.length === 2) {
      const [start, end] = value.map(dDate => isSameDay(dDate, date));
      //   시작일
      if (start === 0) {
        return 'start-date';
      }
      // 끝 일
      if (end === 0) {
        return 'end-date';
      }
      // 시작과 끝 날짜 사이의 tile들
      if (Math.abs(start + end) <= Math.abs(isSameDay(...value))) {
        return 'in-range';
      }
      //  당일치기
    } else {
      const singleDay = value as ValuePiece[];
      if (isSameDay(singleDay[0], date) === 0) {
        return 'start-date end-date';
      }
    }
  }, []);

  const month = useMemo(() => {
    return activeStartDate?.toDateString().split(' ')[1];
  }, [activeStartDate]);

  return (
    <>
      <Container applyMargin="left" margin="m">
        <Headings.H2>{month}</Headings.H2>
      </Container>

      <ReactCalendar
        minDate={minDate}
        maxDate={maxDate}
        value={value}
        onChange={onChange}
        onClickDay={onClickDay}
        selectRange={selectRange}
        showNeighboringMonth={showNeighboringMonth}
        allowPartialRange={allowPartialRange}
        className={`calendar-body ${className}`}
        activeStartDate={activeStartDate}
        showNavigation={showNavigation}
        tileClassName={({ date }) => addSelectedTileClassName({ date, value: selectedRange })}
      />
    </>
  );
};

export default Calendar;
