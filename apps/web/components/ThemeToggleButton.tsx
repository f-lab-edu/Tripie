"use client";
import { MyButton } from "@tripie/design-system";
import { useAppTheme } from "@tripie/hooks";

export default function ThemeToggleButton() {
  const { toggle, mode } = useAppTheme();
  return <MyButton onClick={toggle}>{mode} theme</MyButton>;
}
