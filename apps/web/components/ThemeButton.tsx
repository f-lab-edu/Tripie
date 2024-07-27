"use client";
import { MyButton, Text, useAppTheme } from "@tripie/design-system";

const ThemeButton = () => {
  const { setMode } = useAppTheme();
  return (
    <MyButton onClick={() => setMode(null)}>
      <Text>os control</Text>
    </MyButton>
  );
};

const ToggleButton = () => {
  const { mode, toggle } = useAppTheme();
  return (
    <MyButton onClick={toggle}>
      <Text>to {mode === "dark" || mode == null ? "light" : "dark"}</Text>
    </MyButton>
  );
};

ThemeButton.Toggle = ToggleButton;

export default ThemeButton;
