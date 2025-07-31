'use client';

import Card from '@tripie-pyotato/design-system/@components/Card';
import { classNames, useInView } from '@tripie-pyotato/design-system/@wrappers';

import RegionList from './RegionList';
import Subscription from './Subscription';

import { Container } from '@tripie-pyotato/design-system/@core';
import dynamic from 'next/dynamic';
import TripieIcon from 'shared/components/TripieIcon/TripieIcon';
import Style from './service-list.module.scss';

const cx = classNames.bind(Style);

const TripieGlobe = dynamic(() => import('../../../../shared/components/TripieGlobe').then(mod => mod.default), {
  ssr: false,
  loading: () => <TripieIcon variant="loading" />,
});

function GlobeCard() {
  const { ref, inView } = useInView({ threshold: 0 });

  return (
    <Container margin="none" padding="none" ref={ref}>
      <Card.Description className={cx('content-wrap')} padding={'none'} margin={'none'}>
        {inView ? <TripieGlobe /> : <></>}
      </Card.Description>
    </Container>
  );
}

const serviceList = [
  {
    label: '구독하기',
    content: (
      <Card.Description padding={'m'}>
        <Subscription />
      </Card.Description>
    ),
    description:
      'Basic 플랜으로 ai가 추천해주는 맛보기 일정을 이용해보세요!\nPro 플랜으로 새 일정을 하루에 최대 X개 추천받아보실 수 있습니다.',
  },
  {
    label: 'AI 추천 맞춤 일정',
    content: <GlobeCard />,
    description: '트리피 회원이신가요? 취향에 맞게 일정을 추천해 드립니다!\n 순식간에 여행 준비 끝!',
  },

  {
    label: '도시별 여행 정보',
    content: (
      <Card.Description padding={'m'} margin="none" applyPadding={'left-right'} className={cx('info-wrap')}>
        <RegionList />
      </Card.Description>
    ),
    description:
      '어디로 떠날 지 정하셨나요? 아직 고민 중이거나 여행지에 대해 아직 낯설다면 위치 정보부터, 주변 맛집, 여행 팁을 살펴보세요.',
  },
];

export default serviceList;
