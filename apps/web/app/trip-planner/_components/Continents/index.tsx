import { AnimatedButton, TripieContainer } from '@tripie-pyotato/design-system';
import classNames from 'classnames/bind';
import { CONTINENTS } from 'constants/continents';
import RESOURCE from 'constants/resources';
import { ContinentKeys } from 'models/Continent';
import { useMemo, useState } from 'react';

import RotatingGlobe from 'shared/components/Globe/RotatingGlobe';
import Icon from 'shared/components/Icon/Icon';
import { ContinentList } from './ContinentLIst';
import Style from './continents.module.scss';

const cx = classNames.bind(Style);

interface Props {
  context: { continent?: ContinentKeys; country?: string; city?: { all: string[]; selected: string[] } };
  continent: ContinentKeys;
  onNext: (country: { continent?: ContinentKeys }) => void;
}

export function ContinentStep({ context, onNext }: Readonly<Props>) {
  const [selectedContinent, setSelectedContinent] = useState<ContinentKeys | 'ALL'>(() =>
    context?.continent == null
      ? 'ALL'
      : Object.values(CONTINENTS).reduce((acc, continent, index) => {
          if (continent.id === context?.continent) return Object.keys(CONTINENTS)[index] as ContinentKeys;
          return acc;
        }, 'ALL' as ContinentKeys)
  );

  const selectedContinentName = useMemo(() => {
    const continentName = Object.keys(CONTINENTS).find(continent => continent === selectedContinent);
    return CONTINENTS[continentName as ContinentKeys];
  }, [selectedContinent]);

  return (
    <>
      <TripieContainer margin="none">
        <h2>
          떠나고 싶은 <span className={cx('accented')}>지역</span>은?
        </h2>
      </TripieContainer>
      <TripieContainer className={cx('globe-wrap')} margin="none">
        <RotatingGlobe />
      </TripieContainer>
      <ContinentList selectedContinent={selectedContinent} action={setSelectedContinent} />
      <TripieContainer margin="none">
        <AnimatedButton
          withBorder={true}
          onClick={() => onNext({ continent: CONTINENTS[selectedContinent]['id'] as ContinentKeys })}
          className={cx('submit-button')}
        >
          <TripieContainer margin="none" className={cx('flex', 'submit-button')}>
            "{selectedContinentName?.name}"{selectedContinentName?.name === '유럽' ? '으' : null}로 보기{' '}
            <Icon src={RESOURCE.ARROW} />
          </TripieContainer>
        </AnimatedButton>
      </TripieContainer>
    </>
  );
}
