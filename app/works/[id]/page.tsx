import React from "react";

import { SiGithub } from "@icons-pack/react-simple-icons";
import { BookText, Ellipsis, SquareArrowOutUpRight } from "lucide-react";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Separator } from "@/components/ui/separator";
import * as Works from "@/features/works/components/index";
import { fetchWorksDetail } from "@/lib/contentful";

export const revalidate = 60;

const page = async ({ params }: { params: { id: string } }) => {
  const { id } = params;
  const workDetailResponse = await fetchWorksDetail(id);
  const work_detail = workDetailResponse.items[0];

  const metadata = {
    title: `273* Portfolio | ${work_detail.name}`,
  };

  return (
    <>
      <title>{metadata.title}</title>
      <main className="h-screen">
        <div className="fixed left-1/2 top-1/2 size-full -translate-x-1/2 -translate-y-1/2 p-3 py-[70px] sm:p-12 sm:py-[52px]">
          <div className="flex h-full items-center justify-center">
            <Card className="flex size-full flex-col overflow-y-scroll">
              <div className="flex w-full items-center justify-between gap-2 lg:gap-10">
                <CardHeader className="w-full p-3 sm:p-6">
                  <CardTitle>{work_detail.name}</CardTitle>
                  <div className="flex items-center gap-2">
                    {work_detail.tags.map((tag, index) => (
                      <Badge key={index} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardHeader>
                <nav className="flex items-center justify-center gap-2">
                  <div className="sm:hidden">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="outline" size="icon">
                          <Ellipsis className="size-[1.0rem]" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent className="flex flex-row gap-2 p-2">
                        <Button variant="outline" size="icon">
                          <Link
                            href={work_detail.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="my-2 block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <SiGithub className="size-[1.0rem]" />
                          </Link>
                        </Button>
                        {work_detail.otherUrl && (
                          <Button variant="outline" size="icon">
                            <Link
                              href={work_detail.otherUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="my-2 block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            >
                              <BookText className="size-[1.0rem]" />
                            </Link>
                          </Button>
                        )}
                        {work_detail.appUrl && (
                          <Button variant="default" size="icon">
                            <Link
                              href={work_detail.appUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="my-2 block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            >
                              <SquareArrowOutUpRight className="size-[1.0rem]" />
                            </Link>
                          </Button>
                        )}
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                  <div className="hidden items-center justify-center gap-2 sm:flex">
                    <Button variant="outline" size="icon">
                      <Link
                        href={work_detail.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="my-2 block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <SiGithub className="size-[1.0rem]" />
                      </Link>
                    </Button>
                    {work_detail.otherUrl && (
                      <Button variant="outline" size="icon">
                        <Link
                          href={work_detail.otherUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="my-2 block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        >
                          <BookText className="size-[1.0rem]" />
                        </Link>
                      </Button>
                    )}
                    {work_detail.appUrl && (
                      <Button variant="default" size="icon">
                        <Link
                          href={work_detail.appUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="my-2 block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        >
                          <SquareArrowOutUpRight className="size-[1.0rem]" />
                        </Link>
                      </Button>
                    )}
                  </div>
                  <Link href="/works">
                    <Button className="mr-3 sm:mr-6" variant="secondary">
                      Close
                    </Button>
                  </Link>
                </nav>
              </div>
              <Separator />
              <CardContent className="size-full p-0">
                <Works.Detail detail={work_detail} />
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </>
  );
};

export default page;
