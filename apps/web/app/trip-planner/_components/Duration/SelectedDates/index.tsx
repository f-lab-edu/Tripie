'use client';
import { Card, Container, Headings, Text } from '@tripie-pyotato/design-system';
import { classNames } from 'wrapper';

import Style from './selected-dates.module.scss';

const cx = classNames.bind(Style);

type SelectedDateProps = { duration: { start: string; end: string } };

const DateSection = ({
  date,
  duration,
}: {
  date: keyof SelectedDateProps['duration'];
  duration: SelectedDateProps['duration'];
}) => {
  return (
    <>
      <Headings.H4>{date === 'start' ? '시작' : '끝'}</Headings.H4>
      <Container margin="sm" applyMargin="top">
        {duration[date] === '' ? (
          <Container margin="none" className={cx('not-selected')}>
            <Text.Jump>날짜를 선택해주세요!</Text.Jump>
          </Container>
        ) : (
          duration[date]
        )}
      </Container>
    </>
  );
};

const SelectedDates = ({ duration }: SelectedDateProps) => {
  return (
    <Container margin="none" className={cx('card-wrap')}>
      <Card.Content>
        <DateSection date={'start'} duration={duration} />
      </Card.Content>
      <Card.Content>
        <DateSection date={'end'} duration={duration} />
      </Card.Content>
    </Container>
  );
};

export default SelectedDates;
