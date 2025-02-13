'use client';
import { TripieContainer } from '@tripie-pyotato/design-system';

import ArticleHeading from 'app/regions/_components/Elements/Header';
import classNames from 'classnames/bind';
import BUSINESS_DATE from 'constants/date';
import { BusinessHour } from 'models/Attraction';
import Style from './business-hours.module.scss';

const cx = classNames.bind(Style);

const BusinessHours = ({ readableBusinessHours, today }: { readableBusinessHours: BusinessHour[]; today: number }) => {
  return (
    <>
      <ArticleHeading item={{ type: 'heading3', value: { text: '이용가능시간, 휴무일' } }} />
      <TripieContainer id={'businessHours'} className={cx('business-hours')} margin="none">
        {Object.keys(BUSINESS_DATE).map(dayOfWeek => {
          const day = readableBusinessHours?.filter(item => item.dayOfWeek == +dayOfWeek)?.[0];
          if (day == null) {
            return (
              <TripieContainer
                margin="none"
                key={dayOfWeek}
                className={cx(BUSINESS_DATE[today] === BUSINESS_DATE[dayOfWeek] ? 'today' : null)}
              >
                <TripieContainer margin="none" className={cx('day')}>
                  {BUSINESS_DATE[dayOfWeek]}
                </TripieContainer>
                <TripieContainer margin="none">휴무일</TripieContainer>
              </TripieContainer>
            );
          } else {
            const { dayOfWeek, from, to } = day;
            return (
              <TripieContainer
                margin="none"
                key={dayOfWeek}
                className={cx(BUSINESS_DATE[today] === BUSINESS_DATE[dayOfWeek] ? 'today' : null)}
              >
                <TripieContainer margin="none" className={cx('day')}>
                  {BUSINESS_DATE[dayOfWeek]}
                </TripieContainer>
                <TripieContainer margin="none">
                  {from} - {to}
                </TripieContainer>
              </TripieContainer>
            );
          }
        })}
      </TripieContainer>
    </>
  );
};

export default BusinessHours;
