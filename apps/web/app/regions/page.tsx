import { TRIPIE_REGION_BY_LOCATION, TRIPIE_REGION_IDS } from 'constants/tripie-country';

import pureRegionArticles from './cache';

import '@tripie-pyotato/design-system/global';
import { RegionArticleInfo } from 'models/Article';
import RegionContents from './_components/RegionContents';

const currentRegionId = Object.keys(TRIPIE_REGION_BY_LOCATION)[0];
const selectedRegion = Object.keys(TRIPIE_REGION_IDS).find(
  item =>
    TRIPIE_REGION_IDS[item as keyof typeof TRIPIE_REGION_IDS] ===
    TRIPIE_REGION_BY_LOCATION[currentRegionId as keyof typeof TRIPIE_REGION_BY_LOCATION][0]
);

const data: RegionArticleInfo[] = await pureRegionArticles(selectedRegion);

const Articles = () => {
  return <RegionContents data={data} currentRegionId={currentRegionId} selectedRegion={selectedRegion} />;
};

export default Articles;
