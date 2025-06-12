'use client';

import { Carousel, FlickTextButton } from '@tripie-pyotato/design-system/@components';
import { Stack } from '@tripie-pyotato/design-system/@core';

import { TRIPIE_REGION_BY_LOCATION } from 'constants/tripie-country';
import { useRouter } from 'next/navigation';
import { Dispatch, SetStateAction } from 'react';

const Regions = ({ selected, setSplash }: { selected: string; setSplash: Dispatch<SetStateAction<boolean>> }) => {
  const navigate = useRouter();

  // 상위 항목 선택 -> 해당 지역의 route로 이동
  const handleCategorySelect = (place: string) => {
    if (selected == place) {
      return;
    }
    navigate.push(`/regions/${place}`);
    setSplash(true);
  };

  return (
    <Carousel.Controlled>
      <Stack applyMargin="top-bottom" gap="l" justifyContent="start">
        {Object.keys(TRIPIE_REGION_BY_LOCATION).map(place => (
          <FlickTextButton
            selected={selected === place}
            withBorder={true}
            key={place}
            stretched={true}
            sizes="large"
            onClick={() => handleCategorySelect(place)}
          >
            {place}
          </FlickTextButton>
        ))}
      </Stack>
    </Carousel.Controlled>
  );
};
export default Regions;
