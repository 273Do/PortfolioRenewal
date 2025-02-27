import React from "react";

import Image from "next/image";

import { Separator } from "@/components/ui/separator";
import myImg from "@/public/myImg.jpg";

const Profile = () => {
  return (
    <div className="flex flex-row p-2">
      <Image
        src={myImg}
        width={90}
        height={90}
        alt="myImg"
        className="rounded-full"
      />
      <div className="ml-2 sm:ml-3">
        <div className="space-y-1">
          <h4 className="text-sm font-medium leading-none">
            273*(ツナサンド) / Kei.
          </h4>
          <p className="text-xs text-muted-foreground sm:text-sm">
            Web Engineer / Designer
          </p>
        </div>
        <Separator className="my-1 sm:my-4" />
        <div className="mt-3 flex h-5 items-center space-x-3 text-xs sm:mt-0 sm:text-sm">
          <div>Web Develop</div>
          <Separator orientation="vertical" />
          <div>Sensor Analysis</div>
          <Separator orientation="vertical" />
          <div>Design</div>
          <Separator orientation="vertical" />
          <div>3DCG</div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
