'use client';

import { Button } from '@tripie-pyotato/design-system/@components';
import { Stack } from '@tripie-pyotato/design-system/@core';

import { Dispatch, SetStateAction, useMemo } from 'react';

interface CityListProps {
  cities: string[];
  selected: Array<string> | [];
  setSelected: Dispatch<SetStateAction<Array<string> | []>>;
}

const CityList = ({ cities, selected, setSelected }: CityListProps) => {
  //  전체 선택 시 true, 아닐 시 false
  const allSelected = useMemo(() => {
    return cities.every(city => new Set(selected).has(city));
  }, [selected]);

  // 칩 클릭시 선택 여부에 따라 선택 도시들에서 제거 혹은 추가해줍니다.
  const handleSelect = (city?: string) => {
    const selectedSet = new Set(selected);
    // city 파람을 전달하지 않은 경우 전체 선택을 클릭
    if (city == null) {
      // 모든 도시 선택이 된 상태? 전체 해제 :  전체 선택
      cities.every(city => selectedSet.has(city)) ? setSelected([]) : setSelected(cities);
      return;
    }
    // 특정 도시 선택
    if (selectedSet.has(city)) {
      // 선택한 도시들 중 파람으로 넘긴 city를 제거합니다.
      setSelected(selected.filter(selectedCities => selectedCities !== city));
    } else {
      // 선택 도시에 추가
      setSelected([...selected, city]);
    }
  };

  return (
    <Stack display="grid" margin="none" cols={2} gap="l" gridWrapOn={{ 'wrap-sm': 1 }} gridRepeat={{ 'wrap-md': 4 }}>
      <Button sizes={'large'} colorVariant={'chip'} selected={allSelected} onClick={() => handleSelect()}>
        전체 선택
      </Button>
      {cities.map(city => (
        <Button
          colorVariant={'chip'}
          key={city}
          sizes={'large'}
          selected={new Set(selected).has(city)}
          onClick={() => handleSelect(city)}
        >
          {city}
        </Button>
      ))}
    </Stack>
  );
};

export default CityList;
