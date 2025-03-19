'use server';

import { Params } from 'app/parse-params';
import RegionList from 'app/regions/_components/RegionList';
import regionPageParamData from 'app/regions/regions-page-param.data';

const Articles = async ({ params }: { params: Promise<Params> }) => {
  const { dynamicBlurDataUrl } = await regionPageParamData({ params });
  return <RegionList data={dynamicBlurDataUrl} />;
};

export default Articles;
