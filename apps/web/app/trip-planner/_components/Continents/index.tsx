import { AnimatedButton, Container, Headings, Icon, Text } from '@tripie-pyotato/design-system';
import { CONTINENTS } from 'constants/continents';
import classNames from 'wrapper';

import { ContinentKeys } from 'models/Continent';
import { useMemo, useState } from 'react';

import RotatingGlobe from 'shared/components/Globe/RotatingGlobe';

import { ContinentList } from './ContinentLIst';
import Style from './continents.module.scss';

const cx = classNames.bind(Style);

interface Props {
  context: { continent?: ContinentKeys; country?: string; city?: { all: string[]; selected: string[] } };
  continent: ContinentKeys;
  onNext: (country: { continent?: ContinentKeys }) => void;
}

export default function ContinentStep({ context, onNext }: Readonly<Props>) {
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
      <Container applyMargin="top" margin="l">
        <Headings.H2>
          떠나고 싶은 <Text.Accented>지역</Text.Accented>은?
        </Headings.H2>
      </Container>
      <RotatingGlobe />
      <ContinentList selectedContinent={selectedContinent} action={setSelectedContinent} />

      <AnimatedButton
        withBorder={true}
        className={cx('chip', 'submit-button')}
        onClick={() => onNext({ continent: CONTINENTS[selectedContinent]['id'] as ContinentKeys })}
      >
        <span className={cx('flex-text')}>
          "{selectedContinentName?.name}"{selectedContinentName?.name === '유럽' ? '으' : null}로 보기 <Icon />
        </span>
      </AnimatedButton>
    </>
  );
}
