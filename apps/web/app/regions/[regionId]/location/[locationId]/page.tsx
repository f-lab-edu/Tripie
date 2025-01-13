'use server';
import { Container } from '@tripie-pyotato/design-system';
import classNames from 'classnames/bind';

import listCountryArticles from 'app/api/firebase/getArticles';

import Navigation from '../../../_components/Navigation';
import Style from '../../../regions.module.scss';
import RegionList, { RegionArticleData } from '../../_components/RegionList';
import RegionSelect from '../../_components/RegionSelect';

const cx = classNames.bind(Style);

const Articles = async ({ params }: { params: Promise<{ locationId: string; regionId: string }> }) => {
  const locationId = (await params).locationId;
  const regionId = (await params).regionId;

  const currentRegionId = decodeURI(regionId);
  const currentLocationId = decodeURI(locationId);

  const data = (await listCountryArticles('region-articles')) as RegionArticleData[];

  return (
    <Container margin="none" className={cx('background')}>
      <Container margin="none">
        <Navigation />
        <h2>
          도시 별<span className={cx('accented')}> 여행 </span>정보
        </h2>
      </Container>
      <RegionSelect selected={currentRegionId} selectedRegion={currentLocationId} />
      <RegionList data={data.filter(item => item.regionId === locationId)?.[0].data} selectedRegion={locationId} />
    </Container>
  );
};

export default Articles;
