import Divider from '@components/data-display/Divider/Divider.client';
import { RefAttributes } from 'react';
import 'react-calendar/dist/Calendar.css';
import { CalendarProps, ReactCalendar } from '../../../wrappers';

import TripieContainer from '@core/layout/TripieContainer';
import './calendar-custom.scss';

type CustomCalendarProps = CalendarProps & RefAttributes<unknown>;

const CalendarHeader = ({ selectRange, allowPartialRange }: CustomCalendarProps) => {
  return (
    <TripieContainer applyMargin="top-bottom">
      <ReactCalendar
        selectRange={selectRange}
        showNeighboringMonth={false}
        allowPartialRange={allowPartialRange}
        className={`calendar-header`}
        showNavigation={false}
      />
      <Divider />
    </TripieContainer>
  );
};

export default CalendarHeader;
