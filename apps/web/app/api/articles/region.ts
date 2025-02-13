import { RegionArticleData } from 'app/regions/_components/RegionCard';
import API from 'constants/api-routes';
import { RegionArticleInfo } from 'models/Article';
import firestoreService from '../firebase';

const getRegionArticles = async (selectedRegion: string) => {
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
            API.BASE_URL + API.BASE + API.BLUR_IMAGE + `?url=${data?.source?.image?.sizes?.small_square?.url}`
          ).then(v => v.json()),
        },
      },
    }))
  );

  return dynamicBlurDataUrl;
};

export default getRegionArticles;
