'use server';
import { Container } from '@tripie-pyotato/design-system';
import classNames from 'classnames/bind';

import Style from '../regions.module.scss';

import listCountryArticles from 'app/api/firebase/getArticles';
import { TRIPIE_REGION_BY_LOCATION, TRIPIE_REGION_IDS } from 'constants/tripie-country';
import { RegionArticleData, RegionList } from '../_components/List';
import Navigation from '../_components/Navigation';
import { RegionSelect } from '../_components/Select';

const cx = classNames.bind(Style);

const Articles = async ({ params }: { params: Promise<{ regionId: string }> }) => {
  const regionId = (await params).regionId;
  const selected = Object.keys(TRIPIE_REGION_BY_LOCATION).filter(key =>
    TRIPIE_REGION_BY_LOCATION[key as keyof typeof TRIPIE_REGION_BY_LOCATION].includes(
      TRIPIE_REGION_IDS[regionId as keyof typeof TRIPIE_REGION_IDS]
    )
  )?.[0];
  const selectedRegion = TRIPIE_REGION_IDS[regionId as keyof typeof TRIPIE_REGION_IDS];
  const data = (await listCountryArticles('region-articles')) as RegionArticleData[];

  return (
    <Container margin="none" className={cx('background')}>
      <Container margin="none">
        <Navigation />
        <h2>
          도시 별<span className={cx('accented')}> 여행 </span>정보
        </h2>
      </Container>

      <RegionSelect selected={selected} selectedRegion={selectedRegion} />
      {data == null ? null : <RegionList data={data} selected={selected} selectedRegion={selectedRegion} />}
    </Container>
  );
};

export default Articles;
