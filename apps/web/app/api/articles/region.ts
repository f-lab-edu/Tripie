// import addImage from '../cloudinary/addImage';
// import api from 'utils/ky';
import { RegionArticleData } from 'app/regions/_components/RegionCard';
import firestoreService from '../firebase';

const getRegionArticles = async (selectedRegion: string) => {
  // const data = await firestoreService.getList('region-articles');
  const data = await firestoreService.getList('region-articles2');
  const regionData = data.filter((item: RegionArticleData) => item.regionId === selectedRegion)?.[0]?.data;

  // await Promise.all(
  //   // regionData?.map(async (data: RegionArticleInfo) => {
  //     try {
  //       // const fullImageUrl = data?.source?.image?.sizes?.full?.url;
  //       // if (!fullImageUrl.startsWith('https://res.cloudinary.com/dbzzletpw/image/upload') && fullImageUrl != null) {
  //       //   // await addImage(fullImageUrl);
  //       //   await api
  //       //     .post(`cloudinary`, {
  //       //       json: {
  //       //         imageUrl: fullImageUrl,
  //       //       },
  //       //     })
  //       //     .json();
  //       // }
  //       // if (!imageUrl.startsWith('https://res.cloudinary.com/dbzzletpw/image/upload') && imageUrl != null) {
  //       // await addImage(imageUrl);
  //       // await api
  //       //   .post(`cloudinary`, {
  //       //     json: {
  //       //       imageUrl,
  //       //     },
  //       //   })
  //       //   .json();
  //       // const res = await api.post('cloudinary', { json: { imageUrl } }).json();
  //       // console.log('imageUrl', imageUrl, res);
  //       // }
  //     } catch (error) {
  //       console.error('Error fetching blurData:', error);
  //       return { ...data }; // 에러 발생 시 원래 데이터
  //     }
  //   })
  // );

  return regionData;
  // return null;
};

export default getRegionArticles;
