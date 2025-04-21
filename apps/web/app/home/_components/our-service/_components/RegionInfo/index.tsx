'use client';
import { Card } from '@tripie-pyotato/design-system';
import { Container, Headings, Text } from '@tripie-pyotato/design-system/@core';
import { classNames } from 'wrapper';

import Style from './region-info.module.scss';

import RegionList, { RegionArticleData } from 'app/regions/_components/RegionList';
import RegionSelect from 'app/regions/_components/Select';
import { TRIPIE_REGION_BY_LOCATION, TRIPIE_REGION_IDS } from 'constants/tripie-country';
import useCountryArticle from 'hooks/query/useCountryArticles';
import { Suspense } from 'react';
import Loading from 'shared/components/Loading';

const cx = classNames.bind(Style);

const RegionInfo = () => {
  const randomIndex = Math.floor(Math.random() * 10);
  const currentRegionId = Object.keys(TRIPIE_REGION_BY_LOCATION).filter((_, index) => {
    if (randomIndex === index) {
      return true;
    }
    if (randomIndex < 0 || randomIndex >= Object.keys(TRIPIE_REGION_BY_LOCATION).length) {
      return true;
    }
  })[0];
  const selected = TRIPIE_REGION_BY_LOCATION[currentRegionId as keyof typeof TRIPIE_REGION_BY_LOCATION];

  const selectedRegion = Object.keys(TRIPIE_REGION_IDS).filter(
    item => TRIPIE_REGION_IDS[item as keyof typeof TRIPIE_REGION_IDS] === selected[0]
  )?.[0];

  const { data } = useCountryArticle() as unknown as { data: RegionArticleData[] };

  if (data == null) {
    return <Loading />;
  }

  if (data.length === 0) {
    return <>no items...</>;
  }

  return (
    <Card.Content className={cx('card-wrap', 'scroll')}>
      <Container className={cx('card-content-wrap')} margin="none">
        <Container applyMargin="top-bottom">
          <Headings.H4>
            어떤 <Text.Accented>지역</Text.Accented>이 궁금하세요?
          </Headings.H4>
        </Container>
        <Container margin="none" className={cx('card-region-wrap')}>
          <RegionSelect selected={currentRegionId} selectedRegion={selectedRegion} />
          <Container margin="none">
            <Suspense fallback={<Loading />}>
              <RegionList data={data.filter(item => item.regionId === selectedRegion)?.[0]?.data} />
            </Suspense>
          </Container>
        </Container>
      </Container>
    </Card.Content>
  );
};

export default RegionInfo;
