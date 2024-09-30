import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import { Calendar as ReactCalendar } from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Style from './calendar.module.scss';

const cx = classNames.bind(Style);

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

const yearlyCalendar = () => {
  const today = new Date();
  let thisYear = today.getFullYear();
  let thisMonth = today.getMonth();
  let thisDay = today.getDate();
  return Array.from({ length: 13 }, (_, index) => {
    return {
      isInRange: false,
      max: new Date(thisYear + 1, thisMonth, thisDay),
      min: new Date(thisYear, thisMonth, thisDay),
      days: new Date(thisMonth + index >= 12 ? thisYear + 1 : thisYear, (thisMonth + index) % 12, thisDay),
    };
  });
};

const Calendars = () => {
  const [calendar, setCalendar] = useState(() => yearlyCalendar());
  const [selected, setSelected] = useState<Value>(() => new Date());

  const handleChange = e => {
    console.log(e, selected);
    if (e.some(v => v == null)) {
      const filtered = e.filter(item => item != null);
      setSelected(filtered[0]);
    } else if (Array.isArray(selected) && (selected.some(v => v == null) || e.some(v => v == null))) {
      const sorted = [...selected, ...e]
        .filter(item => item != null)
        .map(item => Date.parse(item))
        .sort((a, b) => a - b)
        .map(item => new Date(item)) as Value;
      setSelected(sorted);
    } else {
      setSelected(e);
    }
  };

  useEffect(() => {
    console.log('useEffect', selected);
  }, [selected]);

  return calendar.map(({ days, min, max, isInRange }) => (
    <div key={days.toDateString()}>
      {days.toDateString().split(' ')[1]}
      <ReactCalendar
        minDate={min}
        maxDate={max}
        value={selected}
        onChange={handleChange}
        selectRange={true}
        key={days.toDateString()}
        allowPartialRange={true}
        className={cx('calendar-body', isInRange ? 'selected' : null)}
        activeStartDate={days}
        showNeighboringMonth={false}
        showNavigation={false}
      />
    </div>
  ));
};

export default Calendars;
