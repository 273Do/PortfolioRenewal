"use client";

// import {
//   SiBun,
//   SiCloudflare,
//   SiGithub,
//   SiNextdotjs,
//   SiPlanetscale,
//   SiPrisma,
//   SiRadixui,
//   SiReact,
//   SiStripe,
//   SiTailwindcss,
//   SiVercel,
// } from "@icons-pack/react-simple-icons";
import * as Icons from "@icons-pack/react-simple-icons";
import { Slot } from "@radix-ui/react-slot";
import React from "react";
import Marquee from "react-fast-marquee";
import { useTheme } from "next-themes";

// const icons = [
//   {
//     icon: <SiNextdotjs />,
//     label: "Next.js",
//   },
//   {
//     icon: <SiBun />,
//     label: "Bun",
//   },
//   {
//     icon: <SiPlanetscale />,
//     label: "PlanetScale",
//   },
//   {
//     icon: <SiReact />,
//     label: "React",
//   },
//   {
//     icon: <SiTailwindcss />,
//     label: "Tailwind CSS",
//   },
//   {
//     icon: <SiRadixui />,
//     label: "Radix UI",
//   },
//   {
//     icon: <SiVercel />,
//     label: "Vercel",
//   },
//   {
//     icon: <SiGithub />,
//     label: "GitHub",
//   },
//   {
//     icon: <SiCloudflare />,
//     label: "Cloudflare R2",
//   },
//   {
//     icon: <SiPrisma />,
//     label: "Prisma",
//   },
//   {
//     icon: <SiStripe />,
//     label: "Stripe",
//   },
// ];

const iconsData = [
  { icon: "SiNextdotjs", label: "Next.js" },
  { icon: "SiBun", label: "Bun" },
  { icon: "SiPlanetscale", label: "PlanetScale" },
  { icon: "SiReact", label: "React" },
  { icon: "SiTailwindcss", label: "Tailwind CSS" },
  { icon: "SiRadixui", label: "Radix UI" },
  { icon: "SiVercel", label: "Vercel" },
  { icon: "SiGithub", label: "GitHub" },
  { icon: "SiCloudflare", label: "Cloudflare R2" },
  { icon: "SiPrisma", label: "Prisma" },
  { icon: "SiStripe", label: "Stripe" },
];

// const MarqueeWidget = () => {
//   return (
//     <div>
//       {/* データをマップしてアイコンコンポーネントを生成 */}
//       {iconsData.map(({ icon, label }) => {
//         const IconComponent = Icons[icon]; // アイコン名を使ってアイコンコンポーネントを取得
//         return (
//           <div key={label} className="px-3">
//             <IconComponent />
//             <span>{label}</span>
//           </div>
//         );
//       })}
//     </div>
//   );
// };

const MarqueeWidget = () => {
  const { theme } = useTheme();
  return (
    <>
      <Marquee
        gradient
        gradientColor={`${theme === "dark" ? "#0a0a0b" : "#ffffff"}`}
        className="text-muted-foreground"
      >
        {/* {icons.map((icon) => (
          <div key={icon.label} className="px-3">
            <Slot className="h-10 w-full">{icon.icon}</Slot>
          </div>
        ))} */}
        {iconsData.map(({ icon, label }) => {
          const IconComponent = Icons[icon];
          return (
            <div key={label} className="px-3">
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
