'use client';
import { Container } from '@tripie-pyotato/design-system';
import classNames from 'classnames/bind';
import PREFERENCE_LIST from 'constants/preferences';
import RESOURCE from 'constants/resources';
import { ContinentKeys } from 'models/Continent';
import { useCallback, useMemo, useState } from 'react';
import AnimatedButton from 'shared/components/Button/Animated';
import Icon from 'shared/components/Icon/Icon';
import CityList from './List';
import Style from './companion.module.scss';

const cx = classNames.bind(Style);

interface Props {
  context: { continent: ContinentKeys; country: string; city: { all: string[]; selected: string[] } };
  onNext: (cities: string[]) => void;
}

export type Preference = keyof typeof PREFERENCE_LIST;

const CityFunnel = ({ context, onNext }: Props) => {
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
      <Container margin="none">
        <Container margin="none">
          <Icon.Navigate src={RESOURCE.ARROW} />
        </Container>
        <h2>
          내가 여행하고 싶은 <span className={cx('accented')}>도시</span>는?
        </h2>
      </Container>
      <Container className={cx('cloud-wrap')}>
        {Array.from({ length: 30 }, (_, index) => (
          <Icon.Cloud key={index} index={index} />
        ))}
        <Icon.Plane />
      </Container>
      <CityList cities={cities} selected={selected} setSelected={setSelected} />
      <Container margin="l" applyMargin="top">
        <AnimatedButton
          withBorder={true}
          disabled={selected.length === 0}
          onClick={handleSubmit}
          className={cx('submit-button')}
        >
          <Container margin="none" className={cx('flex')}>
            {selected.length === 0 ? (
              '다중 선택이 가능해요.'
            ) : (
              <>
                다음 <Icon src={RESOURCE.ARROW} />
              </>
            )}
          </Container>
        </AnimatedButton>
      </Container>
    </>
  );
};

export default CityFunnel;
