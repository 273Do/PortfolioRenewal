import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import * as Movie from "@/features/movie/index";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";

const page = () => {
  return (
    <main className="h-screen">
      <div className="fixed left-1/2 top-1/2 size-full -translate-x-1/2 -translate-y-1/2 p-12 py-[104px]">
        <div className="flex h-full items-center justify-center">
          <Card className="flex size-full flex-col">
            <CardContent className="size-full p-0">
              <ResizablePanelGroup
                direction="horizontal"
                className="flex size-full flex-col"
              >
                <ResizablePanel defaultSize={42}>
                  <Card className="tool-detail-rounded flex size-full min-w-[470px] flex-col">
                    <CardHeader>
                      <div className="flex justify-between">
                        <div>
                          <CardTitle>Movie</CardTitle>
                          <CardDescription className="mt-[6px]">
                            制作した映像作品を紹介しています．YouTubeにて公開しています．
                          </CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <Separator />
                    <CardContent className="size-full overflow-y-scroll p-6">
                      <div className="grid size-full">
                        <div className="... col-span-5 row-span-4 row-start-1 size-full ">
                          <div className="grid size-full grid-flow-col grid-rows-9 gap-4">
                            <Card className="... col-span-3 col-start-1 row-span-3 row-start-1">
                              <CardContent className="size-full p-0">
                                <CardContent className="flex h-full items-center justify-center p-0">
                                  <Movie.Profile />
                                </CardContent>
                              </CardContent>
                            </Card>
                            <Card className="... col-span-3 col-start-1 row-span-2 row-start-4">
                              <CardContent className="size-full p-0">
                                <CardContent className="flex h-full items-center justify-center p-4">
                                  <Movie.YTProfile />
                                </CardContent>
                              </CardContent>
                            </Card>
                            <div className="... col-span-3 col-start-1 row-span-4 row-start-6">
                              <Card>
                                <CardContent className="size-full p-0">
                                  <CardHeader className="p-4">
                                    <CardTitle className="text-lg">
                                      Software
                                    </CardTitle>
                                  </CardHeader>
                                  <CardContent className="flex size-full items-center justify-center">
                                    <Movie.Software />
                                  </CardContent>
                                  <CardFooter>
                                    <p>
                                      モーショングラフィックスはAviUtl，3D映像はBlenderを用いて制作しています．
                                    </p>
                                  </CardFooter>
                                </CardContent>
                              </Card>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </ResizablePanel>
                <ResizableHandle withHandle />
                <ResizablePanel>
                  <Movie.MovieList />
                </ResizablePanel>
              </ResizablePanelGroup>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
};

export default page;
