import { Container } from '@tripie-pyotato/design-system';
import classNames from 'classnames/bind';

import Icon from 'shared/components/Icon/Icon';

import PREFERENCE_LIST from 'constants/preferences';
import RESOURCE from 'constants/resources';
import { ContinentKeys } from 'models/Continent';
import { useCallback, useState } from 'react';
import AnimatedButton from 'shared/components/Button/AnimatedButton';
import PreferenceList from './List';
import Style from './companion.module.scss';

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
}

export type Preference = keyof typeof PREFERENCE_LIST;

const PreferenceFunnel = ({ context, onNext }: Props) => {
  const [selected, setSelected] = useState<Array<Preference> | []>(
    context?.preference == null ? [] : (context.preference.split(',') as Array<Preference>)
  );

  const handleSubmit = useCallback(() => {
    onNext(selected.join(','));
  }, [selected]);

  return (
    <>
      <Container margin="none">
        <Container margin="none">
          <Icon.Navigate src={RESOURCE.ARROW} />
        </Container>
        <h2>
          내가 선호하는 여행 <span className={cx('accented')}>스타일</span>은?
        </h2>
      </Container>
      <Container className={cx('cloud-wrap')}>
        {Array.from({ length: 30 }, (_, index) => (
          <Icon.Cloud key={index} index={index} />
        ))}

        <Icon.Plane />
      </Container>
      <PreferenceList context={context} selected={selected} setSelected={setSelected} />
      <Container margin="l" applyMargin="top">
        <AnimatedButton
          withBorder={true}
          disabled={selected.length === 0}
          onClick={handleSubmit}
          className={cx('submit-button')}
        >
          <Container margin="none" className={cx('flex')}>
            {selected.length === 0 ? (
              '다중 선택이 가능해요.'
            ) : (
              <>
                다음 <Icon src={RESOURCE.ARROW} />
              </>
            )}
          </Container>
        </AnimatedButton>
      </Container>
    </>
  );
};

export default PreferenceFunnel;
