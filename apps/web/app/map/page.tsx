'use client';
import { Container } from '@tripie/design-system';
import GoogleMap from 'components/Maps/GoogleMap';

export default function Maps() {
  return (
    <Container margin="none">
      <GoogleMap></GoogleMap>
    </Container>
  );
}
