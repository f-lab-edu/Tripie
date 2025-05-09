'use client';
import { Chip, Icon } from '@tripie-pyotato/design-system/@components';
import { Stack } from '@tripie-pyotato/design-system/@core';
import { classNames } from 'wrapper';
import Style from './shared/selected-list.module.scss';

import COMPANION_LIST from 'constants/companions';

import NextButton from 'app/home/_components/our-process/SelectedList/shared/NextAnimatedButton';
import { SELECTED_COMPANION } from './constants/selected';

const cx = classNames.bind(Style);

const CompanionSelect = () => {
  return (
    <>
      <Stack
        display="grid"
        cols={2}
        gridRepeat={{
          'wrap-md': 4,
          // 'wrap-xl': 6,
        }}
        gap="l"
        applyMargin="bottom"
        margin="sm"
      >
        {Object.values(COMPANION_LIST).map((tagName, index) => (
          <Chip
            key={tagName.tag}
            className={cx('button-chip')}
            selected={new Set(SELECTED_COMPANION).has(
              Object.keys(COMPANION_LIST)[index] as keyof typeof COMPANION_LIST
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

export default CompanionSelect;
