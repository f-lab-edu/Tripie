import { useEffect } from "react";
import { useLocalStorage, useMediaQuery } from "usehooks-ts";

const COLOR_SCHEME_QUERY = "(prefers-color-scheme: dark)";

const THEME_MODE = {
  DARK: "dark",
  LIGHT: "light",
} as const;

const CONTROL_MODE = {
  USER: "user",
  OS_DEFAULT: "os_default",
} as const;

type ThemeMode = (typeof THEME_MODE)[keyof typeof THEME_MODE];
type ControlMode = (typeof CONTROL_MODE)[keyof typeof CONTROL_MODE];

type UseAppThemeOutput = {
  mode: ThemeMode;
  toggle: () => void;
  setLight: () => void;
  setDark: () => void;
  setMode: (mode: ThemeMode) => void;
  setControl: (control: ControlMode) => void;
};

export const useAppTheme = (): UseAppThemeOutput => {
  const isDarkOS = useMediaQuery(COLOR_SCHEME_QUERY);
  const osPrefersMode = isDarkOS ? THEME_MODE.DARK : THEME_MODE.LIGHT;
  const [themeMode, setThemeMode] = useLocalStorage<ThemeMode>(
    "app-theme",
    osPrefersMode
  );
  const [themeControl, setThemeControl] = useLocalStorage<ControlMode>(
    "control-theme",
    CONTROL_MODE.OS_DEFAULT
  );

  useEffect(() => {
    const root = document?.documentElement;

    if (themeControl === "os_default") {
      setThemeMode(isDarkOS ? THEME_MODE.DARK : THEME_MODE.LIGHT);
    }
    root.dataset.theme = themeMode;
  }, [isDarkOS, osPrefersMode, themeControl, themeMode]);

  return {
    mode: themeMode,
    toggle: () => {
      setThemeControl("user");
      setThemeMode((previous) =>
        previous === THEME_MODE.DARK ? THEME_MODE.LIGHT : THEME_MODE.DARK
      );
    },
    setLight: () => setThemeMode(THEME_MODE.LIGHT),
    setDark: () => setThemeMode(THEME_MODE.DARK),
    setMode: (mode) => setThemeMode(mode),
    setControl: (control) => setThemeControl(control),
  };
};
