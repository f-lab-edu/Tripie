import API from 'constants/api-routes';
import { TRIPIE_REGION_BY_LOCATION, TRIPIE_REGION_IDS } from 'constants/tripie-country';

import pureRegionArticles from './cache';

import '@tripie-pyotato/design-system/global';
import { RegionArticleInfo } from 'models/Article';
import { preload } from 'react-dom';
import RegionContents from './_components/RegionContents';

const currentRegionId = Object.keys(TRIPIE_REGION_BY_LOCATION)[0];
const selectedRegion = Object.keys(TRIPIE_REGION_IDS).find(
  item =>
    TRIPIE_REGION_IDS[item as keyof typeof TRIPIE_REGION_IDS] ===
    TRIPIE_REGION_BY_LOCATION[currentRegionId as keyof typeof TRIPIE_REGION_BY_LOCATION][0]
);

const data: RegionArticleInfo[] = await pureRegionArticles(selectedRegion);

const firstImageUrl = data?.[0]?.source?.image?.sizes?.small_square?.url
  ?.replace('https://res.cloudinary.com', API.MEDIA_URL)
  ?.replace('.jpeg', '');

if (firstImageUrl) {
  preload(firstImageUrl, { as: 'image', fetchPriority: 'high' });
}

const Articles = () => {
  return <RegionContents data={data} currentRegionId={currentRegionId} selectedRegion={selectedRegion} />;
};

export default Articles;
