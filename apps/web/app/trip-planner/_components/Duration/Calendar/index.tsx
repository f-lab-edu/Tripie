'use client';
import { AnimatedButton, Calendar, Icon } from '@tripie-pyotato/design-system/@components';
import { Container } from '@tripie-pyotato/design-system/@core';
import { classNames } from 'wrapper';

import { ContinentKeys } from 'models/Continent';
import { useCallback } from 'react';

import { useCalendar } from '@tripie-pyotato/design-system/@hooks';
import useServerTime from 'hooks/useServerTime';
import { localeString2Date } from 'utils/date';

import Style from './calendar.module.scss';

const cx = classNames.bind(Style);

export type ValuePiece = Date;

export type Value = ValuePiece | [ValuePiece, ValuePiece];

const Calendars = ({
  onNext,
  context,
}: {
  onNext: (duration: string) => void;
  context?: {
    continent: ContinentKeys;
    country: string;
    city: { all: string[]; selected: string[] };
    duration?: string;
    companion?: string;
  };
}) => {
  const { isValidTime, serverTime } = useServerTime(context?.duration?.split(' ~ ')[0]);
  const { calendarFormatTime, calendar, selected, setSelected, duration } = useCalendar({
    serverTime,
    isValidTime,
    selectedTime: () =>
      context?.duration == null || isValidTime !== true
        ? calendarFormatTime
        : localeString2Date(context.duration.split(' ~ ')),
  });

  const handleSubmit = useCallback(() => {
    if (duration.end === '' || duration.start === '') {
      return;
    } else {
      onNext(`${duration.start} ~ ${duration.end}`);
    }
  }, [duration]);

  return (
    <>
      <Calendar
        calendar={calendar}
        // @ts-ignore
        onChange={value => {
          setSelected((Array.isArray(value) ? value : [value]) as Date[]);
        }}
        selected={selected}
        onClickDay={setSelected}
        selectRange={true}
        allowPartialRange={false}
        showNeighboringMonth={true}
        showNavigation={false}
      />
      <Container padding="m" applyPadding="bottom" margin="none">
        <AnimatedButton
          withBorder={true}
          disabled={duration.end === ''}
          isFullSize={true}
          onClick={handleSubmit}
          className={cx(duration.end !== '' && 'long-text')}
        >
          <span>
            {duration.end === '' ? (
              '여행의 시작과 끝나는 날짜를 선택해주세요.'
            ) : (
              <span className={cx('flex-text')}>
                다음 <Icon />
              </span>
            )}
          </span>
        </AnimatedButton>
      </Container>
    </>
  );
};

export default Calendars;
