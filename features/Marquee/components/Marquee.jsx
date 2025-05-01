import React from "react";
import Marquee from "react-fast-marquee";

import * as Icons from "@icons-pack/react-simple-icons";
import { Slot } from "@radix-ui/react-slot";
import { CircleX } from "lucide-react";

import tailwindConfig from "@/tailwind.config";

const MarqueeWidget = ({ technologyData }) => {
  // tailwindConfigから直接カラーを取得
  const gradientColor = tailwindConfig.theme.extend.colors["background"];
  let iconsData;
  if (technologyData.length === 0) {
    return <p>loading...</p>;
  } else {
    iconsData = Array(10)
      .fill()
      .map((_, index) => technologyData[`tech${index}`])
      .filter((icon) => icon !== null);

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
            if (icon === "") return;
            else if (typeof IconComponent === "undefined")
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
  }
};

export default MarqueeWidget;
