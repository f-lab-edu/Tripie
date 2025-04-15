'use client';
import { Chip, Container, Icon } from '@tripie-pyotato/design-system/@components';
import { classNames } from 'wrapper';
import Style from './shared/selected-list.module.scss';

import COMPANION_LIST from 'constants/companions';

import NextButton from 'app/home/_components/our-process/_components/selectedList/shared/NextAnimatedButton';
import { SELECTED_COMPANION } from './constants/selected';

const cx = classNames.bind(Style);

const CompanionSelect = () => {
  return (
    <Container margin="none">
      <Container margin="none" className={cx('card-region-wrap')}>
        <Container className={cx('wrap')} applyMargin="bottom">
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
        </Container>
      </Container>

      <NextButton>
        다음 <Icon />
      </NextButton>
    </Container>
  );
};

export default CompanionSelect;
