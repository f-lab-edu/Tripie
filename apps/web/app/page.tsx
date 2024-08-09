"use client";
import { Drawer, Headers, Text } from "@tripie/design-system";
import Container from "@tripie/design-system/components/container/_container";
import UnstyledLink from "@tripie/design-system/components/typography/link/_link";
import Paragraph from "@tripie/design-system/components/typography/paragraph/_paragraph";
import ThemeButton from "../components/ThemeButton";

export default function Home() {
  const text =
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis\npariatur, ab voluptates saepe eum at excepturi, eaque accusamus labore\ntemporibus ex nostrum in hic iure porro quod doloribus deleniti! Qui.\ntemporibus ex nostrum in hic iure porro quod doloribus deleniti!";
  return (
    <>
      <ThemeButton />
      <ThemeButton.Toggle />

      <Headers>H1 emphasized</Headers>
      <Headers.H1>H1 with headlines</Headers.H1>
      <Text>Wrapped by Layout - default</Text>
      <Container align="center">
        <Text>Wrapped by Layout - center</Text>
      </Container>

      <Container align="right">
        <Text>Wrapped by Layout - right</Text>
      </Container>
      <Headers.H2>H2</Headers.H2>
      <Headers.H3>H3</Headers.H3>
      <Headers.H4>H4</Headers.H4>
      <Container align="center">
        <Text>{text}</Text>
        <Container applyMargin="top">
          <Paragraph>{text}</Paragraph>
        </Container>
      </Container>
      <UnstyledLink href="/">떡볶이</UnstyledLink>
      <Drawer>
        <div>show contents</div>
        <div>:)</div>
      </Drawer>
    </>
  );
}
