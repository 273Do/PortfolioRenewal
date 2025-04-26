/* eslint-disable tailwindcss/no-contradicting-classname */
"use client";

import React from "react";

import {
  SiX,
  SiGithub,
  SiYoutube,
  SiDiscord,
} from "@icons-pack/react-simple-icons";
import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";
import { toast } from "sonner";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import siteLogo from "@/public/imgs/273*Logo.png";
import myImg from "@/public/imgs/myImg.jpg";
import { fetchWorks } from "@/lib/contentful";
import { WorkObj } from "@/features/works/types";

import { useEffect, useState } from "react";

const Header = () => {
  const { theme } = useTheme();
  const [pickupWorks, setPickupWorks] = useState<{
    total: number;
    items: WorkObj[];
  } | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchWorks();
      setPickupWorks(data);
    };
    fetchData();
  }, []);

  return (
    <div className="fixed top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-6 flex h-14 items-center justify-between sm:mx-12">
        <Link href="/" title="card">
          <Image
            src={siteLogo}
            width={70}
            height={70}
            alt="siteLogo"
            className={`${
              theme === "light" && "icon_light"
            }  duration-150 hover:scale-95`}
          />
        </Link>
        <div className="flex">
          <NavigationMenu className="hidden sm:block">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent">
                  Activities
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[480px] lg:grid-cols-[.75fr_1fr]">
                    <li className="row-span-3">
                      <NavigationMenuLink asChild>
                        <a
                          className="flex size-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none grayscale duration-150 hover:scale-95 hover:grayscale-0 focus:shadow-md"
                          href="/card"
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
                            趣味でものづくりを楽しんでいる人。web開発や映像制作、ピアノやサイクリングを嗜んでいる。
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <ListItem href="/movie" title="Movie">
                      制作した映像作品を紹介しています。YouTubeにて公開しています。
                    </ListItem>
                    <ListItem href="/gallery" title="Gallery">
                      私の趣味や活動の記録を写真で紹介しています。
                    </ListItem>
                    <Link
                      href="https://qiita.com/273Do"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ListItem title="Qiita">
                        開発したものは、Qiitaにて記事を書いて投稿しています。
                      </ListItem>
                    </Link>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent">
                  Works
                  {pickupWorks && (
                    <p className="mb-3 ml-1 text-[9px] text-muted-foreground">
                      ({pickupWorks.total})
                    </p>
                  )}
                </NavigationMenuTrigger>
                <NavigationMenuContent className="w-full">
                  <div className="flex w-full flex-col items-start">
                    <Button
                      asChild
                      className="m-4 w-[calc(100%-2rem)]"
                      variant="secondary"
                    >
                      <Link href="/works">All Works</Link>
                    </Button>
                    <p className="mx-7 -mb-2 w-full font-semibold">Pick Up</p>
                    <hr className="m-4 -mb-2 h-1 w-[calc(100%-2rem)]" />
                  </div>

                  <ul className="grid max-h-56 w-[400px] gap-3 overflow-y-scroll p-4 md:w-[480px] md:grid-cols-2 lg:w-[480px] ">
                    {pickupWorks ? (
                      pickupWorks.items.map((work: WorkObj) => (
                        <ListItem
                          key={work.sys.id}
                          title={work.name}
                          href={`/works/${work.sys.id}`}
                        >
                          {work.description}
                        </ListItem>
                      ))
                    ) : (
                      <div>Loading</div>
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
          <nav className="hidden items-center justify-end sm:flex">
            <Button variant="ghost" size="icon">
              <Link
                href="https://github.com/273Do"
                target="_blank"
                rel="noopener noreferrer"
                className="my-2 block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
              >
                <SiGithub className="size-[1.0rem]" />
              </Link>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() =>
                toast(
                  <div className="flex items-center gap-3">
                    <SiDiscord className="size-[1.4rem]" />
                    <div>
                      <p>Discord User ID</p>
                      <p className="text-muted-foreground">@273</p>
                    </div>
                  </div>
                )
              }
            >
              <span className="my-2 block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                <SiDiscord className="size-[1.0rem]" />
              </span>
            </Button>
            <Button variant="ghost" size="icon">
              <Link
                href="https://twitter.com/273Do"
                target="_blank"
                rel="noopener noreferrer"
                className="my-2 block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
              >
                <SiX className="size-[1.0rem]" />
              </Link>
            </Button>
            <Button variant="ghost" size="icon">
              <Link
                href="https://www.youtube.com/channel/UCh4boc9_9Dxiz9QP_VkwGww"
                target="_blank"
                rel="noopener noreferrer"
                className="my-2 block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
              >
                <SiYoutube className="size-[1.0rem]" />
              </Link>
            </Button>
          </nav>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="pl-2 sm:hidden">
                <Menu />
              </Button>
            </SheetTrigger>
            <SheetContent className="w-[300px] sm:w-[200px]">
              <SheetHeader>
                <SheetTitle>Menu</SheetTitle>
              </SheetHeader>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>Activities</AccordionTrigger>
                  <AccordionContent>
                    <SheetClose asChild>
                      <a
                        className="flex size-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none duration-150 hover:scale-95 focus:shadow-md"
                        href="/card"
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
                          趣味でものづくりを楽しんでいる人。web開発や映像制作、ピアノやサイクリングを嗜んでいる。
                        </p>
                      </a>
                    </SheetClose>
                    <SheetClose asChild>
                      <Link
                        href="/movie"
                        title="Movie"
                        className="my-2 block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <div className="text-sm font-medium leading-none">
                          Movie
                        </div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          制作した映像作品を紹介しています。YouTubeにて公開しています。
                        </p>
                      </Link>
                    </SheetClose>
                    <SheetClose asChild>
                      <Link
                        href="/gallery"
                        title="Gallery"
                        className="my-2 block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <div className="text-sm font-medium leading-none">
                          Gallery
                        </div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          私の趣味や活動の記録を写真で紹介しています。
                        </p>
                      </Link>
                    </SheetClose>
                    <SheetClose asChild>
                      <Link
                        href="https://qiita.com/273Do"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="my-2 block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <Label title="Qiita">
                          <div className="text-sm font-medium leading-none">
                            Qiita
                          </div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            開発したものは、Qiitaにて記事を書いて投稿しています。
                          </p>
                        </Label>
                      </Link>
                    </SheetClose>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger className="">
                    <div className="flex">
                      <p>Works</p>
                      {pickupWorks && (
                        <p className="mb-3 ml-1 text-[9px] text-muted-foreground">
                          ({pickupWorks.total})
                        </p>
                      )}
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="flex w-full flex-col gap-2">
                      <Button className="mb-0 w-full" variant="secondary">
                        <Link href="/works">All Works</Link>
                      </Button>
                      <p className="mx-3 -mb-2 font-semibold">Pick Up</p>
                      <hr className="m-4 h-1 w-[calc(100%-2rem)]" />
                    </div>
                    <ul className="h-80 overflow-scroll">
                      {pickupWorks ? (
                        <>
                          {pickupWorks.items.map((work: WorkObj) => (
                            <SheetClose asChild key={work.sys.id}>
                              <Link
                                href={`/works/${work.sys.id}`}
                                className="my-2 block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                              >
                                <div className="text-sm font-medium leading-none">
                                  {work.name}
                                </div>
                                <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                  {work.description}
                                </p>
                              </Link>
                            </SheetClose>
                          ))}
                        </>
                      ) : (
                        <div>Loading</div>
                      )}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
              <SheetClose asChild>
                <Link
                  href="/faq"
                  title="faq"
                  className=" block select-none space-y-1 border-b py-4 font-medium leading-none no-underline outline-none transition-all transition-colors hover:underline focus:bg-accent focus:text-accent-foreground"
                >
                  FAQ
                </Link>
              </SheetClose>
              <nav className="mt-2 flex items-center justify-center gap-4">
                <Button variant="ghost" size="icon">
                  <Link
                    href="https://github.com/273Do"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="my-2 block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                  >
                    <SiGithub className="size-[1.0rem]" />
                  </Link>
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() =>
                    toast(
                      <div className="flex items-center gap-3">
                        <SiDiscord className="size-[1.4rem]" />
                        <div>
                          <p>Discord User ID</p>
                          <p className="text-muted-foreground">@273</p>
                        </div>
                      </div>
                    )
                  }
                >
                  <span className="my-2 block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                    <SiDiscord className="size-[1.0rem]" />
                  </span>
                </Button>
                <Button variant="ghost" size="icon">
                  <Link
                    href="https://twitter.com/273Do"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="my-2 block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                  >
                    <SiX className="size-[1.0rem]" />
                  </Link>
                </Button>
                <Button variant="ghost" size="icon">
                  <Link
                    href="https://www.youtube.com/channel/UCh4boc9_9Dxiz9QP_VkwGww"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="my-2 block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                  >
                    <SiYoutube className="size-[1.0rem]" />
                  </Link>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
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
