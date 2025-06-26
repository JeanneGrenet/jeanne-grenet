"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { GENERAL_THEMES } from "./constants/THEMES";

type ColorMode = "light" | "dark" | "system";
type GeneralTheme = "default" | "elegant" | "playful" | "minimal";

interface ThemeContextType {
  colorMode: ColorMode;
  generalTheme: GeneralTheme;
  setColorMode: (mode: ColorMode) => void;
  setGeneralTheme: (theme: GeneralTheme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({
  children,
  storageKey = "portfolio-theme",
}: {
  children: React.ReactNode;
  storageKey?: string;
}) {
  const [mounted, setMounted] = useState(false);
  const [colorMode, setColorMode] = useState<ColorMode>("system");
  const [generalTheme, setGeneralTheme] = useState<GeneralTheme>("default");

  // Chargement initial
  useEffect(() => {
    const saved = localStorage.getItem(storageKey);
    if (saved) {
      try {
        const { colorMode: savedColorMode, generalTheme: savedGeneralTheme } =
          JSON.parse(saved);
        if (savedColorMode) setColorMode(savedColorMode);
        if (savedGeneralTheme) setGeneralTheme(savedGeneralTheme);
      } catch {
        console.error("Failed to parse initial theme");
      }
    }
    setMounted(true);
  }, [storageKey]);

  useEffect(() => {
    if (!mounted) return;

    const root = document.documentElement;
    root.classList.remove("light", "dark");

    const finalMode =
      colorMode === "system"
        ? window.matchMedia("(prefers-color-scheme: dark)").matches
          ? "dark"
          : "light"
        : colorMode;

    root.classList.add(finalMode);
  }, [colorMode, mounted]);

  useEffect(() => {
    if (!mounted) return;

    const root = document.documentElement;
    const themeConfig = GENERAL_THEMES[generalTheme];

    Object.values(GENERAL_THEMES).forEach((theme) => {
      root.classList.remove(theme.cssClass, theme.fontClass);
    });

    root.classList.add(themeConfig.cssClass, themeConfig.fontClass);
  }, [generalTheme, mounted]);

  const saveConfig = (
    newColorMode: ColorMode,
    newGeneralTheme: GeneralTheme
  ) => {
    localStorage.setItem(
      storageKey,
      JSON.stringify({
        colorMode: newColorMode,
        generalTheme: newGeneralTheme,
      })
    );
  };

  const handleSetColorMode = (mode: ColorMode) => {
    setColorMode(mode);
    saveConfig(mode, generalTheme);
  };

  const handleSetGeneralTheme = (theme: GeneralTheme) => {
    setGeneralTheme(theme);
    saveConfig(colorMode, theme);
  };

  return (
    <ThemeContext.Provider
      value={{
        colorMode,
        generalTheme,
        setColorMode: handleSetColorMode,
        setGeneralTheme: handleSetGeneralTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}

export function useGeneralThemeInfo() {
  const { generalTheme } = useTheme();
  return GENERAL_THEMES[generalTheme];
}

export type { ColorMode, GeneralTheme };
