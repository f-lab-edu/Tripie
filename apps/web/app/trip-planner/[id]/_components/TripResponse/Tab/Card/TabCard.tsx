'use client';
import classNames from 'classnames/bind';

import { Card, Chip, Container, Divider, Headings, TextUnderLineAnimation } from '@tripie-pyotato/design-system';

import Style from './tab-card.module.scss';

import { Activity, TripContent } from 'models/Aws';
import { useContext, useEffect, useRef } from 'react';

import { TabContext } from '../..';

const cx = classNames.bind(Style);

const TabCard = ({
  label,
  trip,
  index,
  activity,
  comments,
  place,
  scrollIntoView,
}: {
  label: Activity['label'];
  trip: TripContent;
  index: number;
  activity: string;
  comments: string;
  place?: string;
  scrollIntoView?: boolean;
}) => {
  const ref = useRef<HTMLDivElement | null>(null);

  // 날짜별 일자 중의 선택한 일정
  const { current, cycle } = useContext(TabContext);

  // 선택한 일정이 변경되면 리스트 중 해당 카드로 스크롤하여 보여줍니다.
  useEffect(() => {
    if (scrollIntoView) {
      if (ref.current) {
        ref.current?.scrollIntoView({
          behavior: 'smooth',
          block: 'center',
        });
      }
    }
  }, [current]);

  const openNewTab = (url: string) => {
    if (typeof window !== 'undefined') {
      window.open(url, '_blank');
    }
  };

  return (
    <Card.ClickableContent
      key={activity}
      className={cx('trip-activity', 'card-item', current === `${trip.day}-${index}` ? 'selected' : null)}
      selected={current === `${trip.day - 1}-${index}`}
      onClick={() => {
        cycle(`${trip.day - 1}-${index}`);
      }}
    >
      <Container margin="none" className={cx('title')}>
        <div ref={current === `${trip.day - 1}-${index}` ? ref : null} />
        <Chip className={cx('label', label)}>{index + 1}</Chip>
        <Headings.H4 className={cx('accented')}>{activity}</Headings.H4>
      </Container>
      <Divider />
      <Container margin="none">
        {comments}
        <Container margin="sm" applyMargin="top">
          <TextUnderLineAnimation
            className={cx('at-place')}
            // 새로운 탭에 구글 검색
            onClick={() => openNewTab(`https://www.google.com/search?q=@${place}`)}
          >
            <span className={cx('accented')}>@</span>
            {place}
          </TextUnderLineAnimation>
        </Container>
      </Container>
    </Card.ClickableContent>
  );
};

export default TabCard;
