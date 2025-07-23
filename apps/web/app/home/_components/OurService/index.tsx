'use client';

import MotionSlideUp from '@tripie-pyotato/design-system/@components/MotionSlideUp';
import Background from '@tripie-pyotato/design-system/@core/Background';
import Container from '@tripie-pyotato/design-system/@core/Container';
import Headings from '@tripie-pyotato/design-system/@core/Headings';
import Stack from '@tripie-pyotato/design-system/@core/Stack';
import Text from '@tripie-pyotato/design-system/@core/Text';
import ServiceCard from './ServiceCard';
import serviceList from './ServiceList';

export default function OurService() {
  return (
    <Background variant={4} id="Services" padding="m" applyPadding="top-left-right">
      <MotionSlideUp>
        <Container applyMargin="top" margin="l">
          <Headings.H2>
            Our <Text.Accented>services</Text.Accented>
          </Headings.H2>
        </Container>
      </MotionSlideUp>
      <Stack
        margin="none"
        gap="l"
        gridWrapOn={{ 'wrap-md': 1 }}
        display="grid"
        gridRepeat={{ 'wrap-lg': 2 }}
        stretchGridLastChild={true}
      >
        {serviceList.map(({ label, content, description }) => (
          <ServiceCard key={label} label={label} content={content} description={description} />
        ))}
      </Stack>
    </Background>
  );
}
