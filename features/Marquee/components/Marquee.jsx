import * as Icons from "@icons-pack/react-simple-icons";
import { Slot } from "@radix-ui/react-slot";
import React from "react";
import Marquee from "react-fast-marquee";
import iconsData from "./iconData.json";
import tailwindConfig from "@/tailwind.config";

const MarqueeWidget = () => {
  // tailwindConfigから直接カラーを取得
  const gradientColor = tailwindConfig.theme.extend.colors["background"];
  return (
    <>
      <Marquee
        gradient
        gradientColor={gradientColor}
        className="text-muted-foreground"
      >
        {iconsData.map(({ icon, label }) => {
          const IconComponent = Icons[`Si${icon}`]; //ここで型エラーが出るため，jsxにしています．
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
