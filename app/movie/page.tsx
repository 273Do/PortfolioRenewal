import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import * as Movie from "@/features/movie/index";

const page = () => {
  return (
    <main className="h-screen">
      <div className="fixed left-1/2 top-1/2 size-full -translate-x-1/2 -translate-y-1/2 p-12 py-[104px]">
        <div className="flex h-full items-center justify-center">
          <Card className="flex size-full flex-col ">
            <CardHeader>
              <CardTitle>Movie</CardTitle>
              <CardDescription>
                制作した映像作品を紹介しています．YouTubeにて公開しています．
              </CardDescription>
            </CardHeader>
            <CardContent className="size-full p-0">
              <Separator />
              <div className="flex h-full">
                <div className="h-full w-2/5 min-w-[450px] overflow-y-scroll p-6">
                  {/* <div className="h-full min-h-[695px] overflow-y-scroll"> */}
                  <div className="grid h-full grid-flow-col grid-rows-5 gap-4">
                    <Card className="... row-span-2 row-start-1">
                      <CardContent className="h-full p-4">
                        <Movie.Profile />
                      </CardContent>
                    </Card>
                    <Card className="... row-span-1 row-start-3 flex items-center justify-center p-0">
                      <CardContent className="size-full p-0">
                        <Movie.YTProfile />
                      </CardContent>
                    </Card>
                    <div className="... row-span-2 row-start-4 bg-blue-500">
                      03
                    </div>
                  </div>
                  {/* </div> */}
                </div>
                <Separator orientation="vertical" />
                <div className="w-auto">
                  <p>test</p>
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
