'use client';
import { Button } from '@tripie/design-system';
import ThemeButton from 'components/landing/ThemeButton';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();
  return (
    <>
      <Button onClick={() => router.push('/playground/landing')}>to landing playground</Button>
      <ThemeButton.Toggle />
    </>
  );
}
