'use client';
import { Headers, Text } from '@tripie/design-system';
import UnstyledLink from '@tripie/design-system/components/typography/link/_link';
import Paragraph from '@tripie/design-system/components/typography/paragraph/_paragraph';
import ThemeButton from '../components/ThemeButton/ThemeButton';

export default function Home() {
  const text =
    'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis\npariatur, ab voluptates saepe eum at excepturi, eaque accusamus labore\ntemporibus ex nostrum in hic iure porro quod doloribus deleniti! Qui.\ntemporibus ex nostrum in hic iure porro quod doloribus deleniti!';
  return (
    <div>
      <ThemeButton />
      <ThemeButton.Toggle />

      <Headers>H1 emphasized</Headers>
      <Headers.H1>H1 with headlines</Headers.H1>

      <Headers.H2>H2</Headers.H2>
      <Headers.H3>H3</Headers.H3>
      <Headers.H4>H4</Headers.H4>
      <Text>{text}</Text>
      <Paragraph>{text}</Paragraph>

      <UnstyledLink href="/">떡볶이</UnstyledLink>
    </div>
  );
}
