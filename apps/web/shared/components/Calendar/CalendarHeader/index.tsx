import { Container, Divider } from '@tripie-pyotato/design-system';
import { RefAttributes } from 'react';
import 'react-calendar/dist/Calendar.css';
import { CalendarProps, ReactCalendar } from 'wrapper';
import './calendar-custom.scss';

type CustomCalendarProps = CalendarProps & RefAttributes<unknown>;

const CalendarHeader = ({ selectRange, allowPartialRange }: CustomCalendarProps) => {
  return (
    <Container margin="none">
      <ReactCalendar
        selectRange={selectRange}
        showNeighboringMonth={false}
        allowPartialRange={allowPartialRange}
        className={`calendar-header`}
        showNavigation={false}
      />
      <Divider />
    </Container>
  );
};

export default CalendarHeader;
