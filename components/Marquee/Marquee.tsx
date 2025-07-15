import Marquee from "react-fast-marquee";

import * as Icons from "@icons-pack/react-simple-icons";
import { Slot } from "@radix-ui/react-slot";
import { CircleX } from "lucide-react";

import { cn } from "@/lib/utils";

const MarqueeWidget = ({
  iconName,
  direction = "left",
  mode = "default",
  className,
}: {
  iconName: string[];
  direction?: "left" | "right";
  mode?: "detail" | "default";
  className?: string;
}) => {
  return (
    <Marquee
      className={cn("items-center text-foreground sm:py-3", className)}
      gradient={true}
      gradientColor="hsl(var(--background))"
      loop={0}
      direction={direction}
    >
      {iconName.map((icon: string) => {
        const IconComponent = (
          Icons as unknown as Record<string, React.ComponentType>
        )[`Si${icon}`];

        if (typeof IconComponent === "undefined")
          return (
            <div
              key={icon}
              className={cn(
                `${mode === "default" ? "sm:px-6" : "sm:px-4"}`,
                "px-0"
              )}
            >
              <Slot className="h-12 w-1/2 sm:w-full">
                <CircleX color="red" />
              </Slot>
            </div>
          );

        return (
          <div
            key={icon}
            className={cn(
              `${mode === "default" ? "sm:px-6" : "sm:px-4"}`,
              "px-0"
            )}
          >
            <Slot className="h-12 w-1/2 sm:w-full">
              <IconComponent />
            </Slot>
          </div>
        );
      })}
    </Marquee>
  );
};

export default MarqueeWidget;
