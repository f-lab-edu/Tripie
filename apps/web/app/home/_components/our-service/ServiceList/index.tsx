'use client';

import { Card, Globe } from '@tripie-pyotato/design-system/@components';
import { Container, Headings, Text } from '@tripie-pyotato/design-system/@core';

import { classNames } from 'wrapper';
import RegionInfo from '../RegionInfo';
import Subscription from './Subscription';
import Style from './service-list.module.scss';

const cx = classNames.bind(Style);

const serviceList = [
  {
    label: '구독하기',
    content: (
      <Card.Content className={cx('content-wrap')}>
        <Subscription />
      </Card.Content>
    ),
    description:
      'Basic 플랜으로 ai가 추천해주는 맛보기 일정을 이용해보세요!\n Pro 플랜으로 새 일정을 하루에 최대 X개 추천받아보실 수 있습니다.',
  },
  {
    label: 'AI 추천 맞춤 일정',
    content: (
      <Card.Content className={cx('content-wrap')}>
        <Globe />
      </Card.Content>
    ),
    description: '트리피 회원이신가요? 취향에 맞게 일정을 추천해 드립니다! 순식간에 여행 준비 끝!',
  },

  {
    label: '도시별 여행 정보',
    content: (
      <Container margin="none" className={cx('info-wrap')}>
        <RegionInfo />
      </Container>
    ),
    description:
      '어디로 떠날 지 정하셨나요? 아직 고민 중이거나 여행지에 대해 아직 낯설다면 위치 정보부터, 주변 맛집, 여행 팁을 살펴보세요.',
  },
];

export default function ServiceList() {
  return serviceList.map(({ label, content, description }) => (
    <Card key={label}>
      {content}
      <Card.Description>
        {label != null ? (
          <Container applyMargin="top-bottom" margin="sm">
            <Headings.H3>{label}</Headings.H3>
          </Container>
        ) : null}
        <Container margin="none" className={cx('description-wrap')}>
          <Text margin="none" preserveWhiteSpace="m" alignItems={'start'}>
            {description}
          </Text>
        </Container>
      </Card.Description>
    </Card>
  ));
}
