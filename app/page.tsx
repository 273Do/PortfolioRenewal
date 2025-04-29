import { Suspense } from "react";

import type { Metadata } from "next";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import MarqueeWidget from "@/features/Marquee/components/Marquee";
import * as Main from "@/features/main/components/index";
import type { NoticeObj, TechnologyObj } from "@/features/main/types";

// import { getNoticeAllData } from "./utils/api/Notice/NoticeApi";

// import { sortedDataArray } from "./utils/function";
import { fetchTechnology } from "@/lib/contentful";
import { ToolsResponse } from "@/features/faq/types";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "273* Portfolio | About",
};

interface HomeProps {
  // sortedData: NoticeObj[];
  technologyData: ToolsResponse;
}

export default async function Home() {
  return <HomeComponent />;
}

async function HomeComponentWrapper({  technologyData }: HomeProps) {
  return (
    <Suspense>
      <>
        <main className="relative hidden h-screen p-12 sm:block ">
          <div className="pointer-events-auto fixed inset-0 z-0">
            <Suspense>
              <Main.LogoThree className="pointer-events-auto size-full object-cover " />
            </Suspense>
          </div>
          <div className="h-14"></div>
          <Card className="relative w-[570px] overflow-auto bg-transparent">
            <CardHeader>
              <CardTitle>About</CardTitle>
            </CardHeader>
            <CardContent className="grid h-[920px] w-[570px] grid-flow-col grid-cols-3 grid-rows-5 gap-4">
              <Card className="... col-span-2 col-start-2 row-span-2 row-start-1 flex items-center justify-center bg-transparent p-0">
                <CardContent className="p-0">
                  <Main.Welcome />
                </CardContent>
              </Card>

              <div className="... col-span-1 row-span-2 row-start-1 flex items-center justify-center p-0">
                {/* <Main.Notice noticeData={sortedData} /> */}
              </div>

              <Card className="... col-span-3 col-start-1 row-start-3 flex items-center justify-center bg-transparent p-0">
                <CardContent className="p-0">
                  <Main.Profile />
                </CardContent>
              </Card>

              <Card className="... col-span-2 col-start-1 row-start-4 bg-transparent">
                <CardHeader className="p-4 pb-2">
                  <CardTitle className="text-lg">Hobby</CardTitle>
                </CardHeader>
                <CardContent className="flex h-3/5 items-center justify-center p-0">
                  <Main.Hobby />
                </CardContent>
              </Card>

              <Card className="... col-span-1 row-span-1 row-start-4 flex items-center justify-center bg-transparent p-0">
                <CardContent className="p-0">
                  <Main.GitCalendar />
                </CardContent>
              </Card>

              <Card className="... col-span-3 col-start-1 row-start-5 flex items-center justify-center overflow-hidden bg-transparent p-0 py-8">
                <CardContent className="p-0">
                  <MarqueeWidget technologyData={technologyData} />
                </CardContent>
              </Card>
            </CardContent>
          </Card>
          <div className="h-28"></div>
        </main>

        <main className="block h-screen sm:hidden">
          <Suspense>
            <Main.LogoThree />
          </Suspense>

          <div className="fixed left-1/2 top-1/2 size-full -translate-x-1/2 -translate-y-1/2 p-3 py-[70px]">
            <div className="flex h-full items-center justify-center">
              <Card className="flex size-full flex-col bg-transparent">
                <CardContent className="size-full overflow-y-scroll p-0">
                  <div className="flex justify-between">
                    <Card className="border-none bg-transparent p-0 shadow-none">
                      <CardHeader className="p-3">
                        <CardTitle>About</CardTitle>
                      </CardHeader>
                      <CardContent className="grid h-[720px] w-full grid-flow-col grid-cols-3 grid-rows-5 gap-2 px-3 pb-3 pt-0">
                        <Card className="... col-span-2 col-start-2 row-span-2 row-start-1 flex items-center justify-center bg-transparent p-0">
                          <CardContent className="p-0">
                            <Main.Welcome />
                          </CardContent>
                        </Card>

                        <div className="... col-span-1 row-span-2 row-start-1 flex items-center justify-center p-0">
                          {/* <Main.Notice noticeData={sortedData} /> */}
                        </div>

                        <Card className="... col-span-3 col-start-1 row-start-3 flex items-center justify-center bg-transparent p-0">
                          <CardContent className="p-0">
                            <Main.Profile />
                          </CardContent>
                        </Card>

                        <Card className="... col-span-2 col-start-1 row-start-4 bg-transparent">
                          <CardHeader className="p-3 pb-1 sm:p-4 sm:pb-2">
                            <CardTitle className="text-lg">Hobby</CardTitle>
                          </CardHeader>
                          <CardContent className="flex h-3/5 items-center justify-center p-0">
                            <Main.Hobby />
                          </CardContent>
                        </Card>

                        <Card className="... col-span-1 row-span-1 row-start-4 flex items-center justify-center bg-transparent p-0">
                          <CardContent className="p-0">
                            <Main.GitCalendar />
                          </CardContent>
                        </Card>

                        <Card className="... col-span-3 col-start-1 row-start-5 flex items-center justify-center overflow-hidden bg-transparent p-0 py-8">
                          <CardContent className="p-0">
                            <MarqueeWidget technologyData={technologyData} />
                          </CardContent>
                        </Card>
                      </CardContent>
                    </Card>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
      </>
    </Suspense>
  );
}

async function HomeComponent() {
  // const noticeAllData = await getNoticeAllData();
  // const sortedData = sortedDataArray(noticeAllData);

  const technologyData = await fetchTechnology();

  return (
    <HomeComponentWrapper
      // sortedData={sortedData as NoticeObj[]}
      technologyData={technologyData.items[0].technologyObj}
    />
  );
}
