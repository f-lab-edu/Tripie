'use client';
import { Chip, Container, Icon } from '@tripie-pyotato/design-system/@components';
import { classNames } from 'wrapper';
import Style from './shared/selected-list.module.scss';

import { CONTINENTS } from 'constants/continents';

import { ContinentKeys } from 'models/Continent';

import NextButton from 'app/home/_components/our-process/_components/selectedList/shared/NextAnimatedButton';

import { SELECTED_CONTINENT, SELECTED_CONTINENT_NAME } from './constants/selected';

const cx = classNames.bind(Style);

const ContinentSelect = () => {
  return (
    <Container margin="none">
      <Container className={cx('wrap')} applyMargin="bottom">
        {Object.keys(CONTINENTS).map(continent => (
          <Chip
            selected={SELECTED_CONTINENT === continent}
            className={cx('button-chip')}
            key={JSON.stringify(continent)}
          >
            {CONTINENTS[continent as ContinentKeys].name}
          </Chip>
        ))}
      </Container>
      <NextButton>
        "{SELECTED_CONTINENT_NAME?.name}"{SELECTED_CONTINENT_NAME?.name === '유럽' ? '으' : null}로 보기 <Icon />
      </NextButton>
    </Container>
  );
};

export default ContinentSelect;
