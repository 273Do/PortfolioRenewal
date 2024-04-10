import * as Icons from "@icons-pack/react-simple-icons";
import { Slot } from "@radix-ui/react-slot";
import React from "react";
import Marquee from "react-fast-marquee";
// import iconsData from "./iconData.json";
import tailwindConfig from "@/tailwind.config";
import { CircleX } from "lucide-react";

const MarqueeWidget = ({ technologyData }) => {
  // tailwindConfigから直接カラーを取得
  const gradientColor = tailwindConfig.theme.extend.colors["background"];

  // const [data] = technologyData;
  // const [tech0, tech1, tech2, tech3, tech4, tech5, tech6, tech7, tech8, tech9] =
  //   technologyData[0];

  const iconsData = Array(10)
    .fill()
    .map((_, index) => technologyData[0][`tech${index}`])
    .filter((icon) => icon !== null);
  console.log(iconsData);

  return (
    <>
      <Marquee
        gradient
        gradientColor={gradientColor}
        className="text-muted-foreground"
      >
        {iconsData.map((icon) => {
          const IconComponent = Icons[`Si${icon}`]; //ここで型エラーが出るため，jsxにしています．
          // スペルミスなど，該当する技術がなければ代わりのものを表示．
          if (typeof IconComponent === "undefined")
            return (
              <div key={icon} className="px-3">
                <Slot className="h-10 w-full">
                  <CircleX color="red" />
                </Slot>
              </div>
            );
          else
            return (
              <div key={icon} className="px-3">
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
