'use client';

import { Button } from '@tripie-pyotato/design-system/@components/Button';
import Icon from '@tripie-pyotato/design-system/@components/Icon';
import Stack from '@tripie-pyotato/design-system/@core/Stack';
import NextButton from 'app/home/_components/OurProcess/SelectedList/shared/NextAnimatedButton';
import PREFERENCE_LIST from 'constants/preferences';
import { SELECTED_PREFERENCE } from './constants/selected';

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
          'wrap-md': 3,
          'wrap-xl': 4,
        }}
      >
        {Object.values(PREFERENCE_LIST).map((tagName, index) => (
          <Button
            sizes="large"
            key={tagName.tag}
            selected={new Set(SELECTED_PREFERENCE).has(
              Object.keys(PREFERENCE_LIST)[index] as keyof typeof PREFERENCE_LIST
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

export default TravelStyleSelect;
