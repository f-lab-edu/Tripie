"use client";
import { Button, Text, useAppTheme } from "@tripie/design-system";

const ThemeButton = () => {
  const { setMode } = useAppTheme();
  return (
    <Button onClick={() => setMode(null)}>
      <Text>os control</Text>
    </Button>
  );
};

const ToggleButton = () => {
  const { mode, toggle } = useAppTheme();
  if (mode == null) {
    return (
      <Button onClick={toggle}>
        <Text>{`user control`}</Text>
      </Button>
    );
  }
  return (
    <Button onClick={toggle}>
      <Text>{`to ${mode === "dark" ? "light" : "dark"}`}</Text>
    </Button>
  );
};

ThemeButton.Toggle = ToggleButton;

export default ThemeButton;
