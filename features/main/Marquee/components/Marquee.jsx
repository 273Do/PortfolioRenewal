"use client";

import * as Icons from "@icons-pack/react-simple-icons";
import { Slot } from "@radix-ui/react-slot";
import React from "react";
import Marquee from "react-fast-marquee";
import { useTheme } from "next-themes";
import iconsData from "./iconData.json";

const MarqueeWidget = () => {
  const { theme } = useTheme();
  return (
    <>
      <Marquee
        gradient
        gradientColor={`${theme === "dark" ? "#0a0a0b" : "#ffffff"}`}
        className="text-muted-foreground"
      >
        {iconsData.map(({ icon, label }) => {
          const IconComponent = Icons[icon]; //ここで型エラーが出るため，jsxにしています．
          return (
            <div key={label} className="px-3">
              <Slot className="h-10 w-full">
                <IconComponent />
              </Slot>
            </div>
          );
        })}
      </Marquee>
    </>
  );
};

export default MarqueeWidget;
