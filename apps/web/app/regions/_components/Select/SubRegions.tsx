'use client';

import { FlickTextButton } from '@tripie-pyotato/design-system/@components';
import { Stack } from '@tripie-pyotato/design-system/@core';
import { classNames } from '@tripie-pyotato/design-system/@wrappers';

import { TRIPIE_REGION_BY_LOCATION, TRIPIE_REGION_IDS } from 'constants/tripie-country';

import { useRouter } from 'next/navigation';
import { Dispatch, SetStateAction, startTransition, useEffect } from 'react';
import Style from './sub-region-select.module.scss';

const cx = classNames.bind(Style);

const SubRegions = ({
  selected,
  selectedRegion,
  setSplash,
}: {
  selected: string;
  selectedRegion?: string;
  setSplash: Dispatch<SetStateAction<boolean>>;
}) => {
  const navigate = useRouter();

  // Prefetch all sub-region routes on mount for instant navigation
  useEffect(() => {
    const locations = TRIPIE_REGION_BY_LOCATION[selected as keyof typeof TRIPIE_REGION_BY_LOCATION] || [];
    locations.forEach(place => {
      const locationId = Object.keys(TRIPIE_REGION_IDS).find(
        key => TRIPIE_REGION_IDS[key as keyof typeof TRIPIE_REGION_IDS] === place
      );
      if (locationId) {
        navigate.prefetch(`/regions/${selected}/location/${locationId}`);
      }
    });
  }, [selected, navigate]);

  // 상위 항목의 하위 항목 선택 -> 해당 상위/location/하위 route로 이동
  const handleRegionSelect = (place: string) => {
    const selectedLocation = Object.keys(TRIPIE_REGION_IDS).find(
      key => TRIPIE_REGION_IDS[key as keyof typeof TRIPIE_REGION_IDS] === place
    );
    setSplash(true);
    startTransition(() => {
      navigate.push(`/regions/${selected}/location/${selectedLocation}`);
    });
  };

  return (
    <Stack
      display="grid"
      margin="m"
      className={cx('options')}
      cols={2}
      gridRepeat={{ 'wrap-sm': 4 }}
      gap="l"
      applyMargin="top"
    >
      {TRIPIE_REGION_BY_LOCATION[selected as keyof typeof TRIPIE_REGION_BY_LOCATION].map(place => (
        <FlickTextButton
          key={place}
          sizes="large"
          selected={
            TRIPIE_REGION_IDS[selectedRegion as keyof typeof TRIPIE_REGION_IDS] === place || selectedRegion === place
          }
          withBorder={true}
          stretched={true}
          onClick={() => handleRegionSelect(place)}
        >
          {place}
        </FlickTextButton>
      ))}
    </Stack>
  );
};
export default SubRegions;
