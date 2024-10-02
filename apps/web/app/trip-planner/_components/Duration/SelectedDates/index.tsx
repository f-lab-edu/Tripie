import { Container, Headings } from '@tripie-pyotato/design-system';
import classNames from 'classnames/bind';
import Card from 'shared/components/Card/Card';
import { JumpingText } from 'shared/components/Text/Text';
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
    <Container margin="none">
      <Headings.H2>{date === 'start' ? '시작' : '끝'}</Headings.H2>
      <Container margin="sm" applyMargin="top">
        {duration[date] === '' ? (
          <Container margin="none" className={cx('not-selected')}>
            <JumpingText>날짜를 선택해주세요!</JumpingText>
          </Container>
        ) : (
          duration[date]
        )}
      </Container>
    </Container>
  );
};

const SelectedDates = ({ duration }: SelectedDateProps) => {
  return (
    <Card className={cx('start-end-card')}>
      <DateSection date={'start'} duration={duration} />
      <DateSection date={'end'} duration={duration} />
    </Card>
  );
};

export default SelectedDates;
