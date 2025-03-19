'use client';
import { Container } from '@tripie-pyotato/design-system';
import BUSINESS_DATE from 'constants/date';
import { BusinessHour } from 'models/Attraction';
import { classNames } from 'wrapper';
import ArticleHeading from '../Elements/Header';
import Style from './business-hours.module.scss';

const cx = classNames.bind(Style);

const BusinessHours = ({ readableBusinessHours, today }: { readableBusinessHours: BusinessHour[]; today: number }) => {
  return (
    <>
      <ArticleHeading item={{ type: 'heading3', value: { text: '이용가능시간, 휴무일' } }} />
      <Container id={'businessHours'} className={cx('business-hours')} margin="none">
        {Object.keys(BUSINESS_DATE).map(dayOfWeek => {
          const day = readableBusinessHours?.filter(item => item.dayOfWeek == +dayOfWeek)?.[0];
          if (day == null) {
            return (
              <Container
                margin="none"
                key={dayOfWeek}
                className={cx(BUSINESS_DATE[today] === BUSINESS_DATE[dayOfWeek] ? 'today' : null)}
              >
                <Container margin="none" className={cx('day')}>
                  {BUSINESS_DATE[dayOfWeek]}
                </Container>
                <Container margin="none">휴무일</Container>
              </Container>
            );
          } else {
            const { dayOfWeek, from, to } = day;
            return (
              <Container
                margin="none"
                key={dayOfWeek}
                className={cx(BUSINESS_DATE[today] === BUSINESS_DATE[dayOfWeek] ? 'today' : null)}
              >
                <Container margin="none" className={cx('day')}>
                  {BUSINESS_DATE[dayOfWeek]}
                </Container>
                <Container margin="none">
                  {from} - {to}
                </Container>
              </Container>
            );
          }
        })}
      </Container>
    </>
  );
};

export default BusinessHours;
