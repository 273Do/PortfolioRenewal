import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import MarqueeWidget from "@/features/Marquee/components/Marquee";
import * as Tool from "@/features/tool/components/index";
import Link from "next/link";
import React from "react";
import { Separator } from "@/components/ui/separator";

const page = ({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  const params = "primitive";
  console.log(searchParams.id);
  return (
    <main className="h-screen">
      <Tool.Three three_text={params} three_color="#bfcde8" />
      <div className="pointer-events-none fixed left-1/2 top-1/2 size-full -translate-x-1/2 -translate-y-1/2 p-12 py-[104px]">
        <div className="flex h-full items-center justify-center bg-transparent">
          <Card className="flex size-full flex-col bg-transparent">
            <CardHeader>
              <CardTitle>Tools</CardTitle>
              <CardDescription>ここにツールの説明を入れます．</CardDescription>
            </CardHeader>
            <Separator />
            <CardContent className="size-full p-6">
              <div className="grid size-full grid-flow-col grid-cols-5 gap-4">
                <div className="... col-span-5 col-start-1 row-start-3 flex items-center justify-between">
                  <Link href="/tool/primitive">
                    <Button
                      variant="outline"
                      className="pointer-events-auto bg-transparent p-7"
                    >
                      {"<"}
                    </Button>
                  </Link>
                  <Button
                    variant="outline"
                    className="pointer-events-auto bg-transparent p-7"
                  >
                    {">"}
                  </Button>
                </div>
                <div className="... col-span-2 col-start-4 row-span-1 row-start-1 flex items-start justify-end">
                  <Card className="bg-transparent">
                    <CardHeader className="p-3 pb-0">
                      <CardTitle>Genre</CardTitle>
                    </CardHeader>
                    <CardContent className="flex flex-col items-center justify-end p-3">
                      <Tool.Label />
                    </CardContent>
                  </Card>
                </div>
                <div className="... col-span-2 col-start-1 row-start-5 flex h-full w-[522px] items-end">
                  <Card className="flex h-[166px] w-full items-center justify-center overflow-hidden bg-transparent p-0 py-8">
                    <CardContent className="p-0">
                      <MarqueeWidget />
                    </CardContent>
                  </Card>
                </div>
                <div className="... col-span-2 col-start-4 row-start-5 flex flex-col items-end justify-end gap-4">
                  <Card className="bg-transparent p-4">
                    <CardContent className="p-0">
                      <p>1/n</p>
                    </CardContent>
                  </Card>
                  <Card className="bg-transparent p-4">
                    <CardContent className="p-0">
                      <Tool.Annotation />
                    </CardContent>
                  </Card>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
};

export default page;
