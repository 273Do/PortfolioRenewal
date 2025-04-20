import React from "react";

import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import MarqueeWidget from "@/features/Marquee/components/Marquee";
import * as Works from "@/features/works/components/index";

export async function generateMetadata({ params }: { params: { id: string } }) {
  return {
    title: `273* Portfolio | ${params.id}`,
  };
}

const demoData = [
  {
    id: 1,
    name: "React",
    description: "JavaScript library for building user interfaces",
  },
  {
    id: 2,
    name: "Next.js",
    description: "React framework for server-rendered applications",
  },
  {
    id: 3,
    name: "Tailwind CSS",
    description: "Utility-first CSS framework for rapid UI development",
  },
];

const page = ({ params }: { params: { id: string } }) => {
  return (
    <main className="h-screen">
      <div className="fixed left-1/2 top-1/2 size-full -translate-x-1/2 -translate-y-1/2 p-3 py-[70px] sm:p-12 sm:py-[104px]">
        <div className="flex h-full items-center justify-center">
          <Card className="flex size-full flex-col overflow-y-scroll">
            <div className="flex items-center justify-between gap-2 sm:gap-10">
              <CardHeader className="p-3 sm:p-6">
                <CardTitle>タイトル</CardTitle>
                <CardDescription className="mt-[6px]">
                  {params.id}
                </CardDescription>
              </CardHeader>
              <MarqueeWidget technologyData={demoData} />
              <Button className="mr-3 sm:mr-6" variant="secondary">
                <Link href="/works">Close</Link>
              </Button>
            </div>
            <Separator />
            <CardContent className="size-full p-0 sm:overflow-y-scroll">
              <Works.Detail />
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
};

export default page;
