import React from "react";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import myImg from "@/public/myImg.jpg";

const Profile = () => {
  return (
    <div className="flex flex-row ">
      <Image
        src={myImg}
        width={90}
        height={90}
        alt="myImg"
        className="rounded-full"
      />
      <div className="ml-3">
        <div className="space-y-1">
          <h4 className="text-sm font-medium leading-none">
            273*(ツナサンド) / Kei.
          </h4>
          <p className="text-sm text-muted-foreground">
            Department of Information and Computer Science
          </p>
        </div>
        <Separator className="my-4" />
        <div className="flex h-5 items-center space-x-4 text-sm">
          <div>Web Develop</div>
          <Separator orientation="vertical" />
          <div>Sensor Analysis</div>
          <Separator orientation="vertical" />
          <div>MoGraph</div>
          <Separator orientation="vertical" />
          <div>3DCG</div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
