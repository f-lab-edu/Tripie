'use server';
import classNames from 'classnames/bind';

import Style from '../../../_components/shared/regions.module.scss';

const cx = classNames.bind(Style);

import getRegionArticles from 'app/api/articles/region';
import Title from 'app/regions/_components/Title';
import { TRIPIE_REGION_IDS } from 'constants/tripie-country';
import RegionList from '../../../_components/RegionList';
import RegionSelect from '../../../_components/RegionSelect';

const Articles = async ({ params }: { params: Promise<{ locationId: string; regionId: string }> }) => {
  const locationId = (await params).locationId;
  const regionId = (await params).regionId;

  const currentRegionId = decodeURI(regionId);
  const currentLocationId = decodeURI(locationId);

  const dynamicBlurDataUrl = await getRegionArticles(locationId);

  return (
    <>
      <Title>
        도시 별<span className={cx('accented')}> 여행 </span>정보 {` > `}
        <span className={cx('accented')}>{currentRegionId}</span> {` > `}
        <span className={cx('accented')}>{TRIPIE_REGION_IDS[locationId as keyof typeof TRIPIE_REGION_IDS]}</span>
      </Title>
      <RegionSelect selected={currentRegionId} selectedRegion={currentLocationId} />
      <RegionList data={dynamicBlurDataUrl} selectedRegion={locationId} />
    </>
  );
};

export default Articles;
