import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import MarqueeWidget from "@/features/Marquee/components/Marquee";
import { Three } from "@/features/tool/components/Three/Three";
import React from "react";

const page = ({ params }: { params: { name: string } }) => {
  console.log(params.name);
  return (
    <main className="h-screen">
      {/* <Three three_text={params.name} three_color="#bfcde8" /> */}
      <div className="pointer-events-none fixed left-1/2 top-1/2 size-full -translate-x-1/2 -translate-y-1/2 p-12 py-[104px]">
        <div className="flex h-full items-center justify-center bg-transparent">
          {/* <Card className="flex size-full flex-col bg-transparent"> */}
          <Card className="flex size-full flex-col bg-transparent">
            <CardHeader>
              <CardTitle>Tools</CardTitle>
              <CardDescription>ここにツールの説明を入れます．</CardDescription>
            </CardHeader>
            <CardContent className="size-full">
              <div className="grid size-full grid-flow-col grid-cols-5 grid-rows-5 gap-4">
                <div className="... col-span-2 row-span-2 row-start-1 bg-red-600">
                  01
                </div>
                <div className="... col-span-1 row-span-2 row-start-1 bg-green-500">
                  02
                </div>
                <div className="... col-span-3 col-start-1 row-start-3 bg-blue-500">
                  03
                </div>
                <div className="... col-span-2 col-start-1 row-start-4 bg-green-500">
                  04
                </div>
                <div className="... col-span-1 row-span-1 row-start-4 bg-red-600">
                  05
                </div>
                <div className="... col-span-2 col-start-1 row-start-5 ">
                  {/* <div className="h-full w-[522px] bg-slate-500">test</div> */}
                  <Card className="flex h-full w-[522px] items-center justify-center overflow-hidden bg-transparent p-0 py-8">
                    <CardContent className="p-0">
                      <MarqueeWidget />
                    </CardContent>
                  </Card>
                </div>
                <div className="... col-span-2 col-start-4 row-start-5 bg-green-500">
                  07
                </div>
              </div>
            </CardContent>
            {/* <CardFooter className="">
              <p>ハードウェアアクセラレーションをONにしてください．</p>
            </CardFooter> */}
          </Card>
        </div>
      </div>
    </main>
    // <main className="flex h-screen items-center justify-center">
    //   {/* <Three three_text={params.name} three_color="#bfcde8" /> */}
    //   <div className="pointer-events-none fixed mx-12 my-[104px] h-4/5 w-full p-12">
    //     <div className="bg-transparent">
    //       <Card className="h-full bg-transparent">
    //         <CardHeader>
    //           <CardTitle>Tools</CardTitle>
    //           <CardDescription>ここにツールの説明を入れます．</CardDescription>
    //         </CardHeader>
    //         <CardContent>
    //           <p>コンテンツ</p>
    //         </CardContent>
    //         <div className="mt-auto">
    //           <CardFooter>
    //             <p>ハードウェアアクセラレーションをONにしてください．</p>
    //           </CardFooter>
    //         </div>
    //       </Card>
    //     </div>
    //   </div>
    // </main>
  );
};

export default page;

//sticky top-0 z-50 w-full //container flex h-14 max-w-screen-2xl items-center

// /container flex-1 items-start md:grid md:grid-cols-[220px_minmax(0,1fr)] md:gap-6 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-10
