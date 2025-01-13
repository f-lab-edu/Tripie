'use client';
import { Container } from '@tripie-pyotato/design-system';
import { ContainerProps } from '@tripie-pyotato/design-system/components/container';
import Divider from 'shared/components/Divider/Divider';

export type DividerProps = { type: 'hr1' | 'hr2' | 'hr3' | 'hr4' | 'hr5' };

const HR_MARGINS = {
  hr1: 'l',
  hr2: 'm',
  hr3: 'm',
  hr4: 'sm',
  hr5: 'xsm',
};

const ArticleDivider = ({ item }: { item: DividerProps }) => {
  return (
    <Container applyMargin="top-bottom" margin={HR_MARGINS[item.type] as ContainerProps['margin']}>
      <Divider className={`divider-${item.type}`} />
    </Container>
  );
};

export default ArticleDivider;
