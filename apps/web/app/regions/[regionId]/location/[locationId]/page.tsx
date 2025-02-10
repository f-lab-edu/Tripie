'use server';
import classNames from 'classnames/bind';

import Style from '../../../_components/shared/regions.module.scss';

const cx = classNames.bind(Style);

import firestoreService from 'app/api/firebase';
import Title from 'app/regions/_components/Title';
import API from 'constants/api-routes';
import { TRIPIE_REGION_IDS } from 'constants/tripie-country';
import { RegionArticleInfo } from 'models/Article';
import RegionList, { RegionArticleData } from '../../../_components/RegionList';
import RegionSelect from '../../../_components/RegionSelect';

const Articles = async ({ params }: { params: Promise<{ locationId: string; regionId: string }> }) => {
  const locationId = (await params).locationId;
  const regionId = (await params).regionId;

  const currentRegionId = decodeURI(regionId);
  const currentLocationId = decodeURI(locationId);

  const data = await firestoreService.getList('region-articles');

  const regionData = data.filter((item: RegionArticleData) => item.regionId === locationId)?.[0]?.data;

  const dynamicBlurDataUrl = await Promise.all(
    regionData?.map(async (data: RegionArticleInfo) => ({
      ...data,
      source: {
        ...data?.source,
        image: {
          ...data?.source?.image,
          blurData: await fetch(
            'http://localhost:3000' +
              API.BASE +
              API.BLUR_IMAGE +
              `?url=${data?.source?.image?.sizes?.small_square?.url}`
          ).then(v => v.json()),
        },
      },
    }))
  );

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
