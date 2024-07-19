import { useEffect, useState } from "react";
import { useLocalStorage, useMediaQuery } from "usehooks-ts";

const COLOR_SCHEME_QUERY = "(prefers-color-scheme: dark)";

const ThemeMode = {
  DARK: "dark",
  LIGHT: "light",
  // SYSTEM: 'system',
} as const;

type TThemeMode = (typeof ThemeMode)[keyof typeof ThemeMode];

type TUseAppThemeOutput = {
  mode: TThemeMode;
  toggle: () => void;
  setLight: () => void;
  setDark: () => void;
  setMode: (mode: TThemeMode) => void;
};

export const useAppTheme = (defaultValue?: TThemeMode): TUseAppThemeOutput => {
  const isDarkOS = useMediaQuery(COLOR_SCHEME_QUERY);
  const [osPrefersMode] = useState(isDarkOS ? ThemeMode.DARK : ThemeMode.LIGHT);
  const [themeMode, setThemeMode] = useLocalStorage<TThemeMode>(
    "app-theme",
    defaultValue ?? osPrefersMode ?? ThemeMode.LIGHT
  );

  // Update darkMode if os prefers changes
  useEffect(() => {
    setThemeMode(osPrefersMode);
  }, [osPrefersMode]);

  useEffect(() => {
    const root = document?.documentElement;
    if (root) {
      root.dataset.theme = themeMode;
    }
  }, [themeMode]);

  return {
    mode: themeMode,
    toggle: () =>
      setThemeMode((previous) =>
        previous === ThemeMode.DARK ? ThemeMode.LIGHT : ThemeMode.DARK
      ),
    setLight: () => setThemeMode(ThemeMode.LIGHT),
    setDark: () => setThemeMode(ThemeMode.DARK),
    setMode: (mode) => setThemeMode(mode),
  };
};
