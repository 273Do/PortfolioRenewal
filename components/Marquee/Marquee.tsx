import Marquee from "react-fast-marquee";

import * as Icons from "@icons-pack/react-simple-icons";
import { Slot } from "@radix-ui/react-slot";
import { CircleX } from "lucide-react";

const MarqueeWidget = ({
  iconName,
  direction,
}: {
  iconName: string[];
  direction?: "left" | "right";
}) => {
  return (
    <Marquee
      className="items-center py-3 text-foreground"
      gradient={true}
      gradientColor="hsl(var(--background))"
      loop={0}
      delay={2}
      direction={direction || "left"}
    >
      {iconName.map((icon: string) => {
        const IconComponent = (
          Icons as unknown as Record<string, React.ComponentType>
        )[`Si${icon}`];

        if (typeof IconComponent === "undefined")
          return (
            <div key={icon} className="px-3">
              <Slot className="h-12 w-full">
                <CircleX color="red" />
              </Slot>
            </div>
          );

        return (
          <div key={icon} className="px-6">
            <Slot className="h-12 w-full">
              <IconComponent />
            </Slot>
          </div>
        );
      })}
    </Marquee>
  );
};

export default MarqueeWidget;
