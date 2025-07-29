'use client';
import { Button } from '@tripie-pyotato/design-system/@components/Button';
import Stack from '@tripie-pyotato/design-system/@core/Stack';

import NextButton from 'app/home/_components/OurProcess/SelectedList/shared/NextAnimatedButton';
import COMPANION_LIST from 'constants/companions';
import TripieIcon from 'shared/components/TripieIcon/TripieIcon';
import { SELECTED_COMPANION } from './constants/selected';

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
            selected={new Set(SELECTED_COMPANION).has(
              Object.keys(COMPANION_LIST)[index] as keyof typeof COMPANION_LIST
            )}
          >
            {tagName.tag}
          </Button>
        ))}
      </Stack>

      <NextButton>
        다음 <TripieIcon />
      </NextButton>
    </>
  );
};

export default CompanionSelect;
