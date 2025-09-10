"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  useTheme,
  type ColorMode,
  type GeneralTheme,
} from "@/components/ThemeProvider";
import { Moon, Sun, Monitor, Palette, Check } from "lucide-react";
import { useEffect, useState } from "react";
import { GENERAL_THEMES } from "./constants/THEMES";

const COLOR_MODES = {
  light: { icon: Sun, label: "Light", className: "text-yellow-500" },
  dark: { icon: Moon, label: "Dark", className: "text-blue-400" },
  system: { icon: Monitor, label: "System", className: "text-primary" },
} as const;

export function ThemeSwitcher() {
  const { colorMode, generalTheme, setColorMode, setGeneralTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="rounded-full border border-primary/30 shadow-sm hover:bg-primary hover:text-primary-foreground"
        >
          <Palette className="h-5 w-5 text-primary" />
          <span className="sr-only">Customize themes</span>
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end" className="w-56">
        <DropdownMenuLabel>Color Mode</DropdownMenuLabel>
        {Object.entries(COLOR_MODES).map(([mode, config]) => {
          const Icon = config.icon;
          return (
            <DropdownMenuItem
              key={mode}
              onClick={() => setColorMode(mode as ColorMode)}
              className="flex items-center gap-2 cursor-pointer"
            >
              <Icon className={`h-4 w-4 ${config.className}`} />
              <span className="flex-1">{config.label}</span>
              {colorMode === mode && <Check className="h-4 w-4" />}
            </DropdownMenuItem>
          );
        })}

        <DropdownMenuSeparator />

        <DropdownMenuLabel>General Style</DropdownMenuLabel>
        {Object.entries(GENERAL_THEMES).map(([key, theme]) => (
          <DropdownMenuItem
            key={key}
            onClick={() => setGeneralTheme(key as GeneralTheme)}
            className="flex items-center gap-2 cursor-pointer"
          >
            <div
              className={`h-3 w-3 rounded-full border-2 border-primary/50 ${theme.cssClass}`}
            >
              <div className="h-full w-full rounded-full bg-primary/20" />
            </div>
            <div className="flex-1">
              <div className="font-medium">{theme.name}</div>
              <div className="text-xs text-muted-foreground">
                {theme.description}
              </div>
            </div>
            {generalTheme === key && <Check className="h-4 w-4" />}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
