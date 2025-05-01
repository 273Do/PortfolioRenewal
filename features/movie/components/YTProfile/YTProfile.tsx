import React from "react";

import Image from "next/image";
import Link from "next/link";

import { fetchYTProfileData } from "@/app/utils/api/Movie/fetchYTProfileData";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import YTIcon from "@/public/imgs/YTIcon.png";

const YTProfile = async () => {
  const fetchYTProfile = await fetchYTProfileData();
  const YTProfileData = fetchYTProfile.items[0];

  return (
    <div className="flex size-full items-center justify-center gap-16">
      <div className="flex flex-row grayscale duration-200 hover:grayscale-0">
        <Image
          src={YTIcon}
          width={90}
          height={90}
          alt="myImg"
          className="rounded-full"
        />
        <div className="ml-3">
          <div className="space-y-1">
            <h4 className="text-sm font-medium leading-none">imperiRwrath</h4>
            <div className="flex gap-3">
              <p className=" text-sm text-muted-foreground">
                {YTProfileData.statistics.subscriberCount} subscribers
              </p>
              <p className="text-sm text-muted-foreground">
                {YTProfileData.statistics.videoCount} videos
              </p>
              <p className=" text-sm text-muted-foreground">
                {YTProfileData.statistics.viewCount} views
              </p>
            </div>
          </div>
          <Separator className="my-2 sm:my-4" />
          <div className="flex h-5 items-center space-x-4 text-sm">
            <div>MoGraph</div>
            <Separator orientation="vertical" />
            <div>3DCG</div>
            <Separator orientation="vertical" />
            <div>LEGO</div>
          </div>
        </div>
      </div>
      <Link
        href="https://www.youtube.com/channel/UCh4boc9_9Dxiz9QP_VkwGww"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Button className="hidden sm:block">Subscribe {">"}</Button>
      </Link>
    </div>
  );
};

export default YTProfile;
