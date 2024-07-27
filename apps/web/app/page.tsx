"use client";
import { Headers, Text } from "@tripie/design-system";
import ThemeButton from "../components/ThemeButton";

export default function Home() {
  const text =
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis\npariatur, ab voluptates saepe eum at excepturi, eaque accusamus labore\ntemporibus ex nostrum in hic iure porro quod doloribus deleniti! Qui.\ntemporibus ex nostrum in hic iure porro quod doloribus deleniti!";
  return (
    <div>
      <ThemeButton />
      <ThemeButton.Toggle />

      <Headers emphasize={true}>H1 emphasized</Headers>
      <Headers.H1>H1 with headlines</Headers.H1>

      <Headers.H2>H2</Headers.H2>
      <Headers.H3>H3</Headers.H3>
      <Headers.H4>H4</Headers.H4>
      <Text>{text}</Text>
      <Text.Paragraph>{text}</Text.Paragraph>
    </div>
  );
}
