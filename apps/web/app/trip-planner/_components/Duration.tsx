'use client';
import { Calendar, Icon, NavigationButton } from '@tripie-pyotato/design-system/@components';
import { Text } from '@tripie-pyotato/design-system/@core';

import { useCalendar } from '@tripie-pyotato/design-system/@hooks';
import useServerTime from 'hooks/useServerTime';
import { useCallback } from 'react';
import { localeString2Date } from 'utils/date';
import { FunnelProps, FunnelSteps } from '../page';
import Layout from './Layout/Layout';

const DurationStep = ({
  context,
  onNext,
  onPrev,
  progress,
}: { context: FunnelSteps['DURATION']; onNext: (duration: string) => void } & FunnelProps) => {
  const { isValidTime, serverTime } = useServerTime(context?.duration?.split(' ~ ')[0]);
  const { calendarFormatTime, setSelected, duration, calendar, selected } = useCalendar({
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
    <Layout
      navigateIcon={
        <NavigationButton
          sizes={'large'}
          onTapStart={() => {
            onPrev();
          }}
        />
      }
      heading={
        <>
          여행 <Text.Accented>기간</Text.Accented>은? {progress}
        </>
      }
      listItems={
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
      }
      clickAction={handleSubmit}
      disabled={duration.end === ''}
      submitButtonChildren={
        <>
          {duration.end === '' ? (
            <Text size="small">여행의 시작과 끝나는 날짜를 선택해주세요.</Text>
          ) : (
            <Text>
              다음 <Icon />
            </Text>
          )}
        </>
      }
    />
  );
};

export default DurationStep;
