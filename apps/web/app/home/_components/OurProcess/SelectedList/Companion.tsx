'use client';
import { Button } from '@tripie-pyotato/design-system/@components/Button';
import Icon from '@tripie-pyotato/design-system/@components/Icon';
import { Stack } from '@tripie-pyotato/design-system/@core';
import { classNames } from '@tripie-pyotato/design-system/@wrappers';

import NextButton from 'app/home/_components/OurProcess/SelectedList/shared/NextAnimatedButton';
import COMPANION_LIST from 'constants/companions';
import { SELECTED_COMPANION } from './constants/selected';

import Style from './shared/selected-list.module.scss';

const cx = classNames.bind(Style);

const CompanionSelect = () => {
  return (
    <>
      <Stack
        display="grid"
        cols={2}
        gridRepeat={{
          'wrap-md': 4,
        }}
        gap="l"
        applyMargin="bottom"
        margin="sm"
      >
        {Object.values(COMPANION_LIST).map((tagName, index) => (
          <Button
            sizes="large"
            key={tagName.tag}
            className={cx('button-chip')}
            selected={new Set(SELECTED_COMPANION).has(
              Object.keys(COMPANION_LIST)[index] as keyof typeof COMPANION_LIST
            )}
          >
            {tagName.tag}
          </Button>
        ))}
      </Stack>

      <NextButton>
        다음 <Icon />
      </NextButton>
    </>
  );
};

export default CompanionSelect;
