'use client';

import Divider from '@components/data-display/Divider/Divider.client';
import TripieContainer from '@core/layout/TripieContainer';
import { RefAttributes } from 'react';
import 'react-calendar/dist/Calendar.css';

import { CalendarProps, ReactCalendar } from '../../../wrappers';

import { classNames } from 'shared';
import Style from './calendar-header.module.scss';

const cx = classNames.bind(Style);

type CustomCalendarProps = CalendarProps & RefAttributes<unknown>;

const CalendarHeader = ({ selectRange, allowPartialRange }: CustomCalendarProps) => {
  return (
    <TripieContainer applyMargin="top-bottom" className={cx(`calendar-header-wrap`)}>
      <ReactCalendar
        selectRange={selectRange}
        showNeighboringMonth={false}
        allowPartialRange={allowPartialRange}
        showNavigation={false}
      />
      <Divider />
    </TripieContainer>
  );
};

export default CalendarHeader;
