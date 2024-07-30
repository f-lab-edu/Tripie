"use client";
import { MyButton, Text, useAppTheme } from "@tripie/design-system";

const ThemeButton = () => {
  const { mode, setMode } = useAppTheme();
  return (
    <MyButton onClick={() => setMode(null)}>
      <Text>os control</Text>
    </MyButton>
  );
};

const ToggleButton = () => {
  const { mode, toggle } = useAppTheme();
  if (mode == null) {
    return (
      <MyButton onClick={toggle}>
        <Text>{`user control`}</Text>
      </MyButton>
    );
  }
  return (
    <MyButton onClick={toggle}>
      <Text>{`to ${mode === "dark" ? "light" : "dark"}`}</Text>
    </MyButton>
  );
};

ThemeButton.Toggle = ToggleButton;

export default ThemeButton;
