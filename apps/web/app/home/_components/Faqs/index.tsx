'use client';

import MotionSlideUp from '@tripie-pyotato/design-system/@components/MotionSlideUp';
import Background from '@tripie-pyotato/design-system/@core/Background';
import Container from '@tripie-pyotato/design-system/@core/Container';
import Headings from '@tripie-pyotato/design-system/@core/Headings';

import FaqItem from './Faq';

const FAQS = [
  {
    tag: '트리피는 어떤 서비스를 제공하나요?',
    header: '트리피는 어떤 서비스를 제공하나요?',
    details:
      '트리피는 사용자의 취향을 기반으로 AI 여행 일정을 추천하고, 여행지 별 정보를 제공합니다.\n여행하고자 하는 지역의 꿀팁, 맛집, 쇼핑 목록 등 정보를 살펴볼 수 있습니다.',
  },
  {
    tag: 'AI 추천 일정을 최대 몇 개 요청할 수 있나요?',
    header: 'AI 추천 일정을 최대 몇 개 요청할 수 있나요?',
    details:
      '일반 사용자는 총 10번 사용 가능합니다.\n토큰을 추가로 할당하기 위해서는 mail@tripie-pyotato.com에 문의해주세요.',
  },
  {
    tag: '지도에 위치 좌표가 표시되지 않았어요.',
    header: '지도에 위치 좌표가 표시되지 않았어요.',
    details: 'AWS 지도 보안 상 민감한 위치라 판단된 지역은 표기되지 않은 위치가 있을 수 있습니다.',
  },
];

export default function Faq() {
  return (
    <Background variant={1} padding="m" applyPadding="left-right">
      <Container applyMargin="top-bottom" margin="xl">
        <MotionSlideUp>
          <Headings.H2>FAQ</Headings.H2>
          <Container applyMargin="bottom">
            {FAQS.map(({ tag, header, details }) => (
              <FaqItem tag={tag} header={header} details={details} key={tag} />
            ))}
          </Container>
        </MotionSlideUp>
      </Container>
    </Background>
  );
}
