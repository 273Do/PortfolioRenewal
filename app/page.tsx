import type { Metadata } from "next";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import MarqueeWidget from "@/features/Marquee/components/Marquee";
import * as Main from "@/features/main/components/index";
import type { NoticeObj, TechnologyObj } from "@/features/main/types";

import { getNoticeAllData } from "./utils/api/Notice/NoticeApi";
import { getAvailableTechnologyData } from "./utils/api/Technology/TechnologyApi";
import { sortedNoticeArray } from "./utils/function";

export const metadata: Metadata = {
  title: "273* Portfolio | About",
};

export default async function Home() {
  // お知らせの取得
  const noticeAllData = await getNoticeAllData();
  const sortedData: NoticeObj[] = sortedNoticeArray(noticeAllData);

  // 使用可能技術の取得
  const availableTechnologyData: TechnologyObj[] =
    await getAvailableTechnologyData();

  return (
    <>
      <main className="hidden p-12 sm:block">
        <div className="h-14"></div>
        <Card className="w-[570px]">
          <CardHeader>
            <CardTitle>About</CardTitle>
          </CardHeader>
          <CardContent className="grid h-[920px] w-[570px] grid-flow-col grid-cols-3 grid-rows-5 gap-4">
            <Card className="... col-span-2 col-start-2 row-span-2 row-start-1 flex items-center justify-center p-0">
              <CardContent className="p-0">
                <Main.Welcome />
              </CardContent>
            </Card>

            <div className="... col-span-1 row-span-2 row-start-1 flex items-center justify-center p-0">
              <Main.Notice noticeData={sortedData} />
            </div>

            <Card className="... col-span-3 col-start-1 row-start-3 flex items-center justify-center p-0">
              <CardContent className="p-0">
                <Main.Profile />
              </CardContent>
            </Card>

            <Card className="... col-span-2 col-start-1 row-start-4">
              <CardHeader className="p-4 pb-2">
                <CardTitle className="text-lg">Hobby</CardTitle>
              </CardHeader>
              <CardContent className="flex h-3/5 items-center justify-center p-0">
                <Main.Hobby />
              </CardContent>
            </Card>

            <Card className="... col-span-1 row-span-1 row-start-4 flex items-center justify-center p-0">
              <CardContent className="p-0">
                <Main.GitCalendar />
              </CardContent>
            </Card>

            <Card className="... col-span-3 col-start-1 row-start-5 flex items-center justify-center overflow-hidden p-0 py-8">
              <CardContent className="p-0">
                <MarqueeWidget technologyData={availableTechnologyData} />
              </CardContent>
            </Card>
          </CardContent>
        </Card>
        <div className="h-14"></div>
      </main>
      <main className="block h-screen sm:hidden">
        <div className="fixed left-1/2 top-1/2 size-full -translate-x-1/2 -translate-y-1/2 p-3 py-[70px]">
          <div className="flex h-full items-center justify-center">
            <Card className="flex size-full flex-col">
              <CardContent className="size-full overflow-y-scroll p-0">
                <div className="flex justify-between">
                  <Card className="border-none p-0 shadow-none">
                    <CardHeader className="p-3">
                      <CardTitle>About</CardTitle>
                    </CardHeader>
                    <CardContent className="grid h-[720px] w-full grid-flow-col grid-cols-3 grid-rows-5 gap-2 px-3 py-0">
                      <Card className="... col-span-2 col-start-2 row-span-2 row-start-1 flex items-center justify-center p-0">
                        <CardContent className="p-0">
                          <Main.Welcome />
                        </CardContent>
                      </Card>

                      <div className="... col-span-1 row-span-2 row-start-1 flex items-center justify-center p-0">
                        <Main.Notice noticeData={sortedData} />
                      </div>

                      <Card className="... col-span-3 col-start-1 row-start-3 flex items-center justify-center p-0">
                        <CardContent className="p-0">
                          <Main.Profile />
                        </CardContent>
                      </Card>

                      <Card className="... col-span-2 col-start-1 row-start-4">
                        <CardHeader className="p-3 pb-1 sm:p-4 sm:pb-2">
                          <CardTitle className="text-lg">Hobby</CardTitle>
                        </CardHeader>
                        <CardContent className="flex h-3/5 items-center justify-center p-0">
                          <Main.Hobby />
                        </CardContent>
                      </Card>

                      <Card className="... col-span-1 row-span-1 row-start-4 flex items-center justify-center p-0">
                        <CardContent className="p-0">
                          <Main.GitCalendar />
                        </CardContent>
                      </Card>

                      <Card className="... col-span-3 col-start-1 row-start-5 flex items-center justify-center overflow-hidden p-0 py-8">
                        <CardContent className="p-0">
                          <MarqueeWidget
                            technologyData={availableTechnologyData}
                          />
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
  );
}
