"use client";
import React from "react";
import Tilt from "react-parallax-tilt";

import { SiDiscord, SiGithub, SiX } from "@icons-pack/react-simple-icons";
import { Link } from "lucide-react";
import Image from "next/image";
import { useTheme } from "next-themes";

import siteLogo from "@/public/imgs/273*Logo.png";
import myImg from "@/public/imgs/myImg.jpg";

const MyCard = () => {
  const { theme } = useTheme();
  return (
    <>
      <Tilt
        glareEnable={true}
        glareMaxOpacity={0.5}
        glareColor="#7e7e7e"
        glarePosition="all"
        glareBorderRadius="16px"
        tiltMaxAngleX={15}
        tiltMaxAngleY={15}
        className="cursor-pointer grayscale duration-200 hover:grayscale-0"
      >
        <div className="hidden size-full h-[440px] w-[729px] cursor-pointer rounded-2xl border border-border sm:block">
          <div className="pointer-events-none flex size-full items-center justify-between px-16 py-14">
            <Image
              src={myImg}
              width={260}
              height={260}
              alt="myImg"
              className="rounded-full"
            />
            <div>
              <div>
                <Image
                  src={siteLogo}
                  width={240}
                  height={240}
                  alt="siteLogo"
                  className={`${theme === "light" && "icon_light"} -mt-7`}
                />
                <div className="my-2">
                  <p className="-mt-4">273* (tuna-sand) / kei.</p>
                  <p className="text-muted-foreground">
                    Web Develop / Design / Sensor Analysis
                  </p>
                </div>
              </div>
              <div className="mt-4">
                <ul className="flex flex-col gap-2">
                  <li className="flex items-center gap-3">
                    <Link />
                    <p>https://273doworks.com</p>
                  </li>
                  <li className="flex items-center gap-3">
                    <SiGithub />
                    <p>@273Do</p>
                  </li>
                  <li className="flex items-center gap-3">
                    <SiDiscord />
                    <p>@273</p>
                  </li>
                  <li className="flex items-center gap-3">
                    <SiX />
                    <p>@273Do</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="block size-full h-[200px] w-[334px] cursor-pointer rounded-2xl border border-border text-[11px] sm:hidden">
          <div className="pointer-events-none flex size-full items-center justify-between p-3">
            <Image
              src={myImg}
              width={110}
              height={110}
              alt="myImg"
              className="rounded-full"
            />
            <div>
              <div>
                <Image
                  src={siteLogo}
                  width={70}
                  height={70}
                  alt="siteLogo"
                  className={`${theme === "light" && "icon_light"} -mt-3`}
                />
                <div className="my-1">
                  <p className="-mt-2">273* (tuna-sand) / kei.</p>
                  <p className="text-muted-foreground">
                    Web Dev / Design / Sensor Analysis
                  </p>
                </div>
              </div>
              <div className="mt-2">
                <ul className="flex flex-col gap-1">
                  <li className="flex items-center gap-2">
                    <Link size={15} />
                    <p>https://273doworks.com</p>
                  </li>
                  <li className="flex items-center gap-2">
                    <SiGithub size={15} />
                    <p>@273Do</p>
                  </li>
                  <li className="flex items-center gap-2">
                    <SiDiscord size={15} />
                    <p>@273</p>
                  </li>
                  <li className="flex items-center gap-2">
                    <SiX size={15} />
                    <p>@273Do</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Tilt>
    </>
  );
};

export default MyCard;
