import { TRIPIE_REGION_BY_LOCATION, TRIPIE_REGION_IDS } from 'constants/tripie-country';

import RegionSelect from './_components/Select';

import firestoreService from 'app/api/firebase';
import { cache } from 'react';
import { RegionArticleData } from './_components/RegionCard';
import RegionList from './_components/RegionList';
import RegionTitle from './_components/RegionTitle';

const getRegionArticlesPure = async (selectedRegion: string) => {
  const data = await firestoreService.getList('region-articles2');
  const regionData = data.filter((item: RegionArticleData) => item.regionId === selectedRegion)?.[0]?.data;
  return regionData;
};

const pureRegionArticles = cache(getRegionArticlesPure);

const Articles = async () => {
  const currentRegionId = Object.keys(TRIPIE_REGION_BY_LOCATION)[0];
  const selectedRegion = Object.keys(TRIPIE_REGION_IDS).filter(
    item =>
      TRIPIE_REGION_IDS[item as keyof typeof TRIPIE_REGION_IDS] ===
      TRIPIE_REGION_BY_LOCATION[currentRegionId as keyof typeof TRIPIE_REGION_BY_LOCATION][0]
  )?.[0];

  const data = await pureRegionArticles(selectedRegion);

  return (
    <>
      <RegionTitle />
      <RegionSelect selected={currentRegionId} selectedRegion={selectedRegion} />
      <RegionList data={data} />
    </>
  );
};

export default Articles;
