import Accordion from '@tripie-pyotato/design-system/@components/Accordion';
import MotionSlideUp from '@tripie-pyotato/design-system/@components/MotionSlideUp';
import Background from '@tripie-pyotato/design-system/@core/Background';
import Container from '@tripie-pyotato/design-system/@core/Container';
import Headings from '@tripie-pyotato/design-system/@core/Headings';
import Text from '@tripie-pyotato/design-system/@core/Text';
import ourWorkList from './constants';

export default function OurWork() {
  return (
    <Background applyPadding="top-left-right" padding="m" variant={5} id="Work">
      <Container padding="l" applyPadding="top" margin="none">
        <MotionSlideUp>
          <Headings.H2>
            Our <Text.Accented>work</Text.Accented>
          </Headings.H2>
          <Container applyMargin="bottom">
            {ourWorkList.map(({ year, tag, header, details }) => (
              <Accordion key={tag}>
                <Accordion.Header>
                  <Text.Accented size="tiny" noGapUnderText={true}>
                    {year}
                  </Text.Accented>
                  <Container
                    display="inline-flex"
                    margin="sm"
                    alignItems="center"
                    applyMargin="bottom"
                    justifyContent="start"
                    gap="sm"
                  >
                    <Text size="h3" noGapUnderText={true} bold={true}>
                      {header}
                    </Text>
                    <Accordion.Icon sizes="large" cloudinaryUrl="https://media.tripie-api.shop" />
                  </Container>
                </Accordion.Header>
                <Accordion.Divider />
                <Container padding="m" applyMargin="bottom" applyPadding="top-bottom">
                  <Accordion.Body>
                    <Container applyMargin="bottom">{details}</Container>
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
