'use server';
import { Container } from '@tripie-pyotato/design-system';
import classNames from 'classnames/bind';

import Navigation from './_components/Navigation';

import listCountryArticles from 'app/api/firebase/getArticles';
import { TRIPIE_REGION_BY_LOCATION, TRIPIE_REGION_IDS } from 'constants/tripie-country';
// import RegionList, { RegionArticleData } from './[regionId]/_components/RegionList';
// import RegionSelect from './[regionId]/_components/RegionSelect';
import RegionList, { RegionArticleData } from './[regionId]/_components/RegionList';
import RegionSelect from './[regionId]/_components/RegionSelect';
import Style from './regions.module.scss';

const cx = classNames.bind(Style);

const Articles = async () => {
  const currentRegionId = Object.keys(TRIPIE_REGION_BY_LOCATION)[0];
  const selectedRegion = Object.keys(TRIPIE_REGION_IDS).filter(
    item =>
      TRIPIE_REGION_IDS[item as keyof typeof TRIPIE_REGION_IDS] ===
      TRIPIE_REGION_BY_LOCATION[currentRegionId as keyof typeof TRIPIE_REGION_BY_LOCATION][0]
  )?.[0];

  const data = (await listCountryArticles('region-articles')) as RegionArticleData[];

  return (
    <Container margin="none" className={cx('background')}>
      <Container margin="none">
        <Navigation />
        <h2>
          도시 별<span className={cx('accented')}> 여행 </span>정보
        </h2>
      </Container>
      <RegionSelect selected={currentRegionId} selectedRegion={selectedRegion} />
      <RegionList
        data={data.filter(item => item.regionId === selectedRegion)?.[0].data}
        selectedRegion={selectedRegion}
      />
    </Container>
  );
};

export default Articles;
