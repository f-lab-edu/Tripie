"use client";
import { Button, Headers, Text } from "@tripie/design-system";
import Container from "@tripie/design-system/components/container/_container";
import UnstyledLink from "@tripie/design-system/components/typography/link/_link";
import Paragraph from "@tripie/design-system/components/typography/paragraph/_paragraph";
import ThemeButton from "../components/ThemeButton";

export default function Home() {
  const text =
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis\npariatur, ab voluptates saepe eum at excepturi, eaque accusamus labore\ntemporibus ex nostrum in hic iure porro quod doloribus deleniti! Qui.\ntemporibus ex nostrum in hic iure porro quod doloribus deleniti!";
  return (
    <Container margin="sm">
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
      <Container align="center">
        <Button.ToolTip
          iconOnClick={
            "M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
          }
          icon={
            "M2.43.265c-.3 0-.548.236-.573.53h-.328a.74.74 0 0 0-.735.734v3.822a.74.74 0 0 0 .735.734H4.82a.74.74 0 0 0 .735-.734V1.529a.74.74 0 0 0-.735-.735h-.328a.58.58 0 0 0-.573-.53zm0 .529h1.49c.032 0 .049.017.049.049v.431c0 .032-.017.049-.049.049H2.43c-.032 0-.05-.017-.05-.049V.843c0-.032.018-.05.05-.05zm-.901.53h.328c.026.292.274.528.573.528h1.49a.58.58 0 0 0 .573-.529h.328a.2.2 0 0 1 .206.206v3.822a.2.2 0 0 1-.206.205H1.53a.2.2 0 0 1-.206-.205V1.529a.2.2 0 0 1 .206-.206z"
          }
          tooltipContentOnHover={"hovered!"}
          tooltipContentOnClick={"clicked!"}
        />
      </Container>
    </Container>
  );
}
