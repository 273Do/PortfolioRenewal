import React from "react";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import YTIcon from "@/public/YTIcon.png";
import { Button } from "@/components/ui/button";

const YTProfile = () => {
  return (
    <div className="flex size-full items-center justify-center gap-16 p-4">
      <div className="flex flex-row">
        <Image
          src={YTIcon}
          width={90}
          height={90}
          alt="myImg"
          className="rounded-full"
        />
        <div className="ml-3">
          <div className="space-y-1">
            <h4 className="text-sm font-medium leading-none">name</h4>
            <p className="text-sm text-muted-foreground">n subscribe</p>
          </div>
          <Separator className="my-4" />
          <div className="flex h-5 items-center space-x-4 text-sm">
            <div>MoGraph</div>
            <Separator orientation="vertical" />
            <div>3DCG</div>
          </div>
        </div>
      </div>
      <Button>
        <a
          href="https://www.youtube.com/channel/UCh4boc9_9Dxiz9QP_VkwGww"
          target="_blank"
          rel="noopener noreferrer"
        >
          Subscribe {">"}
        </a>
      </Button>
    </div>
  );
};

export default YTProfile;
