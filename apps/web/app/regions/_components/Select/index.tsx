'use client';

import { Divider } from '@tripie-pyotato/design-system/@components';
import { Container } from '@tripie-pyotato/design-system/@core';

import { useState } from 'react';
import Loading from 'shared/components/Loading';
import Regions from './Regions';
import SubRegions from './SubRegions';

const RegionSelect = ({ selected, selectedRegion }: { selected: string; selectedRegion?: string }) => {
  const [splash, setSplash] = useState(false);

  return (
    <Container withBorder={true} padding={'m'} margin="m" applyMargin="all">
      {splash ? <Loading.SemiTransparent loading={splash} /> : null}
      <Regions setSplash={setSplash} selected={selected} />
      <Divider />
      <Container margin="none" padding="none">
        <SubRegions setSplash={setSplash} selected={selected} selectedRegion={selectedRegion} />{' '}
      </Container>
    </Container>
  );
};
export default RegionSelect;
