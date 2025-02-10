'use server';

import firestoreService from 'app/api/firebase';
import { TRIPIE_REGION_BY_LOCATION, TRIPIE_REGION_IDS } from 'constants/tripie-country';
import RegionList, { RegionArticleData } from './_components/RegionList';
import RegionSelect from './_components/RegionSelect';

import classNames from 'classnames/bind';
import API from 'constants/api-routes';
import { RegionArticleInfo } from 'models/Article';
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

  const data = await firestoreService.getList('region-articles');

  const regionData = data.filter((item: RegionArticleData) => item.regionId === selectedRegion)?.[0]?.data;

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
        도시 별<span className={cx('accented')}> 여행 </span>정보
      </Title>
      <RegionSelect selected={currentRegionId} selectedRegion={selectedRegion} />
      <RegionList data={dynamicBlurDataUrl} selectedRegion={selectedRegion} />
    </>
  );
};

export default Articles;
