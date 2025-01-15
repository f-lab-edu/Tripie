'use client';
import { Container } from '@tripie-pyotato/design-system';
import classNames from 'classnames/bind';

import Style from './regions.module.scss';

import RegionList, { RegionArticleData } from 'app/regions/[regionId]/_components/RegionList';
import RegionSelect from 'app/regions/[regionId]/_components/RegionSelect';
import { TRIPIE_REGION_BY_LOCATION, TRIPIE_REGION_IDS } from 'constants/tripie-country';
import useCountryArticle from 'hooks/query/useCountryArticles';
import Card from 'shared/components/Card/Card';

const cx = classNames.bind(Style);

const RegionInfo = () => {
  const randomIndex = Math.floor(Math.random() * 10);
  const currentRegionId = Object.keys(TRIPIE_REGION_BY_LOCATION).filter((_, index) => {
    if (randomIndex === index) {
      return true;
    }
    if (randomIndex < 0 || randomIndex >= Object.keys(TRIPIE_REGION_BY_LOCATION).length) {
      return true;
    }
  })[0];
  const selected = TRIPIE_REGION_BY_LOCATION[currentRegionId as keyof typeof TRIPIE_REGION_BY_LOCATION];

  const selectedRegion = Object.keys(TRIPIE_REGION_IDS).filter(
    item => TRIPIE_REGION_IDS[item as keyof typeof TRIPIE_REGION_IDS] === selected[0]
  )?.[0];

  const { data } = useCountryArticle() as { data: RegionArticleData[] };

  if (data == null) {
    return <></>;
  }

  return (
    <Card.Content className={cx('region-info-wrap')}>
      <Container className={cx('card-content-wrap')} margin="none">
        <Container margin="none" className={cx('card-region-wrap')}>
          <RegionSelect selected={currentRegionId} selectedRegion={selectedRegion} />
          <Container margin="none">
            <RegionList
              data={data.filter(item => item.regionId === selectedRegion)?.[0].data}
              selectedRegion={selectedRegion}
            />
          </Container>
        </Container>
      </Container>
    </Card.Content>
  );
};

export default RegionInfo;
