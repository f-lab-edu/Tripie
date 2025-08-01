'use client';
import { AnimatedCard, Card, Chip, TextUnderLineAnimation } from '@tripie-pyotato/design-system/@components';
import { Stack, Text } from '@tripie-pyotato/design-system/@core';
// import Stack from '@tripie-pyotato/design-system/@core/Stack';
// import Text from '@tripie-pyotato/design-system/@core/Text';
import { openNewTab } from '@tripie-pyotato/utils';

import { Activity, TripContent } from 'models/Aws';
import { useContext, useEffect, useRef } from 'react';

import API from 'constants/api-routes';
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
      <Card
        cloudinaryUrl={API.MEDIA_URL}
        sizes={'full'}
        margin="none"
        ref={current === `${trip.day - 1}-${index}` ? ref : null}
      >
        <Card.Header margin="sm">
          <Stack alignItems={'center'} gap="default" margin="none">
            <Chip.Marker variant={label}>{index + 1}</Chip.Marker>
            <Text.Accented noGapUnderText={true} bold={true}>
              {activity}
            </Text.Accented>
          </Stack>
        </Card.Header>
        <Card.Divider margin="m" />
        <Card.Content margin="sm">
          <Text size="small">{comments}</Text>
        </Card.Content>
        <Card.Content applyMargin="left-right-bottom" margin="sm">
          <TextUnderLineAnimation
            // 새로운 탭에 구글 검색
            onClick={() => openNewTab(`https://www.google.com/search?q=@${place}, ${country}`)}
          >
            <Stack gap="default" alignItems="start" justifyContent="start" margin="none" padding="none">
              <Text.Accented size="tiny">@</Text.Accented>
              <Text size="tiny">{place}</Text>
            </Stack>
          </TextUnderLineAnimation>
        </Card.Content>
      </Card>
    </AnimatedCard>
  );
};

export default TabCard;
