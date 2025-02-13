'use client';
import { AnimatedButton, TripieContainer } from '@tripie-pyotato/design-system';
import classNames from 'classnames/bind';
import PREFERENCE_LIST from 'constants/preferences';
import RESOURCE from 'constants/resources';
import { ContinentKeys } from 'models/Continent';
import { useCallback, useMemo, useState } from 'react';
// import AnimatedButton from 'shared/components/Button/Animated';
// import AnimatedButton from 'shared/components/Button/Animated';
import Icon from 'shared/components/Icon/Icon';
import CityList from './CityList';
import Style from './companion.module.scss';

const cx = classNames.bind(Style);

interface Props {
  context: { continent: ContinentKeys; country: string; city: { all: string[]; selected: string[] } };
  onNext: (cities: string[]) => void;
}

export type Preference = keyof typeof PREFERENCE_LIST;

const CityStep = ({ context, onNext }: Props) => {
  // 전체 도시
  const cities = useMemo(() => {
    return context.city.all;
  }, [context]);
  const [selected, setSelected] = useState<Array<string>>(context.city.selected);

  const handleSubmit = useCallback(() => {
    onNext(selected);
  }, [selected]);

  return (
    <>
      <TripieContainer margin="none">
        <TripieContainer margin="none">
          <Icon.Navigate src={RESOURCE.ARROW} />
        </TripieContainer>
        <h2>
          내가 여행하고 싶은 <span className={cx('accented')}>도시</span>는?
        </h2>
      </TripieContainer>
      <TripieContainer className={cx('cloud-wrap')}>
        {Array.from({ length: 30 }, (_, index) => (
          <Icon.Cloud key={index} index={index} />
        ))}
        <Icon.Plane />
      </TripieContainer>
      <CityList cities={cities} selected={selected} setSelected={setSelected} />
      <TripieContainer margin="l" applyMargin="top">
        <AnimatedButton
          withBorder={true}
          disabled={selected.length === 0}
          onClick={handleSubmit}
          className={cx('submit-button')}
        >
          <TripieContainer margin="none" className={cx('flex')}>
            {selected.length === 0 ? (
              '다중 선택이 가능해요.'
            ) : (
              <>
                다음 <Icon src={RESOURCE.ARROW} />
              </>
            )}
          </TripieContainer>
        </AnimatedButton>
      </TripieContainer>
    </>
  );
};

export default CityStep;
