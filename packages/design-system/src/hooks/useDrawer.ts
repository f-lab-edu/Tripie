import { useState } from "react";

const DRAWER_MODE = {
  OPEN: true,
  CLOSE: false,
} as const;

type DrawerMode = (typeof DRAWER_MODE)[keyof typeof DRAWER_MODE];

export type useDrawerOutput = {
  isOpen: DrawerMode;
  toggle: () => void;
  close: () => void;
};

export const useDrawer = (): useDrawerOutput => {
  const [isOpen, setIsOpen] = useState<DrawerMode>(DRAWER_MODE.CLOSE);

  return {
    isOpen,
    toggle: () => {
      setIsOpen((previous) => !previous);
    },
    close: () => setIsOpen(DRAWER_MODE.CLOSE),
  };
};
