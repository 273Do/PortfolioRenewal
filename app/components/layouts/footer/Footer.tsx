"use client";
import React from "react";

import { Moon, Sparkles, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";

const Footer = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div className="fixed bottom-0 z-50 flex h-14 w-full items-center justify-center border-t border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <p className="">273DoWorks</p>
      <div className="fixed right-0 mr-3 flex gap-2 sm:mr-12">
        <Button
          variant="ghost"
          size="icon"
          // onClick={handleClick}
        >
          <Sparkles className="size-[1.2rem]" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
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
