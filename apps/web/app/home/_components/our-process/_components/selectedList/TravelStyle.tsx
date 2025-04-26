'use client';
import { Chip, Icon } from '@tripie-pyotato/design-system/@components';
import { Container } from '@tripie-pyotato/design-system/@core';
import { classNames } from 'wrapper';
import Style from './shared/selected-list.module.scss';

import PREFERENCE_LIST from 'constants/preferences';

import NextButton from 'app/home/_components/our-process/_components/selectedList/shared/NextAnimatedButton';
import { SELECTED_PREFERENCE } from './constants/selected';

const cx = classNames.bind(Style);

const TravelStyleSelect = () => {
  return (
    <Container margin="none">
      <Container margin="none">
        <Container className={cx('wrap')} applyMargin="bottom">
          {Object.values(PREFERENCE_LIST).map((tagName, index) => (
            <Chip
              key={tagName.tag}
              className={cx('button-chip')}
              selected={new Set(SELECTED_PREFERENCE).has(
                Object.keys(PREFERENCE_LIST)[index] as keyof typeof PREFERENCE_LIST
              )}
            >
              {tagName.tag}
            </Chip>
          ))}
        </Container>
      </Container>

      <NextButton>
        다음 <Icon />
      </NextButton>
    </Container>
  );
};

export default TravelStyleSelect;
