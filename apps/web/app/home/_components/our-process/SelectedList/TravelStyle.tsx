'use client';
import { Chip, Icon } from '@tripie-pyotato/design-system/@components';
import { Stack } from '@tripie-pyotato/design-system/@core';
import { classNames } from 'wrapper';
import Style from './shared/selected-list.module.scss';

import PREFERENCE_LIST from 'constants/preferences';

import NextButton from 'app/home/_components/our-process/SelectedList/shared/NextAnimatedButton';
import { SELECTED_PREFERENCE } from './constants/selected';

const cx = classNames.bind(Style);

const TravelStyleSelect = () => {
  return (
    <>
      <Stack
        display="grid"
        gap="l"
        applyMargin="bottom"
        margin="sm"
        cols={2}
        gridRepeat={{
          'wrap-md': 4,
          // 'wrap-xl': 6,
        }}
      >
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
      </Stack>

      <NextButton>
        다음 <Icon />
      </NextButton>
    </>
  );
};

export default TravelStyleSelect;
