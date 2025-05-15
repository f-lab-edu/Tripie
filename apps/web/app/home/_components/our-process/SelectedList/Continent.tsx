'use client';
import { Chip, Icon } from '@tripie-pyotato/design-system/@components';
import { Stack } from '@tripie-pyotato/design-system/@core';
import { classNames } from 'wrapper';
import Style from './shared/selected-list.module.scss';

import { CONTINENTS } from 'constants/continents';

import { ContinentKeys } from 'models/Continent';

import NextButton from 'app/home/_components/our-process/SelectedList/shared/NextAnimatedButton';

import { SELECTED_CONTINENT, SELECTED_CONTINENT_NAME } from './constants/selected';

const cx = classNames.bind(Style);

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
          <Chip
            selected={SELECTED_CONTINENT === continent}
            className={cx('button-chip')}
            key={JSON.stringify(continent)}
          >
            {CONTINENTS[continent as ContinentKeys].name}
          </Chip>
        ))}
      </Stack>
      <NextButton>
        "{SELECTED_CONTINENT_NAME?.name}"{SELECTED_CONTINENT_NAME?.name === '유럽' ? '으' : null}로 보기 <Icon />
      </NextButton>
    </>
  );
};

export default ContinentSelect;
