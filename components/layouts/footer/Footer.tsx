"use client";
import React, { useState } from "react";

import { Moon, Palette, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import { useMaterial } from "@/contexts/MaterialContext";
import type { MaterialType } from "@/contexts/types";

const Footer = () => {
  const thisYear = new Date().getFullYear();
  const { theme, setTheme } = useTheme();

  const { toggleMaterial } = useMaterial();
  const materialTypes: MaterialType[] = [
    "dot",
    "ascii",
    "none",
    // "metal",
    // "wireframe",
  ];

  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const handleClick = () => {
    const nextIndex = (currentIndex + 1) % materialTypes.length;
    setCurrentIndex(nextIndex);
    toggleMaterial(materialTypes[nextIndex]);
  };

  return (
    <div className="fixed bottom-0 z-[200] flex h-12 w-full items-center justify-center">
      <p className="text-sm">©2023-{thisYear} 273DoWorks</p>
      <div className="fixed right-0 mr-3 flex sm:mr-12">
        <Button
          variant="ghost"
          size="icon"
          className="hidden size-8 sm:block"
          onClick={handleClick}
        >
          <Palette className="gaming size-[1.2rem]" strokeWidth={2.25} />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="size-8"
          onClick={() => setTheme(`${theme === "dark" ? "light" : "dark"}`)}
        >
          <Sun className="size-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute size-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </div>
    </div>
  );
};

export default Footer;
