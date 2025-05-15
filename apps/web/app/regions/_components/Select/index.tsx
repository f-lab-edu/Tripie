'use client';

import { AnimatedButton, Carousel } from '@tripie-pyotato/design-system/@components';
import { Container, Divider, Stack } from '@tripie-pyotato/design-system/@core';
import { classNames } from 'wrapper';

import { TRIPIE_REGION_BY_LOCATION, TRIPIE_REGION_IDS } from 'constants/tripie-country';
import { useRouter } from 'next/navigation';

import { useQueryClient } from '@tanstack/react-query';
import getRegionArticles from 'app/api/articles/region';
import useArticle from 'hooks/query/useArticle';
import Style from './region-select.module.scss';
const cx = classNames.bind(Style);

const RegionSelect = ({ selected, selectedRegion }: { selected: string; selectedRegion?: string }) => {
  const navigate = useRouter();
  const queryClient = useQueryClient();
  // 상위 항목 선택 -> 해당 지역의 route로 이동
  const handleCategorySelect = (place: string) => {
    if (selected == place) {
      return;
    }
    navigate.push(`/regions/${place}`);
  };

  // 대륙 선택 버튼 클릭시 다음 퍼널 스탭으로 넘어가기 전에 미리 해당 대륙에 속한 국가들 prefetch해오기
  const prefetch = (url: string) => {
    queryClient.prefetchQuery({
      queryKey: useArticle.queryKey(url),
      queryFn: async () => await getRegionArticles(url),
    });
  };

  // 상위 항목의 하위 항목 선택 -> 해당 상위/location/하위 route로 이동
  const handleRegionSelect = (place: string) => {
    const selectedLocation = Object.keys(TRIPIE_REGION_IDS).filter(
      key => TRIPIE_REGION_IDS[key as keyof typeof TRIPIE_REGION_IDS] === place
    )?.[0];
    prefetch(selectedLocation);
    navigate.push(`/regions/${selected}/location/${selectedLocation}`);
  };

  return (
    <Container withBorder={true} padding={'m'} margin="sm" applyMargin="top-bottom">
      <Carousel.Controlled>
        <Stack applyMargin="top-bottom" gap="l" justifyContent="start">
          {Object.keys(TRIPIE_REGION_BY_LOCATION).map(place => (
            <AnimatedButton
              selected={selected === place}
              withBorder={true}
              key={place}
              withMinWidth={true}
              onClick={() => handleCategorySelect(place)}
            >
              {place}
            </AnimatedButton>
          ))}
        </Stack>
      </Carousel.Controlled>
      <Divider />
      <Container margin="none" padding="none">
        <Stack
          display="grid"
          margin="m"
          className={cx('options')}
          cols={2}
          gridRepeat={{ 'wrap-sm': 4 }}
          gap="l"
          applyMargin="top"
        >
          {TRIPIE_REGION_BY_LOCATION[selected as keyof typeof TRIPIE_REGION_BY_LOCATION].map(place => (
            <AnimatedButton
              key={place}
              selected={TRIPIE_REGION_IDS[selectedRegion as keyof typeof TRIPIE_REGION_IDS] === place}
              withBorder={true}
              isFullSize={true}
              onClick={() => handleRegionSelect(place)}
            >
              {place}
            </AnimatedButton>
          ))}
        </Stack>
      </Container>
    </Container>
  );
};
export default RegionSelect;
