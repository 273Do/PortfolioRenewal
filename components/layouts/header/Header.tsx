"use client";

import React from "react";

import {
  SiDiscord,
  SiGithub,
  SiX,
  SiYoutube,
} from "@icons-pack/react-simple-icons";
import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { toast } from "sonner";
import useSWR from "swr";

import { Button } from "@/components/ui/button";
import { NavigationMenuLink } from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetClose,
} from "@/components/ui/sheet";
import { fetchWorks } from "@/lib/contentful";
import { cn } from "@/lib/utils";
import myImg from "@/public/imgs/myImg.jpg";
import siteLogo from "@/public/svg/Logo.svg";

// ListItem component
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

const fetcher = async () => {
  const data = await fetchWorks(1);
  return data;
};

const Header = () => {
  const GITHUB_URL = process.env.NEXT_PUBLIC_GITHUB_URL;
  const DISCORD_USER_ID = process.env.NEXT_PUBLIC_DISCORD_USER_ID;
  const YOUTUBE_URL = process.env.NEXT_PUBLIC_YOUTUBE_URL;
  const X_URL = process.env.NEXT_PUBLIC_X_URL;
  const QIITA_URL = process.env.NEXT_PUBLIC_QIITA_URL;

  const { data: pickupWorks, isLoading } = useSWR("pickupWorks", fetcher);

  return (
    <div className="fixed top-0 z-[200] w-full">
      <div className="mx-3 flex h-12 items-center justify-between sm:mx-12">
        <Link
          href="/"
          title="card"
          className="mt-1 duration-200 hover:scale-95"
        >
          <Image
            className="dark:invert"
            src={siteLogo}
            alt="273* Logo"
            width={55}
            height={55}
            priority
          />
        </Link>

        <div className="flex items-center gap-4">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="size-8">
                <Menu />
              </Button>
            </SheetTrigger>
            <SheetContent className="asm:w-[200px] w-[300px]">
              <SheetHeader>
                <SheetTitle>Menu</SheetTitle>
              </SheetHeader>

              <SheetClose asChild>
                <Link
                  className="mt-2 flex select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none duration-150 hover:scale-95 focus:shadow-md"
                  href="/card"
                  title="Card"
                >
                  <Image
                    src={myImg}
                    width={70}
                    height={70}
                    alt="myImg"
                    className="rounded-full"
                  />
                  <div className="my-2 text-lg font-medium">273*</div>
                  <p className="text-sm leading-tight text-muted-foreground">
                    趣味でものづくりを楽しんでいる人。web開発や映像制作、ピアノやサイクリングを嗜んでいる。
                  </p>
                </Link>
              </SheetClose>
              <SheetClose asChild>
                <Link
                  href="/works"
                  title="Movie"
                  className="block select-none space-y-1 border-b py-4 font-medium leading-none no-underline outline-none transition-all hover:underline focus:bg-accent focus:text-accent-foreground"
                >
                  <div className="-mb-2 flex">
                    <p>Works</p>
                    {!isLoading && (
                      <p className="mb-3 ml-1 text-[9px] text-muted-foreground">
                        ({pickupWorks.total})
                      </p>
                    )}
                  </div>
                </Link>
              </SheetClose>
              <SheetClose asChild>
                <Link
                  href="/movie"
                  title="Movie"
                  className="block select-none space-y-1 border-b py-4 font-medium leading-none no-underline outline-none transition-all hover:underline focus:bg-accent focus:text-accent-foreground"
                >
                  Movie
                </Link>
              </SheetClose>
              <SheetClose asChild>
                <Link
                  href="/faq"
                  title="Faq"
                  className="block select-none space-y-1 border-b py-4 font-medium leading-none no-underline outline-none transition-all hover:underline focus:bg-accent focus:text-accent-foreground"
                >
                  FAQ
                </Link>
              </SheetClose>
              <SheetClose asChild>
                <Link
                  href={QIITA_URL}
                  title="Qiita"
                  target="_blank"
                  rel="noopener noreferrer"
                  className=" block select-none space-y-1 border-b py-4 font-medium leading-none no-underline outline-none transition-all hover:underline focus:bg-accent focus:text-accent-foreground"
                >
                  Qiita
                </Link>
              </SheetClose>
              <nav className="mt-2 flex items-center justify-center gap-4">
                <Button variant="ghost" size="icon">
                  <Link
                    href={GITHUB_URL}
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
                          <p className="text-muted-foreground">
                            @{String(DISCORD_USER_ID)}
                          </p>
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
                    href={X_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="my-2 block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                  >
                    <SiX className="size-[1.0rem]" />
                  </Link>
                </Button>
                <Button variant="ghost" size="icon">
                  <Link
                    href={YOUTUBE_URL}
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
