import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import MarqueeWidget from "@/features/Marquee/components/Marquee";
import * as Main from "@/features/main/components/index";
import type { Metadata } from "next";
import { getNoticeAllData } from "./utils/api/Notice/NoticeApi";
import type { NoticeObj } from "@/features/main/types";

export const metadata: Metadata = {
  title: "273* Portfolio | About",
};

export default async function Home() {
  const NoticeAllData = await getNoticeAllData();

  const sortedArray = (arr: NoticeObj[]): NoticeObj[] => {
    return arr.sort((a, b) => {
      const dateA = new Date(a.event_date);
      const dateB = new Date(b.event_date);
      return dateB.getTime() - dateA.getTime(); // 降順
    });
  };

  const sortedData: NoticeObj[] = sortedArray(NoticeAllData);
  // console.log(NoticeAllData);
  // console.log(sortedArray(NoticeAllData));

  return (
    <main className="p-12">
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
              <MarqueeWidget />
            </CardContent>
          </Card>
        </CardContent>
      </Card>
      <div className="h-14"></div>
    </main>
  );
}
