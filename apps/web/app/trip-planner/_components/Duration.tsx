'use client';
import { Calendar, Toast } from '@tripie-pyotato/design-system/@components';
import { Container, Text } from '@tripie-pyotato/design-system/@core';

import { useCalendar } from '@tripie-pyotato/design-system/@hooks';
import { COLORS } from '@tripie-pyotato/design-system/shared';
import useServerTime from 'hooks/useServerTime';
import { useCallback, useState } from 'react';
import NavButton from 'shared/components/NavButton';
import TripieIcon from 'shared/components/TripieIcon/TripieIcon';
import { localeString2Date } from 'utils/date';
import { FunnelProps, FunnelSteps } from '../page';
import Layout from './Layout/Layout';

const MAX_DAYS_IN_MILLI_SEC = 1_209_600_000;

const DurationStep = ({
  context,
  onNext,
  onPrev,
  progress,
}: { context: FunnelSteps['DURATION']; onNext: (duration: string) => void } & FunnelProps) => {
  const { serverTime } = useServerTime(context?.duration?.split(' ~ ')[0]);
  const [openToast, setOpenToast] = useState(false);
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
      {openToast ? (
        <Toast position={'bottom-right'} toastColor={COLORS[800]}>
          <Container>기간은 최대 2주로 설정 가능합니다.</Container>
        </Toast>
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
            // @ts-ignore
            onChange={value => {
              if (Array.isArray(value) && value.length === 2) {
                const [start, end] = value;

                if (start != null && end != null) {
                  const diff_milli_sec: number = Math.abs(+start - +end);
                  console.log(diff_milli_sec);
                  if (diff_milli_sec > MAX_DAYS_IN_MILLI_SEC) {
                    setOpenToast(true);
                    return;
                  }
                }
              }
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
