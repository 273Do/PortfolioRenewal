import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";
import Image from "next/image";
import myImg from "../public/myImg.jpg";
import { Piano, Bike, Braces } from "lucide-react";

const tags = Array.from({ length: 50 }).map(
  (_, i, a) => `v1.2.0-beta.${a.length - i}`
);

export default function Home() {
  return (
    <main className="p-12">
      <div>
        <Card className="w-[570px]">
          <CardHeader>
            <CardTitle>About</CardTitle>
          </CardHeader>
          <CardContent className="grid h-[920px] w-[570px] grid-flow-col grid-cols-3 grid-rows-5 gap-4">
            <Card className="... col-span-2 row-span-2 row-start-1 flex items-center justify-center p-0">
              <CardContent className="p-0 text-7xl">
                <p>Welcome</p>
                <p>to</p>
                <p>273*</p>
                <p>Portfolio</p>
              </CardContent>
            </Card>

            <ScrollArea className="... col-span-1 row-span-2 row-start-1 flex  items-center justify-center rounded-md border p-0">
              <div className="p-4">
                <h4 className="mb-4 text-sm font-medium leading-none">
                  Notice
                </h4>
                {tags.map((tag) => (
                  <>
                    <div key={tag} className="text-sm">
                      {tag}
                    </div>
                    <Separator className="my-2" />
                  </>
                ))}
              </div>
            </ScrollArea>

            <Card className="... col-span-3 col-start-1 row-start-3 flex items-center justify-center p-0">
              <CardContent className="flex flex-row p-0">
                <Image
                  src={myImg}
                  width={90}
                  height={90}
                  alt="myImg"
                  className="rounded-full"
                />
                <div className="ml-3">
                  <div className="space-y-1">
                    <h4 className="text-sm font-medium leading-none">
                      273*(ツナサンド) / Kei.
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Department of Information and Computer Science
                    </p>
                  </div>
                  <Separator className="my-4" />
                  <div className="flex h-5 items-center space-x-4 text-sm">
                    <div>Web Develop</div>
                    <Separator orientation="vertical" />
                    <div>Sensor Analysis</div>
                    <Separator orientation="vertical" />
                    <div>MoGraph</div>
                    <Separator orientation="vertical" />
                    <div>3DCG</div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="... col-span-2 col-start-1 row-start-4">
              <CardHeader className="p-4 pb-3">
                <CardTitle>Hobby</CardTitle>
              </CardHeader>
              <CardContent className="flex h-3/5 items-center justify-center p-0">
                <div className="grid size-full grid-flow-col grid-cols-3 grid-rows-1 gap-3 px-4">
                  <Card>
                    <CardContent className="flex flex-col items-center p-0 text-center">
                      <Braces className="m-4 size-[2.0rem] transition-all" />
                      <p className="text-sm">Web Dev</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="flex flex-col items-center p-0 text-center ">
                      <Piano className="m-4 size-[2.0rem] transition-all" />
                      <p className="text-sm">Piano</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="flex flex-col items-center p-0 text-center ">
                      <Bike className="m-4 size-[2.0rem] transition-all" />
                      <p className="text-sm">Cycling</p>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>
            <div className="... col-span-1 row-span-1 row-start-4 bg-red-600">
              05
            </div>
            <div className="... col-span-3 col-start-1 row-start-5 bg-blue-500">
              06
            </div>

            {/* <div className="grid h-[1000px] w-[600px] grid-flow-col grid-cols-3 grid-rows-5 gap-4">
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
              <div className="... col-span-3 col-start-1 row-start-5 bg-blue-500">
                06
              </div>
            </div> */}
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
