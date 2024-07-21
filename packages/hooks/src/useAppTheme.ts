import { useCallback, useEffect, useState } from "react";
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

export const useAppTheme = (defaultValue?: ThemeMode): UseAppThemeOutput => {
  const isDarkOS = useMediaQuery(COLOR_SCHEME_QUERY);
  const [osPrefersMode] = useState(
    isDarkOS ? THEME_MODE.DARK : THEME_MODE.LIGHT
  );
  const [themeMode, seThemeMode] = useLocalStorage<ThemeMode>(
    "app-theme",
    defaultValue ?? osPrefersMode ?? THEME_MODE.LIGHT
  );

  // os prefer 모드 변경 시 테마 변경
  useCallback(() => {
    seThemeMode(osPrefersMode);
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
      seThemeMode((previous) =>
        previous === THEME_MODE.DARK ? THEME_MODE.LIGHT : THEME_MODE.DARK
      ),
    setLight: () => seThemeMode(THEME_MODE.LIGHT),
    setDark: () => seThemeMode(THEME_MODE.DARK),
    setMode: (mode) => seThemeMode(mode),
  };
};
