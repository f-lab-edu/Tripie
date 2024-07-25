"use client";
import { Headers, Text } from "@tripie/design-system";
import ThemeButton from "../components/ThemeButton";

export default function Home() {
  return (
    <div>
      <ThemeButton />
      <ThemeButton.Toggle />

      <Headers>H1 default</Headers>
      <Headers emphasize={true}>H1 emphasized</Headers>
      <Headers headline={"h1에 대한 헤드라인"}>H1 with headlines</Headers>

      <Headers.H2>H2</Headers.H2>
      <Headers.H3>H3</Headers.H3>
      <Headers.H4>H4</Headers.H4>
      <Text.Paragraph>안녕하세요!</Text.Paragraph>
      <Text preLine={true}>{"안녕하세요!\n줄바꿈이 되나요?"}</Text>
    </div>
  );
}
