'use server';
import { Container } from '@tripie-pyotato/design-system';
import classNames from 'classnames/bind';

import firestoreService from 'app/api/firebase';
import Navigation from '../../../_components/Navigation';
import RegionList, { RegionArticleData } from '../../../_components/RegionList';
import RegionSelect from '../../../_components/RegionSelect';
import Style from '../../../_components/shared/regions.module.scss';

const cx = classNames.bind(Style);

const Articles = async ({ params }: { params: Promise<{ locationId: string; regionId: string }> }) => {
  const locationId = (await params).locationId;
  const regionId = (await params).regionId;

  const currentRegionId = decodeURI(regionId);
  const currentLocationId = decodeURI(locationId);

  const data = await firestoreService.getList('region-articles');

  return (
    <Container margin="none" className={cx('background')}>
      <Container margin="none">
        <Navigation />
        <h2>
          도시 별<span className={cx('accented')}> 여행 </span>정보
        </h2>
      </Container>
      <RegionSelect selected={currentRegionId} selectedRegion={currentLocationId} />
      <RegionList
        data={data.filter((item: RegionArticleData) => item.regionId === locationId)?.[0].data}
        selectedRegion={locationId}
      />
    </Container>
  );
};

export default Articles;
