'use client';
import '@tripie/design-system/global';
import { TestFramer } from 'components/home/TestFramer/TestFramer';
import ThemeButton from 'components/home/ThemeButton';

export default function Home() {
  return (
    <>
      <ThemeButton.Toggle />
      <TestFramer />
    </>
  );
}
