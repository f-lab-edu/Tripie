"use client";
import { MyButton, useAppTheme } from "@tripie/design-system";

const ThemeButton = () => {
  const { setControl } = useAppTheme();
  return (
    <MyButton onClick={() => setControl("os_default")}>os default</MyButton>
  );
};

const ToggleButton = () => {
  const { mode, toggle } = useAppTheme();
  return (
    <MyButton onClick={toggle}>
      to {mode === "dark" ? "light" : "dark"}
    </MyButton>
  );
};

ThemeButton.Toggle = ToggleButton;

export default ThemeButton;
