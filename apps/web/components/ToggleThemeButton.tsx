"use client";
import { MyButton } from "@tripie/design-system";
import { useAppTheme } from "@tripie/hooks";

export default function ToggleThemeButton() {
  const { toggle } = useAppTheme();
  return <MyButton onClick={toggle}>toggle theme</MyButton>;
}
