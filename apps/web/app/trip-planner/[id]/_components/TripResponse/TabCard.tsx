'use client';
import { AnimatedCard, Chip, TextUnderLineAnimation } from '@tripie-pyotato/design-system/@components';
import { Stack, Text, TripieCard } from '@tripie-pyotato/design-system/@core';
import { openNewTab } from '@tripie-pyotato/utils';

import { Activity, TripContent } from 'models/Aws';
import { useContext, useEffect, useRef } from 'react';

import { TabContext } from '.';

const TabCard = ({
  label,
  trip,
  index,
  activity,
  comments,
  place,
  scrollIntoView,
  country,
}: {
  label: Activity['label'];
  trip: TripContent;
  index: number;
  activity: string;
  comments: string;
  place?: string;
  scrollIntoView?: boolean;
  country: string;
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
          block: 'start',
        });
      }
    }
  }, [current]);

  return (
    <AnimatedCard
      key={activity}
      selected={current === `${trip.day - 1}-${index}`}
      onClick={() => {
        cycle(`${trip.day - 1}-${index}`);
      }}
    >
      <TripieCard sizes={'full'} margin="none" ref={current === `${trip.day - 1}-${index}` ? ref : null}>
        <TripieCard.Header>
          <Stack alignItems={'center'} gap="default" margin="none">
            <Chip.Marker variant={label}>{index + 1}</Chip.Marker>
            <Text.Accented isButtonText={true} bold={true}>
              {activity}
            </Text.Accented>
          </Stack>
        </TripieCard.Header>
        <TripieCard.Divider margin="m" />
        <TripieCard.Content margin="m">{comments}</TripieCard.Content>
        <TripieCard.Content applyMargin="left-right-bottom" margin="m">
          <TextUnderLineAnimation
            // 새로운 탭에 구글 검색
            onClick={() => openNewTab(`https://www.google.com/search?q=@${place}, ${country}`)}
          >
            <Text.Accented size="small">@</Text.Accented>
            {place}
          </TextUnderLineAnimation>
        </TripieCard.Content>
      </TripieCard>
    </AnimatedCard>
  );
};

export default TabCard;
