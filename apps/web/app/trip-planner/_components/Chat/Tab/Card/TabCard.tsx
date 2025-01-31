'use client';
import classNames from 'classnames/bind';

import { Container, Headings } from '@tripie-pyotato/design-system';

import Style from './tab-card.module.scss';

import { Activity, TripContent } from 'models/Aws';
import { useContext, useEffect, useRef } from 'react';
import Card from 'shared/components/Card/Card';
import Chip from 'shared/components/Chip/Chip';
import Divider from 'shared/components/Divider/Divider';
import TextUnderLineAnimation from 'shared/components/TextUnderlineAnimation/TextUnderlineAnimation';
import getMarkerLabel from 'utils/marker';
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
        <Chip className={cx(getMarkerLabel(label), 'label')}>{index + 1}</Chip>
        <Headings.H4 className={cx('accented')}>{activity}</Headings.H4>
      </Container>
      <Divider />
      <Container margin="none">
        {comments}
        <Container margin="sm" applyMargin="top">
          <TextUnderLineAnimation className={cx('at-place')}>
            <span className={cx('accented')}>@</span>
            {place}
          </TextUnderLineAnimation>
        </Container>
      </Container>
    </Card.ClickableContent>
  );
};

export default TabCard;
