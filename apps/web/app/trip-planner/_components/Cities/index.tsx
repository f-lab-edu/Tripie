'use client';
import { AnimatedButton, Headings, Icon, Text } from '@tripie-pyotato/design-system/@components';
import { Container } from '@tripie-pyotato/design-system/@components/core';
import PREFERENCE_LIST from 'constants/preferences';
import { classNames } from 'wrapper';

import { ContinentKeys } from 'models/Continent';
import { useCallback, useMemo, useState } from 'react';

import CityList from './CityList';
import Style from './companion.module.scss';

const cx = classNames.bind(Style);

interface Props {
  context: { continent: ContinentKeys; country: string; city: { all: string[]; selected: string[] } };
  onNext: (cities: string[]) => void;
  onPrev: () => void;
}

export type Preference = keyof typeof PREFERENCE_LIST;

const CityStep = ({ context, onNext, onPrev }: Props) => {
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
      <Container applyMargin="top" margin="l" padding="l" applyPadding="top">
        <Headings.H2>
          <Container margin="none" alignItems="start" justifyContent="start" preserveWhiteSpace={true} gap="sm">
            <Icon.Navigate
              sizes="large"
              onTapStart={() => {
                onPrev();
              }}
            />
            <span>
              내가 여행하고 싶은 <Text.Accented>{'\n'}도시</Text.Accented>는?
            </span>
          </Container>
        </Headings.H2>
      </Container>
      <Container className={cx('cloud-wrap')}>
        {Array.from({ length: 30 }, (_, index) => (
          <Icon.Cloud key={index} index={index} />
        ))}
        <Icon.Plane />
      </Container>
      <CityList cities={cities} selected={selected} setSelected={setSelected} />
      <Container padding="m" applyPadding="bottom" margin="none">
        <AnimatedButton
          withBorder={true}
          isFullSize={true}
          disabled={selected.length === 0}
          onClick={handleSubmit}
          className={cx('submit-button')}
        >
          <span className={cx('flex-text')}>
            {selected.length === 0 ? (
              '다중 선택이 가능해요.'
            ) : (
              <>
                다음 <Icon />
              </>
            )}
          </span>
        </AnimatedButton>
      </Container>
    </>
  );
};

export default CityStep;
