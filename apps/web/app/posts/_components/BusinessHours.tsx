'use client';

import { Divider, Table, Text } from '@tripie-pyotato/design-system/@core';
import BUSINESS_DATE from 'constants/date';
import useServerTime from 'hooks/useServerTime';
import { BusinessHour } from 'models/Attraction';

import { useMemo } from 'react';
import ArticleHeading from './Elements/Header';

export type ReadableBusinessHour = {
  from: number;
  to: number;
};

const Hours = ({ item }: { item: ReadableBusinessHour }) => {
  return (
    <Text key={JSON.stringify(item)} margin="none">
      {item.from} - {item.to}
    </Text>
  );
};

const MultipleHours = ({ readableBusinessHours }: { readableBusinessHours: ReadableBusinessHour[] }) => {
  if (readableBusinessHours.length === 1) {
    return <Hours item={readableBusinessHours[0]} />;
  }
  return (
    <>
      {readableBusinessHours.map((item, index) => (
        <Text key={JSON.stringify(item)} alignItems={'center'} isButtonText={true} gap={'l'}>
          <Hours item={item} />
          <Text> {index != readableBusinessHours.length - 1 ? ' | ' : null}</Text>
        </Text>
      ))}
    </>
  );
};

const BusinessHourInfo = ({
  isToday,
  readableBusinessHours,
}: {
  isToday: boolean;
  readableBusinessHours: {
    from: number;
    to: number;
  }[];
}) => {
  if (readableBusinessHours.length === 0) {
    return (
      <Text bold={isToday} crossOut={true}>
        휴무일
      </Text>
    );
  }
  if (isToday) {
    return (
      <Text.Accented bold={isToday}>
        <MultipleHours readableBusinessHours={readableBusinessHours} />
      </Text.Accented>
    );
  }
  return (
    <Text gap={'l'}>
      <MultipleHours readableBusinessHours={readableBusinessHours} />
    </Text>
  );
};

const BusinessHours = ({ readableBusinessHours }: { readableBusinessHours: BusinessHour[] }) => {
  const { dayOfToday } = useServerTime();

  const columns = useMemo(
    () =>
      Object.keys(BUSINESS_DATE).map(dayOfWeek => ({
        field: +dayOfWeek,
        header: BUSINESS_DATE[dayOfWeek],
        readableBusinessHours: Object.values(readableBusinessHours)
          .filter(item => item.dayOfWeek === +dayOfWeek + 1)
          .map(item => ({ from: item.from, to: item.to })),
      })),
    [dayOfToday, readableBusinessHours]
  );

  return (
    <>
      <Divider.Article item={{ type: 'hr2' }} />
      <ArticleHeading item={{ type: 'heading3', value: { text: '이용가능시간, 휴무일' } }} />
      <Table applyMargin="top" margin="m">
        <Table.Body>
          {columns.map(col => {
            return (
              <Table.Row key={col.field}>
                <Table.Data margin="none">
                  {col.field == dayOfToday ? (
                    <Text.Accented bold={true}> {BUSINESS_DATE[col.field]}</Text.Accented>
                  ) : (
                    BUSINESS_DATE[col.field]
                  )}
                </Table.Data>
                <Table.Data applyMargin="top-bottom">
                  <BusinessHourInfo
                    isToday={col.field == dayOfToday}
                    readableBusinessHours={col.readableBusinessHours}
                  />
                </Table.Data>
              </Table.Row>
            );
          })}
        </Table.Body>
      </Table>
    </>
  );
};

export default BusinessHours;
