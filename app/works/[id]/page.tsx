import React from "react";

import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import * as Works from "@/features/works/components/index";

export async function generateMetadata({ params }: { params: { id: string } }) {
  return {
    title: `273* Portfolio | ${params.id}`,
  };
}

const page = ({ params }: { params: { id: string } }) => {
  return (
    <main className="h-screen">
      <div className="fixed left-1/2 top-1/2 size-full -translate-x-1/2 -translate-y-1/2 p-3 py-[70px] sm:p-12 sm:py-[104px]">
        <div className="flex h-full items-center justify-center">
          <Card className="flex size-full flex-col overflow-y-scroll">
            <div className="flex w-full items-center justify-between gap-2 lg:gap-10">
              <CardHeader className="w-full p-3 sm:p-6">
                <CardTitle>タイトル</CardTitle>
                <CardDescription className="mt-[6px] ">
                  <div className="flex items-center gap-2">
                    <Badge variant="secondary">test</Badge>
                    <Badge variant="secondary">test</Badge>
                    <Badge variant="secondary">test</Badge>
                  </div>
                </CardDescription>
              </CardHeader>
              <Button className="mr-3 sm:mr-6" variant="secondary">
                <Link href="/works">Close</Link>
              </Button>
            </div>
            <Separator />
            <CardContent className="size-full p-0">
              <Works.Detail />
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
};

export default page;
