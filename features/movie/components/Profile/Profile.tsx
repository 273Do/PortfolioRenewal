"use client";

import React from "react";
import { Separator } from "@/components/ui/separator";
import { useTheme } from "next-themes";
import Image from "next/image";
import iRwImg from "@/public/iRwLogo.png";

const Profile = () => {
  const theme = useTheme();
  return (
    <div className="flex h-full flex-col items-center justify-center gap-4 px-4">
      <Image
        src={iRwImg}
        height={70}
        alt="iRwImg"
        className={`${theme.theme === "light" && "icon_light"}`}
      />
      <Separator className="my-3" />
      <p>
        稀に映像イベントにて別名義で制作した映像を出展しています．かっこいい，かわいい，シンプル，不気味などといったジャンルに縛られない様々な作風で制作しています．imperiRwrathという名義で投稿しています．
      </p>
    </div>
  );
};

export default Profile;
