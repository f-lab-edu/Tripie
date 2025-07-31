import { RegionArticleData } from 'app/regions/_components/RegionCard';
import firestoreService from '../firebase';

const getRegionArticles = async (selectedRegion: string) => {
  const data = await firestoreService.getList('region-articles2');
  const regionData = data.filter((item: RegionArticleData) => item.regionId === selectedRegion)?.[0]?.data;

  return regionData;
};

export default getRegionArticles;
