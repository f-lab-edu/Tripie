import firestoreService from 'app/api/firebase';
import { cache } from 'react';
import { RegionArticleData } from './_components/RegionCard';

const getRegionArticlesPure = async (selectedRegion: string) => {
  const data = await firestoreService.getList('region-articles2');
  const regionData = data.filter((item: RegionArticleData) => item.regionId === selectedRegion)?.[0]?.data;
  return regionData;
};

const pureRegionArticles = cache(getRegionArticlesPure);

const RegionList = async ({ selectedRegion }: { selectedRegion: string }) => {
  const dynamicBlurDataUrl = await pureRegionArticles(selectedRegion);

  return <>{JSON.stringify(dynamicBlurDataUrl)}</>;
};

export default RegionList;
