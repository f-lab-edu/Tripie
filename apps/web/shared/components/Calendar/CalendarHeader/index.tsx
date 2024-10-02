import { Container } from '@tripie-pyotato/design-system';
import { RefAttributes } from 'react';
import { CalendarProps, Calendar as ReactCalendar } from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Divider from 'shared/components/Divider/Divider';
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
