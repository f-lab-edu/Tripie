import { useState } from "react";

const DRAWER_MODE = {
  OPEN: true,
  CLOSE: false,
} as const;

type DrawerMode = (typeof DRAWER_MODE)[keyof typeof DRAWER_MODE];

export type UseAppThemeOutput = {
  isOpen: DrawerMode;
  toggle: () => void;
  open: () => void;
  close: () => void;
};

export const useDrawer = (): UseAppThemeOutput => {
  const [isOpen, setIsOpen] = useState<DrawerMode>(DRAWER_MODE.CLOSE);

  return {
    isOpen,
    toggle: () => {
      setIsOpen((previous) => !previous);
    },
    open: () => setIsOpen(DRAWER_MODE.OPEN),
    close: () => setIsOpen(DRAWER_MODE.CLOSE),
  };
};
