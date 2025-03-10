'use client';
import { Card, Container } from '@tripie-pyotato/design-system';
import classNames from 'classnames/bind';

import Style from './region-info.module.scss';

import RegionList, { RegionArticleData } from 'app/regions/_components/RegionList';
import RegionSelect from 'app/regions/_components/Select';
import { TRIPIE_REGION_BY_LOCATION, TRIPIE_REGION_IDS } from 'constants/tripie-country';
import useCountryArticle from 'hooks/query/useCountryArticles';

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

  const { data } = useCountryArticle() as unknown as { data: RegionArticleData[] };

  if (data == null) {
    return <></>;
  }

  return (
    <Card.Content className={cx('card-wrap', 'scroll')}>
      <Container className={cx('card-content-wrap')} margin="none">
        <Container margin="none" className={cx('card-region-wrap')}>
          <RegionSelect selected={currentRegionId} selectedRegion={selectedRegion} />
          <Container margin="none">
            <RegionList
              data={data.filter(item => item.regionId === selectedRegion)?.[0]?.data}
              selectedRegion={selectedRegion}
            />
          </Container>
        </Container>
      </Container>
    </Card.Content>
  );
};

export default RegionInfo;
