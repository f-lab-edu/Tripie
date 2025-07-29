import TextFillAnimation from '@tripie-pyotato/design-system/@components/TextFillAnimation';
import { Background } from '@tripie-pyotato/design-system/@core';
import Container from '@tripie-pyotato/design-system/@core/Container';
import { COLORS } from '@tripie-pyotato/design-system/shared';

export default function AboutUs() {
  return (
    <Background variant={2} gap="sm">
      <Container applyMargin="left-right" margin="m">
        <TextFillAnimation text={`We're a trip planner`} size={'h2'} />
        <TextFillAnimation text={`Enhanced with AI.`} endColor={COLORS[50]} size={'h2'} delay={0.05} />
        <TextFillAnimation text={`We help plan your trips`} size={'h2'} delay={0.05} />
        <TextFillAnimation text={`with the power of AI ✨`} endColor={COLORS[50]} size={'h2'} delay={0.05} />
      </Container>
    </Background>
  );
}
