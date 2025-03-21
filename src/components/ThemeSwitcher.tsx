"use client";

import { Button } from "@/components/ui/button";
import { useTheme } from "@/components/ThemeProvider";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      className="rounded-full border border-primary shadow-md"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {theme === "dark" ? (
        <Sun className="h-5 w-5 text-yellow-500" />
      ) : (
        <Moon className="h-5 w-5 text-primary" />
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
