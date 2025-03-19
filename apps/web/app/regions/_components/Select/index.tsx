'use client';

import { AnimatedButton, Card, Container, Divider, List } from '@tripie-pyotato/design-system';

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
    <Container margin="none" className={cx('selected-wrap')}>
      <Container applyMargin="top" margin="sm">
        <Card.Content className={cx('card-wrap')}>
          <Container margin="none" className={cx('carousel')}>
            <Container applyMargin="top-bottom" className={cx('carousel-inner')}>
              {Object.keys(TRIPIE_REGION_BY_LOCATION).map(place => (
                <AnimatedButton
                  selected={selected === place}
                  withBorder={true}
                  key={place}
                  className={cx('place-chip')}
                  withMinWidth={true}
                  onClick={() => handleCategorySelect(place)}
                >
                  {place}
                </AnimatedButton>
              ))}
            </Container>
          </Container>

          <Divider />
          <Container margin="none" className={cx('options')}>
            <List.Grid className={cx('grid-wrap')}>
              {TRIPIE_REGION_BY_LOCATION[selected as keyof typeof TRIPIE_REGION_BY_LOCATION].map(place => (
                <AnimatedButton
                  selected={TRIPIE_REGION_IDS[selectedRegion as keyof typeof TRIPIE_REGION_IDS] === place}
                  withBorder={true}
                  key={place}
                  className={cx('chip-wrap')}
                  onClick={() => handleRegionSelect(place)}
                >
                  {place}
                </AnimatedButton>
              ))}
            </List.Grid>
          </Container>
        </Card.Content>
      </Container>
    </Container>
  );
};
export default RegionSelect;
