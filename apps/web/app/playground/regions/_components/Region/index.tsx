'use client';

import { TRIPIE_REGION_BY_LOCATION, TRIPIE_REGION_IDS } from 'constants/tripie-country';
import useCountryArticle from 'hooks/query/useCountryArticles';
import { useEffect, useState } from 'react';
import { RegionList } from '../List';
import { RegionSelect } from '../Select';

export function RegionArticles({ param }: Readonly<{ param?: string }>) {
  const { data, isLoading } = useCountryArticle();
  const [selected, setSelected] = useState<string>(Object.keys(TRIPIE_REGION_BY_LOCATION)[0]);
  const [selectedRegion, setSelectedRegion] = useState<string>(
    TRIPIE_REGION_BY_LOCATION[Object.keys(TRIPIE_REGION_BY_LOCATION)[0] as keyof typeof TRIPIE_REGION_BY_LOCATION][0]
  );

  useEffect(() => {
    if (param != null) {
      const paramRegion = Object.keys(TRIPIE_REGION_BY_LOCATION).filter(key =>
        TRIPIE_REGION_BY_LOCATION[key as keyof typeof TRIPIE_REGION_BY_LOCATION].includes(
          TRIPIE_REGION_IDS[param as keyof typeof TRIPIE_REGION_IDS]
        )
      )?.[0];
      if (paramRegion != null) {
        setSelected(paramRegion);
      }
      setSelectedRegion(TRIPIE_REGION_IDS[param as keyof typeof TRIPIE_REGION_IDS]);
    }
  }, [param]);

  return (
    <>
      <RegionSelect
        selected={selected}
        isLoading={isLoading}
        setSelected={setSelected}
        selectedRegion={selectedRegion}
        setSelectedRegion={setSelectedRegion}
      />
      <RegionList data={data} selected={selected} selectedRegion={selectedRegion} />
    </>
  );
}
