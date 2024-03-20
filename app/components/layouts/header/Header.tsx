"use client";

import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import {
  SiX,
  SiGithub,
  SiYoutube,
  SiInstagram,
} from "@icons-pack/react-simple-icons";
import Image from "next/image";
import myImg from "@/public/myImg.jpg";
import siteLogo from "@/public/273*Logo.png";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

const components: {
  id: number;
  title: string;
  description: string;
}[] = [
  {
    id: 1,
    title: "Alert Dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    id: 2,
    title: "Hover Card",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    id: 3,
    title: "Progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    id: 4,
    title: "Scroll-area",
    description: "Visually or semantically separates content.",
  },
  {
    id: 5,
    title: "Tabs",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    id: 6,
    title: "Tooltip",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
];

const Header = () => {
  const theme = useTheme();
  return (
    <div className="fixed top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-12 flex h-14 items-center justify-between">
        <Image
          src={siteLogo}
          width={70}
          height={70}
          alt="siteLogo"
          className={`${theme.theme === "light" && "icon_light"}`}
        />
        <div className="flex">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent">
                  My activities
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[480px] lg:grid-cols-[.75fr_1fr]">
                    <li className="row-span-3">
                      <NavigationMenuLink asChild>
                        <a
                          className="flex size-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none duration-150 hover:scale-95 focus:shadow-md"
                          href="/"
                        >
                          <Image
                            src={myImg}
                            width={70}
                            height={70}
                            alt="myImg"
                            className="rounded-full"
                          />
                          <div className="my-2 text-lg font-medium">
                            273* / Kei.
                          </div>
                          <p className="text-sm leading-tight text-muted-foreground">
                            趣味でものづくりを楽しんでいる大学生．web開発や映像制作，ピアノやサイクリングを嗜む．
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <ListItem href="/movie" title="Movie">
                      制作した映像作品を紹介しています．YouTubeにて公開しています．
                    </ListItem>
                    <ListItem href="/other" title="Other">
                      私の趣味や活動の記録を写真で紹介しています．
                    </ListItem>
                    <a
                      href="https://qiita.com/273Do"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ListItem title="Qiita">
                        開発したものは，Qiitaにて記事を書いて投稿しています．
                      </ListItem>
                    </a>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent">
                  Tools
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[480px] md:grid-cols-2 lg:w-[480px] ">
                    {components.map((component) => (
                      <ListItem
                        key={component.title}
                        title={component.title}
                        href={`/tool?id=${component.id}`}
                      >
                        {component.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/faq" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    FAQ
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          <nav className="flex items-center justify-end">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => window.open("https://github.com/273Do")}
            >
              <SiGithub className="size-[1.0rem]" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => window.open("https://twitter.com/ktu_na3do")}
            >
              <SiX className="size-[1.0rem]" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() =>
                window.open(
                  "https://instagram.com/kei310__?igshid=MmIzYWVlNDQ5Yg=="
                )
              }
            >
              <SiInstagram className="size-[1.0rem]" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() =>
                window.open(
                  "https://www.youtube.com/channel/UCh4boc9_9Dxiz9QP_VkwGww"
                )
              }
            >
              <SiYoutube className="size-[1.0rem]" />
            </Button>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Header;

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
