'use client';

import { TRIPIE_REGION_BY_LOCATION, TRIPIE_REGION_IDS } from 'constants/tripie-country';

import Stack from '@tripie-pyotato/design-system/@core/Stack';

import { AnimatedCard, AnimatedText, Card } from '@tripie-pyotato/design-system/@components';
import RegionCard from 'app/regions/_components/RegionCard';
import API from 'constants/api-routes';
import useCountryArticle from 'hooks/query/useCountryArticles';
import { RegionArticleInfo } from 'models/Article';
import { useMemo } from 'react';
import { useSplash } from '../SplashContext';

const LoadingRegionCardList = () => {
  return (
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
      {Array.from({ length: 15 }, (_, index) => index).map(article => (
        <AnimatedCard key={article}>
          <Card.WithImage
            margin="none"
            alignItems="stretch"
            cover={true}
            sizes={'full'}
            imgSize={'full'}
            aspectRatio={'square'}
            src={API.BASE_URL + '/tripie-image.png'}
            alt={'place-holder'}
            cloudinaryUrl={API.MEDIA_URL}
          >
            <Card.Header size={'h3'} bold={true}>
              <AnimatedText.Jump>제목 로딩 중...</AnimatedText.Jump>
            </Card.Header>
            <Card.Divider />
            <Card.Content padding="m">
              <AnimatedText.Jump>내용 로딩 중...</AnimatedText.Jump>
              <AnimatedText.Jump>내용 로딩 중...</AnimatedText.Jump>
            </Card.Content>
          </Card.WithImage>
        </AnimatedCard>
      ))}
    </Stack>
  );
};

const RegionList = () => {
  const { setSplash } = useSplash();

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

  const { data: regionList, isLoading, isFetching } = useCountryArticle(selectedRegionId);

  if (isLoading || isFetching || regionList == null) {
    return <LoadingRegionCardList />;
  }

  if (regionList.length === 0) {
    return <>no items...</>;
  }

  return (
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
        regionList?.data.map((article: RegionArticleInfo) => (
          <RegionCard setSplash={setSplash} article={article} key={article.id} />
        ))
      )}
    </Stack>
  );
};
export default RegionList;
