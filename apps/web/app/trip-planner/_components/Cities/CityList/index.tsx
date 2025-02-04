'use client';
import { Chip, Container } from '@tripie-pyotato/design-system';
import classNames from 'classnames/bind';

import { Dispatch, SetStateAction, useMemo } from 'react';

import Icon from 'shared/components/Icon/Icon';

import Style from './city-list.module.scss';

const cx = classNames.bind(Style);

interface CityListProps {
  cities: string[];
  // context?: { continent: ContinentKeys; country: string; city: { all: string[]; selected: string[] } };
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
    <Container margin="none">
      <Icon.Refresh onTapStart={() => setSelected([])} />
      <Container className={cx('scroll')} margin="none">
        <Container className={cx('chip-wrap')} margin="none">
          <Chip className={cx('chip')} selected={allSelected} onClick={() => handleSelect()}>
            전체 선택
          </Chip>
          {cities.map(city => (
            <Chip
              key={city}
              className={cx('chip')}
              selected={new Set(selected).has(city)}
              onClick={() => handleSelect(city)}
            >
              {city}
            </Chip>
          ))}
        </Container>
      </Container>
    </Container>
  );
};

export default CityList;
