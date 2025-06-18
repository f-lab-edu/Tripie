'use client';
import { Button } from '@tripie-pyotato/design-system/@components/Button';
import Icon from '@tripie-pyotato/design-system/@components/Icon';
import Stack from '@tripie-pyotato/design-system/@core/Stack';
import NextButton from 'app/home/_components/OurProcess/SelectedList/shared/NextAnimatedButton';
import { CONTINENTS } from 'constants/continents';
import { ContinentKeys } from 'models/Continent';
import { SELECTED_CONTINENT, SELECTED_CONTINENT_NAME } from './constants/selected';

const ContinentSelect = () => {
  return (
    <>
      <Stack
        display="grid"
        cols={2}
        gap="l"
        applyMargin="bottom"
        margin="sm"
        gridRepeat={{
          'wrap-md': 4,
        }}
      >
        {Object.keys(CONTINENTS).map(continent => (
          <Button selected={SELECTED_CONTINENT === continent} sizes="large" key={JSON.stringify(continent)}>
            {CONTINENTS[continent as ContinentKeys].name}
          </Button>
        ))}
      </Stack>
      <NextButton>
        "{SELECTED_CONTINENT_NAME?.name}"{SELECTED_CONTINENT_NAME?.name === '유럽' ? '으' : null}로 보기 <Icon />
      </NextButton>
    </>
  );
};

export default ContinentSelect;
