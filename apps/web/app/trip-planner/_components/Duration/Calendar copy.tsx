// import classNames from 'classnames/bind';
// import { Dispatch, SetStateAction, useEffect, useState } from 'react';
// import { Calendar as ReactCalendar } from 'react-calendar';
// import 'react-calendar/dist/Calendar.css';
// import Style from './calendar.module.scss';

// const cx = classNames.bind(Style);

// type ValuePiece = Date | null;

// type Value = ValuePiece | [ValuePiece, ValuePiece];

// const getYearlyCalendar = () => {
//   const today = new Date();
//   let thisMonth = today.getUTCMonth();
//   let thisYear = today.getUTCFullYear();
//   let thisDay = today.getUTCDate();
//   return Array.from({ length: 13 }, (_, index) => {
//     return {
//       min: new Date(thisYear, thisMonth, index === 0 ? thisDay : 1),
//       days: new Date(thisMonth + index >= 12 ? thisYear + 1 : thisYear, (thisMonth + index) % 12, thisDay),
//     };
//   });
// };

// const Calendars = ({ value, onChange }: { value: Value; onChange: Dispatch<SetStateAction<Value>> }) => {
//   const [selected, setSelected] = useState<Value[]>([value]);
//   useEffect(() => {
//     console.log('selected', selected, 'value', value);
//   }, [selected, value]);

//   const handleSelect = e => {
//     console.log('handleSelect', e);
//     onChange(e);
//   };

//   return getYearlyCalendar().map(({ days, min }) => (
//     <div key={days.toDateString()}>
//       {days.toDateString()}
//       <ReactCalendar
//         minDate={min}
//         value={value}
//         onClickDay={v => {
//           setSelected([
//             ...new Set(
//               [...selected, v]
//                 .map(item => Date.parse(item))
//                 .sort()
//                 .map(item => new Date(item))
//             ),
//           ]);
//         }}
//         onChange={handleSelect}
//         // onChange={e => {
//         //   console.log('e', e);
//         //   onChange(e);
//         // }}
//         selectRange={true}
//         key={days.toDateString()}
//         allowPartialRange={true}
//         className={cx('calendar-body')}
//         activeStartDate={days}
//         showNeighboringMonth={false}
//         showNavigation={false}
//       />
//     </div>
//   ));
// };

// const Calendar = () => {
//   const [value, onChange] = useState<Value>(new Date());
//   return <Calendars value={value} onChange={onChange} />;
// };

// export default Calendar;
