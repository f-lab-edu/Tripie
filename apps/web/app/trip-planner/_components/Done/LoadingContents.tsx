'use client';
import {
  AnimatedContainer,
  AnimatedText,
  BlurImageOnLoad,
  Card,
  Icon,
  MotionSlideUp,
} from '@tripie-pyotato/design-system/@components';
import { Background, Container, Stack, Text } from '@tripie-pyotato/design-system/@core';
import { classNames } from '../../.../../../../wrapper/classNames';

import { CONTINENTS } from 'constants/continents';
import { TripPlanner } from 'models/Aws';
import { useSession } from 'next-auth/react';
import Clouds from '../../../../shared/components/Clouds';
import Style from './trip-planner.module.scss';

const cx = classNames.bind(Style);

export default function LoadingContents({ context }: Readonly<{ context: TripPlanner }>) {
  const { data, status } = useSession();

  const {
    preference,
    continent,
    city: { selected },
    country,
    companion,
    duration,
  } = context;

  const selectedOptions = [
    { prompt: '아시아, 아프리카, 유럽, 오세아니아, 북미, 남미 중 여행하고 싶은 지역이 있나요?', answer: continent },
    {
      prompt:
        continent != 'ALL'
          ? `${Object.values(CONTINENTS).filter(item => item.id === continent)?.[0]?.name} 내에서 가고 싶은 나라가 정해지셨나요?`
          : '아직 정해진 지약은 없군요! 혹시 끌리는 나라는 있을까요?',
      answer: country,
    },
    {
      prompt: `${country}에서 방문해보고 싶은 도시들이 있나요?`,
      answer: selected.join(', '),
    },
    {
      prompt:
        continent != 'ALL' ? `${selected}를 돌아보는데 어느 정도 기간을 보내시나요?` : '여행 기간은 어떻게 되시나요?',
      answer: duration,
    },
    {
      prompt: `${duration.split(',')} 동안 여행은 혼자인가요 동반하는 인원이 있나요? 동반하는 사람이나 혼자 다녀도 즐거울 여행 계획을 짜드리겠습니다.`,
      answer: companion,
    },
    {
      prompt: `마지막으로 ${companion}와 함께 떠나는 ${selected} 여행은 어떤 테마의 여행이기를 추구하시나요?`,
      answer: preference,
    },
  ];

  const delays = Array.from({ length: selectedOptions.length }, (_, i) => i * 0.01 + 0.05);

  return (
    <Background variant={0} gap="default" padding="m" margin="none">
      <Stack gap="l" direction="column" margin="xl" applyMargin="top">
        <Card.Description margin="none" padding="m" className={cx('card-wrap')}>
          <Container className={cx('cloud-wrap', 'top15')} margin="none">
            <Clouds />
          </Container>
          <Container className={cx('cloud-wrap', 'top60')} margin="none">
            <Clouds.WithPlane />
          </Container>
          <Container className={cx('cloud-wrap', 'top90')} margin="none">
            <Clouds />
          </Container>
          <AnimatedContainer scrollY={'-50%'}>
            {selectedOptions.map((text, index) => (
              <Stack key={text.prompt} zIndex="mask" direction="column" margin="none">
                <MotionSlideUp>
                  <Stack direction="row" applyMargin="bottom">
                    <Container
                      fillAvailable={false}
                      display="inline-flex"
                      margin="none"
                      justifyContent="start"
                      alignItems="start"
                    >
                      <BlurImageOnLoad
                        fillAvailable={false}
                        src={
                          'https://res.cloudinary.com/dbzzletpw/image/upload/f_auto,q_auto:good,w_32,h_32,dpr_auto/v1744014743/tripie-image_anglvk'
                        }
                        alt={'tripie-icon'}
                        sizes={'avatar'}
                        aspectRatio="square"
                      />
                      <Card applyMargin={'left'} sizes={'large'}>
                        <AnimatedText.Type delay={delays[index]}>{text.prompt}</AnimatedText.Type>
                      </Card>
                    </Container>
                  </Stack>
                  <Container display="inline-flex" applyMargin="bottom" justifyContent="end" alignItems="end">
                    <Stack direction="row">
                      <Container
                        display="inline-flex"
                        margin="none"
                        justifyContent="end"
                        className={cx('wrap')}
                        fillAvailable={false}
                        alignItems="start"
                      >
                        <Card applyMargin={'right'}>
                          <AnimatedText.Type delay={delays[index]}>{text.answer}</AnimatedText.Type>
                        </Card>
                        <BlurImageOnLoad
                          fillAvailable={false}
                          src={
                            status === 'loading'
                              ? 'https://res.cloudinary.com/dbzzletpw/image/upload/f_auto,q_auto:good,w_32,h_32,dpr_auto/v1744014743/tripie-image_anglvk'
                              : data?.user?.picture
                          }
                          alt={'유저 이미지'}
                          sizes={'avatar'}
                          aspectRatio="square"
                        />
                      </Container>
                    </Stack>
                  </Container>
                </MotionSlideUp>
              </Stack>
            ))}
          </AnimatedContainer>
        </Card.Description>
        <Card.Description margin="none" padding="m" justifyContent={'center'} display="inline-flex">
          <Container justifyContent={'center'} display="inline-flex" alignItems="center" gap="default">
            <Icon.Loading sizes="large" />
            <Text bold={true}>
              <AnimatedText.Jump>여행&nbsp;일정&nbsp;생성&nbsp;중...</AnimatedText.Jump>
            </Text>
          </Container>
        </Card.Description>
      </Stack>
    </Background>
  );
}
