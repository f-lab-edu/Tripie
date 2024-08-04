import { useEffect } from 'react';
import { useLocalStorage, useMediaQuery } from 'usehooks-ts';

const COLOR_SCHEME_QUERY = '(prefers-color-scheme: dark)';

const THEME_MODE = {
  DARK: 'dark',
  LIGHT: 'light',
  OS_DEFAULT: null,
} as const;

type ThemeMode = (typeof THEME_MODE)[keyof typeof THEME_MODE];

type UseAppThemeOutput = {
  mode: ThemeMode;
  toggle: () => void;
  setMode: (mode: ThemeMode) => void;
};

export const useAppTheme = (): UseAppThemeOutput => {
  const isDarkOS = useMediaQuery(COLOR_SCHEME_QUERY);
  const [themeMode, setThemeMode] = useLocalStorage<ThemeMode>('app-theme', THEME_MODE.OS_DEFAULT);

  useEffect(() => {
    const root = document?.documentElement;
    if (themeMode == null) {
      root.dataset.theme = isDarkOS ? THEME_MODE.DARK : THEME_MODE.LIGHT;
    } else {
      root.dataset.theme = themeMode;
    }
  }, [themeMode, isDarkOS]);

  return {
    mode: themeMode,
    toggle: () => {
      setThemeMode(previous => (previous === THEME_MODE.DARK ? THEME_MODE.LIGHT : THEME_MODE.DARK));
    },
    setMode: mode => setThemeMode(mode),
  };
};
