'use client';

import { Calendar, ToastWithControl } from '@tripie-pyotato/design-system/@components';
import { Container, Text } from '@tripie-pyotato/design-system/@core';

import { useCalendar } from '@tripie-pyotato/design-system/@hooks';
import { COLORS, LooseValue } from '@tripie-pyotato/design-system/shared';
import useServerTime from 'hooks/useServerTime';
import { useCallback, useState } from 'react';
import NavButton from 'shared/components/NavButton';
import TripieIcon from 'shared/components/TripieIcon/TripieIcon';
import { localeString2Date } from 'utils/date';
import { FunnelProps, FunnelSteps } from '../page';
import Layout from './Layout/Layout';

const MAX_DAYS_IN_MILLI_SEC = 1_295_999_999;

const DurationStep = ({
  context,
  onNext,
  onPrev,
  progress,
}: { context: FunnelSteps['DURATION']; onNext: (duration: string) => void } & FunnelProps) => {
  const { serverTime } = useServerTime(context?.duration?.split(' ~ ')[0]);
  const [isOpen, setIsOpen] = useState(false);
  const { setSelected, duration, calendar, selected } = useCalendar({
    serverTime,
    isValidTime: context?.duration != null,
    selectedTime: context?.duration == null ? null : localeString2Date(context?.duration.split(' ~ ')),
  });

  const handleSubmit = useCallback(() => {
    if (Array.isArray(selected)) {
      const [start, end] = selected.map(item => item?.toLocaleString().replace(', ', ' '));
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
    <>
      {isOpen ? (
        <ToastWithControl
          isOpen={isOpen}
          position={'bottom-right'}
          toastColor={COLORS[800]}
          toggleOpen={setIsOpen}
          // onToggle={() => setIsOpen()}
        >
          <Container>기간은 최대 2주로 설정 가능합니다.</Container>
        </ToastWithControl>
      ) : null}

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
            onChange={(value: LooseValue) => {
              if (Array.isArray(value) && value.length === 2) {
                const [start, end] = value.map(date => new Date(date as unknown as number).getTime());
                const dayCount = Math.abs(end - start);
                const invalidRange = MAX_DAYS_IN_MILLI_SEC < dayCount;

                if (invalidRange) {
                  // console.log(`${invalidRange ? 'In' : 'Is '}valid range`, value, dayCount);
                  setIsOpen(true);
                  return;
                }
              }
              setSelected((Array.isArray(value) ? value : [value]) as Date[]);
            }}
            selected={selected as LooseValue}
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
    </>
  );
};

export default DurationStep;
