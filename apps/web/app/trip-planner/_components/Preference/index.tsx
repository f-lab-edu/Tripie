import { AnimatedButton, Icon } from '@tripie-pyotato/design-system/@components';
import { Container, Headings, Text } from '@tripie-pyotato/design-system/@core';
import { classNames } from 'wrapper';

import PREFERENCE_LIST from 'constants/preferences';

import { ContinentKeys } from 'models/Continent';
import { useCallback, useState } from 'react';
import PreferenceList from './PreferenceList';
import Style from './preference.module.scss';

const cx = classNames.bind(Style);

interface Props {
  context?: {
    continent: ContinentKeys;
    country: string;
    city: { all: string[]; selected: string[] };
    duration: string;
    companion: string;
    preference?: string;
  };
  onNext: (preference: string) => void;
  onPrev: () => void;
}

export type Preference = keyof typeof PREFERENCE_LIST;

const PreferenceStep = ({ context, onNext, onPrev }: Props) => {
  const [selected, setSelected] = useState<Array<Preference> | []>(
    context?.preference == null ? [] : (context.preference.split(',') as Array<Preference>)
  );

  const handleSubmit = useCallback(() => {
    onNext(selected.join(','));
  }, [selected]);

  return (
    <>
      <Container applyMargin="top" margin="l" padding="l" applyPadding="top">
        <Headings.H2 className={cx('flex-text')}>
          <Icon.Navigate
            sizes="large"
            onTapStart={() => {
              onPrev();
            }}
          />
          <Container
            margin="none"
            // preserveWhiteSpace={true}
          >
            내가 선호하는 여행 <Text.Accented>{'\n'}스타일</Text.Accented>은?
          </Container>
        </Headings.H2>
      </Container>
      <Container className={cx('cloud-wrap')}>
        {Array.from({ length: 30 }, (_, index) => (
          <Icon.Cloud key={index} index={index} />
        ))}
        <Icon.Plane />
      </Container>
      <PreferenceList selected={selected} setSelected={setSelected} />
      <Container padding="m" applyPadding="bottom" margin="none">
        <AnimatedButton isFullSize={true} withBorder={true} disabled={selected.length === 0} onClick={handleSubmit}>
          <span className={cx('flex')}>
            {selected.length === 0 ? (
              '다중 선택이 가능해요.'
            ) : (
              <>
                다음 <Icon />
              </>
            )}
          </span>
        </AnimatedButton>
      </Container>
    </>
  );
};

export default PreferenceStep;
