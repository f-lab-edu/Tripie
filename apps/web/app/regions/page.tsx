import { TRIPIE_REGION_BY_LOCATION, TRIPIE_REGION_IDS } from 'constants/tripie-country';

import RegionSelect from './_components/Select';

import RegionList from './_components/RegionList';
import RegionTitle from './_components/RegionTitle';
import pureRegionArticles from './cache';

import '@tripie-pyotato/design-system/global';
import { RegionArticleInfo } from 'models/Article';

const currentRegionId = Object.keys(TRIPIE_REGION_BY_LOCATION)[0];
const selectedRegion = Object.keys(TRIPIE_REGION_IDS).filter(
  item =>
    TRIPIE_REGION_IDS[item as keyof typeof TRIPIE_REGION_IDS] ===
    TRIPIE_REGION_BY_LOCATION[currentRegionId as keyof typeof TRIPIE_REGION_BY_LOCATION][0]
)?.[0];

const data: RegionArticleInfo[] = await pureRegionArticles(selectedRegion);

const Articles = () => {
  return (
    <>
      <RegionTitle />
      <RegionSelect selected={currentRegionId} selectedRegion={selectedRegion} />
      <RegionList data={data} />
    </>
  );
};

export default Articles;
