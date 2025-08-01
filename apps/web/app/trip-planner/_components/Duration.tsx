'use client';
import { Calendar } from '@tripie-pyotato/design-system/@components';
import { Text } from '@tripie-pyotato/design-system/@core';

import { useCalendar } from '@tripie-pyotato/design-system/@hooks';
import useServerTime from 'hooks/useServerTime';
import { useCallback } from 'react';
import NavButton from 'shared/components/NavButton';
import TripieIcon from 'shared/components/TripieIcon/TripieIcon';
import { localeString2Date } from 'utils/date';
import { FunnelProps, FunnelSteps } from '../page';
import Layout from './Layout/Layout';

const DurationStep = ({
  context,
  onNext,
  onPrev,
  progress,
}: { context: FunnelSteps['DURATION']; onNext: (duration: string) => void } & FunnelProps) => {
  const { serverTime } = useServerTime(context?.duration?.split(' ~ ')[0]);
  const { setSelected, duration, calendar, selected } = useCalendar({
    serverTime,
    isValidTime: context?.duration != null,
    selectedTime: context?.duration == null ? null : localeString2Date(context?.duration.split(' ~ ')),
  });

  const handleSubmit = useCallback(() => {
    if (Array.isArray(selected)) {
      const [start, end] = selected.map(item => item?.toLocaleString().replace(', ', ' '));
      console.log(start, end, duration);
      if (duration.start != start && duration.end != end) {
        onNext(`${start} ~ ${end}`);
        return;
      }
    }
    if (duration.end === '' || duration.start === '') {
      return;
    } else {
      onNext(`${duration.start} ~ ${duration.end}`);
    }
  }, [duration, selected]);

  return (
    <Layout
      navigateIcon={
        <NavButton
          onTapStart={() => {
            onPrev();
          }}
        />
      }
      heading={{ text: '기간', particle: '은' }}
      progress={progress}
      listItems={
        <Calendar
          calendar={calendar}
          // @ts-ignore
          onChange={value => {
            setSelected((Array.isArray(value) ? value : [value]) as Date[]);
            // console.log('onChange', value);
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
              다음 <TripieIcon />
            </Text>
          )}
        </>
      }
    />
  );
};

export default DurationStep;
