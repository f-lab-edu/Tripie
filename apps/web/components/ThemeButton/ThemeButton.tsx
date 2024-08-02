"use client";
import { MyButton, useAppTheme } from "@tripie/design-system";

const ThemeButton = () => {
  const { setMode } = useAppTheme();
  // return <button onClick={() => setMode(null)}>os control</button>;
  return <MyButton onClick={() => setMode(null)}>os control</MyButton>; //!! 🥲 <body><div /> </body>인 이유..?
};

const ToggleButton = () => {
  const { mode, toggle } = useAppTheme();
  if (mode == null) {
    return <MyButton onClick={toggle}>user control</MyButton>;
  }
  return (
    <MyButton onClick={toggle}>
      {`to ${mode === "dark" ? "light" : "dark"}`}
    </MyButton>
  );
};

ThemeButton.Toggle = ToggleButton;

export default ThemeButton;
