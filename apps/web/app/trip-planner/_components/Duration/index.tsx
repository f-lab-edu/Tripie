'use client';
import { Calendar, Icon } from '@tripie-pyotato/design-system/@components';
import { Text } from '@tripie-pyotato/design-system/@core';

import { useCalendar } from '@tripie-pyotato/design-system/@hooks';
import useServerTime from 'hooks/useServerTime';
import { ContinentKeys } from 'models/Continent';
import { ReactNode } from 'react';
import { localeString2Date } from 'utils/date';
import Layout from '../Layout/Layout';
import SubmitButton from './SubmitButton';

interface Props {
  context: {
    continent: ContinentKeys;
    country: string;
    city: { all: string[]; selected: string[] };
    duration?: string;
    companion?: string;
    preference?: string;
  };
  onNext: (duration: string) => void;
  onPrev: () => void;
  progress: ReactNode;
}

const DurationStep = ({ context, onNext, onPrev, progress }: Props) => {
  const { isValidTime, serverTime } = useServerTime(context?.duration?.split(' ~ ')[0]);
  const { calendarFormatTime, setSelected, duration, calendar, selected } = useCalendar({
    serverTime,
    isValidTime,
    selectedTime: () =>
      context?.duration == null || isValidTime !== true
        ? calendarFormatTime
        : localeString2Date(context.duration.split(' ~ ')),
  });

  return (
    <Layout
      navigateIcon={
        <Icon.Navigate
          sizes="large"
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
      submitButton={<SubmitButton duration={duration} onNext={onNext} onPrev={onPrev} />}
    />
  );
};

export default DurationStep;
