'use server';

import { TRIPIE_REGION_BY_LOCATION, TRIPIE_REGION_IDS } from 'constants/tripie-country';
import RegionSelect from './_components/RegionSelect';

import getRegionArticles from 'app/api/articles/region';
import classNames from 'classnames/bind';
import RegionList from './_components/RegionList';
import Style from './_components/shared/regions.module.scss';
import Title from './_components/Title';

const cx = classNames.bind(Style);

const Articles = async () => {
  const currentRegionId = Object.keys(TRIPIE_REGION_BY_LOCATION)[0];
  const selectedRegion = Object.keys(TRIPIE_REGION_IDS).filter(
    item =>
      TRIPIE_REGION_IDS[item as keyof typeof TRIPIE_REGION_IDS] ===
      TRIPIE_REGION_BY_LOCATION[currentRegionId as keyof typeof TRIPIE_REGION_BY_LOCATION][0]
  )?.[0];

  const dynamicBlurDataUrl = await getRegionArticles(selectedRegion);

  return (
    <>
      <Title>
        도시 별<span className={cx('accented')}> 여행 </span>정보
      </Title>
      <RegionSelect selected={currentRegionId} selectedRegion={selectedRegion} />
      <RegionList data={dynamicBlurDataUrl} selectedRegion={selectedRegion} />
    </>
  );
};

export default Articles;
