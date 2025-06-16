'use client';

import { TRIPIE_REGION_BY_LOCATION, TRIPIE_REGION_IDS } from 'constants/tripie-country';

import { Stack } from '@tripie-pyotato/design-system/@core';
import RegionCard, { RegionArticleData } from 'app/regions/_components/RegionCard';
import useCountryArticle from 'hooks/query/useCountryArticles';
import { Suspense, useMemo } from 'react';
import Loading from 'shared/components/Loading';

const RegionList = () => {
  // const [splash, setSplash] = useState(false);
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

  const { data } = useCountryArticle() as unknown as { data: RegionArticleData[] };

  if (data == null) {
    return <Loading />;
  }

  if (data.length === 0) {
    return <>no items...</>;
  }
  return (
    <Suspense fallback={<Loading />}>
      {/* {splash ? <Loading.SemiTransparent loading={splash} /> : null} */}
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
        {data == null ? (
          <>지역 정보가 없습니다.</>
        ) : (
          data
            .filter(item => item.regionId === selectedRegionId)?.[0]
            ?.data.map(article => (
              <RegionCard
                // setSplash={setSplash}
                article={article}
                key={article.id}
              />
            ))
        )}
      </Stack>
    </Suspense>
  );
};
export default RegionList;
