"use client";

import React from "react";

import {
  SiX,
  SiGithub,
  SiYoutube,
  SiInstagram,
} from "@icons-pack/react-simple-icons";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";

import { useAllTool } from "@/app/hooks/tool/useAllTool";
import { sortedToolArray } from "@/app/utils/function";
import { Button } from "@/components/ui/button";
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import siteLogo from "@/public/273*Logo.png";
import myImg from "@/public/myImg.jpg";

const Header = () => {
  const theme = useTheme();

  const { tools, isError, isLoading } = useAllTool();

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
                    <ListItem href="/gallery" title="Gallery">
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
                    {isLoading ? (
                      <div>Loading...</div>
                    ) : (
                      <>
                        {sortedToolArray(tools).map(
                          (component: {
                            id: number;
                            name: string;
                            description: string;
                          }) => (
                            <ListItem
                              key={component.id}
                              title={component.name.replace("\\n", " ")}
                              href={`/tool?id=${component.id}`}
                            >
                              {component.description}
                            </ListItem>
                          )
                        )}
                      </>
                    )}
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
              onClick={() => window.open("https://twitter.com/273Do")}
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
