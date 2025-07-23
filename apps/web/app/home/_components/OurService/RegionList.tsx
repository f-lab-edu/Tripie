'use client';

import { TRIPIE_REGION_BY_LOCATION, TRIPIE_REGION_IDS } from 'constants/tripie-country';

import Stack from '@tripie-pyotato/design-system/@core/Stack';

import RegionCard from 'app/regions/_components/RegionCard';
import useCountryArticle from 'hooks/query/useCountryArticles';
import { RegionArticleInfo } from 'models/Article';
import { useMemo } from 'react';

const RegionList = () => {
  const currentRegionId = useMemo(() => {
    const randomIndex = Math.floor(Math.random() * 10);
    return Object.keys(TRIPIE_REGION_BY_LOCATION).filter((_, index) => {
      if (randomIndex === index) {
        return true;
      }
      if (randomIndex < 0 || randomIndex >= Object.keys(TRIPIE_REGION_BY_LOCATION).length) {
        return true;
      }
    })[0];
  }, []);

  const selectedRegionId = useMemo(() => {
    const selected = TRIPIE_REGION_BY_LOCATION[currentRegionId as keyof typeof TRIPIE_REGION_BY_LOCATION];
    return Object.keys(TRIPIE_REGION_IDS).filter(
      item => TRIPIE_REGION_IDS[item as keyof typeof TRIPIE_REGION_IDS] === selected[0]
    )?.[0];
  }, [currentRegionId]);

  const { data: regionList } = useCountryArticle(selectedRegionId);

  if (regionList == null) {
    return <>...</>;
  }

  if (regionList.length === 0) {
    return <>no items...</>;
  }

  return (
    // <Suspense fallback={<>loading...</>}>

    <Stack
      cols={2}
      gridWrapOn={{ 'wrap-xs': 1 }}
      gridRepeat={{
        'wrap-md': 4,
        'wrap-xl': 6,
      }}
      display="grid"
      gap="l"
      applyMargin="top-bottom"
    >
      {regionList == null ? (
        <>지역 정보가 없습니다.</>
      ) : (
        regionList?.data.map((article: RegionArticleInfo) => <RegionCard article={article} key={article.id} />)
      )}
    </Stack>
    // </Suspense>
  );
};
export default RegionList;
