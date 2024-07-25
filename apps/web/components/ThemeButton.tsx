"use client";
import { MyButton, Text, useAppTheme } from "@tripie/design-system";

const ThemeButton = () => {
  const { setControl } = useAppTheme();
  return (
    <MyButton onClick={() => setControl("os_default")}>
      <Text>os control</Text>
    </MyButton>
  );
};

const ToggleButton = () => {
  const { mode, toggle } = useAppTheme();
  return (
    <MyButton onClick={toggle}>
      <Text>to {mode === "dark" ? "light" : "dark"}</Text>
    </MyButton>
  );
};

ThemeButton.Toggle = ToggleButton;

export default ThemeButton;
