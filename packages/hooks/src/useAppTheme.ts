import { useEffect, useState } from "react";
import { useLocalStorage, useMediaQuery } from "usehooks-ts";

const COLOR_SCHEME_QUERY = "(prefers-color-scheme: dark)";

const THEME_MODE = {
  DARK: "dark",
  LIGHT: "light",
} as const;

type ThemeMode = (typeof THEME_MODE)[keyof typeof THEME_MODE];

type UseAppThemeOutput = {
  mode: ThemeMode;
  toggle: () => void;
  setLight: () => void;
  setDark: () => void;
  setMode: (mode: ThemeMode) => void;
};

export const useAppTheme = (): UseAppThemeOutput => {
  const isDarkOS = useMediaQuery(COLOR_SCHEME_QUERY);
  const [osPrefersMode] = useState(
    isDarkOS ? THEME_MODE.DARK : THEME_MODE.LIGHT
  );

  const [themeMode, setThemeMode] = useLocalStorage<ThemeMode>(
    "app-theme",
    osPrefersMode ?? THEME_MODE.LIGHT
  );

  useEffect(() => {
    const root = document?.documentElement;
    if (root) {
      root.dataset.theme = themeMode;
    }
  }, [themeMode, isDarkOS]);

  return {
    mode: themeMode,
    toggle: () =>
      setThemeMode((previous) =>
        previous === THEME_MODE.DARK ? THEME_MODE.LIGHT : THEME_MODE.DARK
      ),
    setLight: () => setThemeMode(THEME_MODE.LIGHT),
    setDark: () => setThemeMode(THEME_MODE.DARK),
    setMode: (mode) => setThemeMode(mode),
  };
};
