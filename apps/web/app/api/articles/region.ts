import { RegionArticleData } from 'app/regions/_components/RegionCard';
import API from 'constants/api-routes';
import { RegionArticleInfo } from 'models/Article';
// import addImage from '../cloudinary/addImage' / ;
import firestoreService from '../firebase';

const getRegionArticles = async (selectedRegion: string) => {
  const data = await firestoreService.getList('region-articles');
  const regionData = data.filter((item: RegionArticleData) => item.regionId === selectedRegion)?.[0]?.data;

  const dynamicBlurDataUrl = await Promise.all(
    regionData?.map(async (data: RegionArticleInfo) => {
      try {
        const imageUrl = data?.source?.image?.sizes?.small_square?.url;

        if (!imageUrl) {
          console.warn(`No image URL found for region article:`, data);
          return { ...data };
        }

        // await addImage(data.source.image.sizes.full.url);

        const response = await fetch(`${API.BASE_URL}${API.BASE}${API.BLUR_IMAGE}?url=${imageUrl}`);

        // Ensure response is OK and is JSON
        if (!response.ok) {
          console.error(`Failed to fetch blurData for ${imageUrl}: ${response.statusText}`);
          return { ...data };
        }

        const blurData = await response.json();

        return {
          ...data,
          source: {
            ...data.source,
            image: {
              ...data.source.image,
              blurData, // blur 데이터 추가
            },
          },
        };
      } catch (error) {
        console.error('Error fetching blurData:', error);
        return { ...data }; // 에러 발생 시 원래 데이터
      }
    })
  );

  return dynamicBlurDataUrl;
};

export default getRegionArticles;
