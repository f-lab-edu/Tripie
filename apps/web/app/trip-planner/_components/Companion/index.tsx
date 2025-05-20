'use client';
import { Icon } from '@tripie-pyotato/design-system/@components';
import { Text } from '@tripie-pyotato/design-system/@core';

import COMPANION_LIST from 'constants/companions';

import { ContinentKeys } from 'models/Continent';
import { ReactNode, useState } from 'react';
import Layout from '../Layout/Layout';
import CompanionList from './CompanionList';
import SubmitBtn from './SubmitBtn';

interface Props {
  context?: {
    continent: ContinentKeys;
    country: string;
    city: { all: string[]; selected: string[] };
    duration: string;
    companion?: string;
  };
  onNext: (companion: string) => void;
  onPrev: () => void;
  progress: ReactNode;
}

export type Companion = keyof typeof COMPANION_LIST;

const CompanionStep = ({ context, onNext, onPrev, progress }: Props) => {
  const [selected, setSelected] = useState<Array<Companion> | []>(
    context?.companion == null ? [] : (context.companion.split(',') as Array<Companion>)
  );

  return (
    <Layout
      navigateIcon={
        <Icon.Navigate
          sizes="large"
          onTapStart={() => {
            onPrev();
          }}
        />
      }
      heading={
        <>
          <Text.Accented>누구</Text.Accented>와 떠나나요? {progress}
        </>
      }
      decor={
        <>
          {Array.from({ length: 30 }, (_, index) => (
            <Icon.Cloud key={index} index={index} />
          ))}
          <Icon.Plane />
        </>
      }
      refreshIcon={<Icon.Refresh onTapStart={() => setSelected([])} />}
      listItems={<CompanionList context={context} selected={selected} setSelected={setSelected} />}
      submitButton={<SubmitBtn onNext={onNext} selected={selected} />}
    />
  );
};

export default CompanionStep;
