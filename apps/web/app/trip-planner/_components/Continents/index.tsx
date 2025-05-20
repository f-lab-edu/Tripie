import { AnimatedButton, Globe, Icon } from '@tripie-pyotato/design-system/@components';
import { Container, Text } from '@tripie-pyotato/design-system/@core';
import { CONTINENTS } from 'constants/continents';

import { ContinentKeys } from 'models/Continent';
import { ReactNode, useMemo, useState } from 'react';

import Layout from '../Layout/Layout';
import { ContinentList } from './ContinentLIst';

interface Props {
  context: { continent?: ContinentKeys; country?: string; city?: { all: string[]; selected: string[] } };
  continent: ContinentKeys;
  progress: ReactNode;
  onNext: (country: { continent?: ContinentKeys }) => void;
}

export default function ContinentStep({ context, onNext, progress }: Readonly<Props>) {
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
    <Layout
      heading={
        <>
          떠나고 싶은 <Text.Accented isButtonText>지역</Text.Accented>은? {progress}
        </>
      }
      listItems={<ContinentList selectedContinent={selectedContinent} action={setSelectedContinent} />}
      submitButton={
        <Container applyMargin={'top'}>
          <AnimatedButton
            isFullSize={true}
            withBorder={true}
            onClick={() => onNext({ continent: CONTINENTS[selectedContinent]['id'] as ContinentKeys })}
          >
            <Text isButtonText={true}>
              "{selectedContinentName?.name}"{selectedContinentName?.name === '유럽' ? '으' : null}로 보기 <Icon />
            </Text>
          </AnimatedButton>
        </Container>
      }
    >
      <Globe width={300} height={300} />
    </Layout>
  );
}
