'use client';

import Accordion from '@tripie-pyotato/design-system/@components/Accordion';
import MotionSlideUp from '@tripie-pyotato/design-system/@components/MotionSlideUp';
import Background from '@tripie-pyotato/design-system/@core/Background';
import Container from '@tripie-pyotato/design-system/@core/Container';
import Headings from '@tripie-pyotato/design-system/@core/Headings';
import Text from '@tripie-pyotato/design-system/@core/Text';
import API from 'constants/api-routes';

const FAQS = [
  {
    label: 'About Tripie',
    content: '트리피는 어떤 서비스를 제공하나요?',
    description:
      '트리피는 사용자의 취향을 기반으로 AI 여행 일정을 추천하고, 여행지 별 정보를 제공합니다.\n여행하고자 하는 지역의 꿀팁, 맛집, 쇼핑 목록 등 정보를 살펴볼 수 있습니다.',
  },
  {
    label: 'AI',
    content: 'AI 추천 일정을 최대 몇 개 요청할 수 있나요?',
    description:
      '일반 사용자는 총 10번 사용 가능합니다.\n토큰을 추가로 할당하기 위해서는 mail@tripie-pyotato.com에 문의해주세요.',
  },
  {
    label: 'Maps',
    content: '지도에 위치 좌표가 표시되지 않았어요.',
    description: 'AWS 지도 보안 상 민감한 위치라 판단된 지역은 표기되지 않은 위치가 있을 수 있습니다.',
  },
];

export default function Faq() {
  return (
    <Background applyPadding="top-left-right" padding="m" variant={1} id="Work">
      <Container padding="l" applyPadding="top" margin="none">
        <MotionSlideUp>
          <Headings.H2>FAQ</Headings.H2>
          <Container applyMargin="bottom">
            {FAQS.map(({ label, description, content }) => (
              <Accordion key={label}>
                <Accordion.Header>
                  <Text.Accented size="tiny" noGapUnderText={true}>
                    {label}
                  </Text.Accented>
                  <Container
                    display="inline-flex"
                    margin="sm"
                    alignItems="center"
                    applyMargin="bottom"
                    justifyContent="start"
                    gap="sm"
                  >
                    <Text size="h4" noGapUnderText={true} bold={true}>
                      {content}
                    </Text>
                    <Accordion.Icon sizes="large" cloudinaryUrl={API.MEDIA_URL} />
                  </Container>
                </Accordion.Header>
                <Accordion.Divider />
                <Container padding="m" applyMargin="bottom" applyPadding="top-bottom">
                  <Accordion.Body>
                    <Container applyMargin="bottom">{description}</Container>
                  </Accordion.Body>
                </Container>
              </Accordion>
            ))}
          </Container>
        </MotionSlideUp>
      </Container>
    </Background>
  );
}
