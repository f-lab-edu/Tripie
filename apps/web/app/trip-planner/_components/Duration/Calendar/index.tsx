import { Container } from '@tripie-pyotato/design-system';
import classNames from 'classnames/bind';
import { LOCAL } from 'constants/local';
import ROUTES from 'constants/routes';
import { useCallback, useMemo, useState } from 'react';
import AnimatedButton from 'shared/components/Button/AnimatedButton';
import Calendar from 'shared/components/Calendar';
import CalendarHeader from 'shared/components/Calendar/CalendarHeader';
import Icon from 'shared/components/Icon/Icon';
import SelectedDates from '../SelectedDates';
import Style from './calendar.module.scss';

const cx = classNames.bind(Style);

export type ValuePiece = Date;

export type Value = ValuePiece | [ValuePiece, ValuePiece];

const yearlyCalendar = () => {
  const today = new Date();
  let thisYear = today.getFullYear();
  let thisMonth = today.getMonth();
  let thisDay = today.getDate();
  return Array.from({ length: 13 }, (_, index) => {
    return {
      max: new Date(thisYear + 1, thisMonth, thisDay),
      min: new Date(thisYear, thisMonth, thisDay),
      days: new Date(thisMonth + index >= 12 ? thisYear + 1 : thisYear, (thisMonth + index) % 12, thisDay),
    };
  });
};

const Calendars = ({ onNext }: { onNext: (duration: string) => void }) => {
  const [calendar, _] = useState(() => yearlyCalendar());
  const [selected, setSelected] = useState<Value>(() => new Date());

  /**
   *  여행 시작과 끝 날짜를 memoize한 값
   *  */
  const duration = useMemo(() => {
    const dates = selected?.toLocaleString(LOCAL.KR).split(',');
    // 시작과 끝 날짜를 정한 경우
    if (dates.length === 2) {
      const [start, end] = dates;
      return { start, end };
    } else {
      return { start: dates[0], end: '' };
    }
  }, [selected]);

  const handleSubmit = useCallback(() => {
    if (duration.end === '') {
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
          {calendar.map(({ days, min, max }) => (
            <Calendar
              minDate={min}
              maxDate={max}
              value={selected}
              onChange={value => setSelected((Array.isArray(value) ? value : [value]) as Value)}
              onClickDay={setSelected}
              selectRange={true}
              key={days.toDateString()}
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
                {duration.start} ~ {duration.end} <Icon src={ROUTES.RESOURCE.ARROW['src']} />
              </>
            )}
          </Container>
        </AnimatedButton>
      </Container>
    </>
  );
};

export default Calendars;
