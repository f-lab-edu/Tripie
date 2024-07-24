"use client";
import { MyButton } from "@tripie/design-system";
import { useAppTheme } from "@tripie/hooks";

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
