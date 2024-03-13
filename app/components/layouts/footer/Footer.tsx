"use client";

import React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  SiX,
  SiGithub,
  SiYoutube,
  SiInstagram,
} from "@icons-pack/react-simple-icons";

const Footer = () => {
  const { setTheme } = useTheme();

  return (
    <div className="fixed bottom-0 z-50 w-full border-t border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center justify-center">
        <p>273DoWorks</p>
        <nav className="fixed right-0 mr-10 flex items-center justify-end gap-4">
          <SiGithub className="size-[1.2rem] duration-150 hover:opacity-50" />
          <SiX className="size-[1.2rem] duration-150 hover:opacity-50" />
          <SiYoutube className="size-[1.2rem] duration-150 hover:opacity-50" />
          <SiInstagram className="size-[1.2rem] duration-150 hover:opacity-50" />
          <div className="ml-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Sun className="size-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                  <Moon className="absolute size-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                  <span className="sr-only">Toggle theme</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => setTheme("light")}>
                  Light
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("dark")}>
                  Dark
                </DropdownMenuItem>
                {/* <DropdownMenuItem onClick={() => setTheme("system")}>
                System
              </DropdownMenuItem> */}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Footer;
