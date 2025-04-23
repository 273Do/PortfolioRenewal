import React from "react";

import type { Metadata } from "next";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import * as Works from "@/features/works/components/index";
import { sortedWorksData } from "@/features/works/types/demoWorksData";

export const metadata: Metadata = {
  title: "273* Portfolio | Works",
};

const page = () => {
  return (
    <main className="h-screen">
      <div className="fixed left-1/2 top-1/2 size-full -translate-x-1/2 -translate-y-1/2 p-3 py-[70px] sm:p-12 sm:py-[104px]">
        <div className="flex h-full items-center justify-center">
          <Card className="flex size-full flex-col overflow-y-scroll">
            <CardHeader className="p-3 sm:p-6">
              <CardTitle>Works</CardTitle>
              <CardDescription className="mt-[6px]">
                これまでに製作したものをまとめました。
              </CardDescription>
            </CardHeader>
            <Separator />
            <CardContent className="size-full p-3 sm:overflow-y-scroll sm:p-4">
              <Works.WorkList worksData={sortedWorksData} />
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
};

export default page;
