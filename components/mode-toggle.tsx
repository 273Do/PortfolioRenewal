"use client";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(`${theme === "dark" ? "light" : "dark"}`)}
    >
      {theme === "dark" ? (
        <Sun className="size-[1.2rem]" />
      ) : (
        <Moon className="size-[1.2rem]" />
      )}
    </Button>
  );
}
