'use client';
import { Icon, Notification } from '@tripie-pyotato/design-system/@components';
import Tooltip from '@tripie-pyotato/design-system/@components/Tooltip';
import { Container, Stack, Text } from '@tripie-pyotato/design-system/@core';
import Background from '@tripie-pyotato/design-system/@core/Background';
// import { COLORS } from '@tripie-pyotato/design-system/shared';

// import { useState } from 'react';
export default function PlaygroundContents() {
  // const context = {
  //   continent: 'North America',
  //   country: 'Canada',
  //   city: {
  //     all: [
  //       'Alberta',
  //       'British Columbia',
  //       'Manitoba',
  //       'New Brunswick',
  //       'Newfoundland and Labrador',
  //       'Northwest Territories',
  //       'Nova Scotia',
  //       'Nunavut',
  //       'Ontario',
  //       'Prince Edward Island',
  //       'Quebec',
  //       'Saskatchewan',
  //       'Yukon Territory',
  //     ],
  //     selected: ['Northwest Territories'],
  //   },
  //   duration: '5/28/2025 12:00:00 AM ~ 5/29/2025 11:59:59 PM',
  //   companion: 'PARENTS',
  //   preference: '관광보다 먹방',
  // };

  // const [isToastVisible, setIsToastVisible] = useState(false);

  // const position = 'right';

  return (
    // <Background variant={0}>
    //   other content
    //   <Toast
    //     // position="top-right"
    //     // isOpen={isOpen}
    //     // toggleOpen={toggleOpen}
    //     withBorder={true}
    //   >
    //     {/* <Container ma></Container> */}
    //     popup content
    //   </Toast>
    // </Background>
    <Background variant={0} isFullScreen={true}>
      {/* <Toast interactable={true} withCloseButton={false} toastColor={COLORS['50']}>
        toast content
      </Toast> */}
      <Stack alignItems="center">
        {/* content&nbsp; */}
        {/* <Tooltip
          tooltipColor={COLORS['400']}
          position={position}
          content={
            <Stack padding="none" direction="column">
              <Icon />
            </Stack>
          }
          open={true}
        >
          position: {position}
        </Tooltip> */}
        <Tooltip
          keepMounted={true}
          open={true}
          // arrowPadding={500}
          tooltipPosition={'bottom'}
          renderTitle={
            <Container>
              <Text size="h2" bold={true}>
                Notifications
              </Text>
            </Container>
          }
          renderDescription={() => (
            <>
              <Icon />
              'You are all caught up. Good job!'
            </>
          )}
          triggerChildren={
            <>
              <Icon /> 미리 보기
            </>
          }
        />
      </Stack>
      <Notification>
        <Container padding="sm" margin="none" withBorder={true}>
          hehe
        </Container>
      </Notification>
      {/* <AccentedButton onClick={() => setIsToastVisible(true)}> show Toast</AccentedButton>
      other content */}
      {/* <Button.Accented
        // sizes="medium"
        // disabled={true}
        onClick={() => setIsToastVisible(true)}
      >
        show Toast
      </Button.Accented> */}
      {/* <Button
        // sizes="medium"
        // disabled={true}
        onClick={() => setIsToastVisible(true)}
      >
        show Toast
      </Button> */}
      {/* <FlickTextButton
        withBorder={true}
        // sizes="large"
        onClick={() => setIsToastVisible(true)}
        otherChild={'other child other childother childother childother childother child'}
      >
        child child child child child ch
      </FlickTextButton> */}
      {/* <Button.FlickText
        withBorder={true}
        otherChild={'other child other childother childother childother childother child'}
      >
        child child child child child ch
      </Button.FlickText> */}
      {/* {isToastVisible ? <Toast position={'top-center'}>popup content</Toast> : null} */}
    </Background>
    // <LoadingContents context={context} />
    // <Background variant={0} gap="default" padding="m">
    //   <Stack gap="l" direction="column" margin="none">
    //     <Card.Description margin="xl" applyMargin="left-right" padding="l" className={cx('card-wrap')}>
    //       <AnimatedContainer scrollY={'-50%'}>
    //         {selectedOptions.map((text, index) => (
    //           <Stack key={text.prompt} zIndex="mask" direction="column" margin="none">
    //             <Clouds />

    //             <MotionSlideUp>
    //               <Stack direction="row" applyMargin="bottom">
    //                 <Container margin="none" justifyContent="start" alignItems="start">
    //                   <BlurImageOnLoad
    //                     src={
    //                       'https://res.cloudinary.com/dbzzletpw/image/upload/f_auto,q_auto:good,w_32,h_32,dpr_auto/v1744014743/tripie-image_anglvk'
    //                     }
    //                     alt={'tripie-icon'}
    //                     sizes={'avatar'}
    //                     aspectRatio="square"
    //                   />
    //                   <Card applyMargin={'left'} sizes={'large'}>
    //                     <AnimatedText.Type delay={delays[index]}>{text.prompt}</AnimatedText.Type>
    //                   </Card>
    //                 </Container>
    //               </Stack>
    //               <Container applyMargin="bottom" justifyContent="end" alignItems="end">
    //                 <Stack direction="row">
    //                   <Container margin="none" justifyContent="end" className={cx('wrap')} alignItems="start">
    //                     <Card applyMargin={'right'}>
    //                       <AnimatedText.Type delay={delays[index]}>{text.answer}</AnimatedText.Type>
    //                     </Card>
    //                     <BlurImageOnLoad
    //                       src={
    //                         status === 'loading'
    //                           ? 'https://res.cloudinary.com/dbzzletpw/image/upload/f_auto,q_auto:good,w_32,h_32,dpr_auto/v1744014743/tripie-image_anglvk'
    //                           : data?.user?.picture
    //                       }
    //                       alt={'유저 이미지'}
    //                       sizes={'avatar'}
    //                       aspectRatio="square"
    //                     />
    //                   </Container>
    //                 </Stack>
    //               </Container>
    //             </MotionSlideUp>
    //           </Stack>
    //         ))}
    //       </AnimatedContainer>
    //     </Card.Description>
    //     <Card.Description margin="xl" padding="m" applyMargin={'left-right'} justifyContent={'center'}>
    //       <Text bold={true}>
    //         <Icon.Loading sizes="large" />
    //         <AnimatedText.Jump>여행&nbsp;일정&nbsp;생성&nbsp;중...</AnimatedText.Jump>
    //       </Text>
    //     </Card.Description>
    //   </Stack>
    // </Background>
  );
}
