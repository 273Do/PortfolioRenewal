import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import * as Tool from "@/features/tool/components/index";
import MarqueeWidget from "@/features/Marquee/components/Marquee";
import React from "react";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

const page = ({ params }: { params: { name: string } }) => {
  console.log(params.name);
  return (
    <main className="h-screen">
      {/* <Tool.Three three_text={params} three_color="#bfcde8" /> */}
      <div className="fixed left-1/2 top-1/2 size-full -translate-x-1/2 -translate-y-1/2 p-12 py-[104px]">
        <div className="flex h-full items-center justify-center">
          <Card className="flex size-full flex-col border-none">
            <CardContent className="size-full p-0">
              <ResizablePanelGroup
                direction="horizontal"
                className="flex size-full flex-col"
              >
                <ResizablePanel defaultSize={65}>
                  <Card className="tool-detail-rounded flex size-full min-w-[570px] flex-col">
                    <CardHeader>
                      <div className="flex justify-between">
                        <div>
                          <CardTitle>Tools</CardTitle>
                          <CardDescription className="mt-[6px]">
                            ここにツールの説明を入れます．
                          </CardDescription>
                        </div>
                        <Link href="/tool?id=1">
                          <Button variant="secondary">close</Button>
                        </Link>
                      </div>
                    </CardHeader>
                    <CardContent className="size-full overflow-y-scroll">
                      <div className="grid size-full grid-flow-col grid-cols-5 gap-4">
                        <Card className="... col-span-5 row-span-4 row-start-1 size-full ">
                          <CardContent className="grid size-full grid-flow-col grid-rows-3 gap-4">
                            <div className="... col-span-3 col-start-1 row-start-1">
                              <CardContent className="size-full p-0 pt-6">
                                <CardTitle>背景</CardTitle>
                                <CardContent className="flex h-full items-center justify-center p-0">
                                  <p>
                                    私は趣味で友人とサイクリングやドライブによく行くのですが、経路を選定する際に他の人の経路を参考にしたいと感じたことが多々ありました．「経路を共有できるサービス」は既に存在しますが，私調べではただ経路を共有するだけのものばかりでした．そこで，独自のサービスを開発したいと思いました．走行時の感想や天候，移動手段なども併せて投稿できるようにすることで，より詳しく経路を選定することができるようになるのではないかと考えました．また，チャット機能を導入することにより，感想を伝えたり細かな情報を伝えてもらえたりすることができると考えました．
                                  </p>
                                </CardContent>
                              </CardContent>
                              <Separator className="mt-5" />
                            </div>
                            <div className="... col-span-3 col-start-1 row-start-2">
                              <CardContent className="size-full p-0 pt-6">
                                <CardTitle>工夫</CardTitle>
                                <CardContent className="flex h-full items-center justify-center p-0">
                                  <p>
                                    私は趣味で友人とサイクリングやドライブによく行くのですが、経路を選定する際に他の人の経路を参考にしたいと感じたことが多々ありました．「経路を共有できるサービス」は既に存在しますが，私調べではただ経路を共有するだけのものばかりでした．そこで，独自のサービスを開発したいと思いました．走行時の感想や天候，移動手段なども併せて投稿できるようにすることで，より詳しく経路を選定することができるようになるのではないかと考えました．また，チャット機能を導入することにより，感想を伝えたり細かな情報を伝えてもらえたりすることができると考えました．
                                  </p>
                                </CardContent>
                              </CardContent>
                              <Separator className="mt-5" />
                            </div>
                            <div className="... col-span-3 col-start-1 row-start-3">
                              <CardContent className="size-full p-0 pt-6">
                                <CardTitle>課題</CardTitle>
                                <CardContent className="flex h-full items-center justify-center p-0">
                                  <p>
                                    私は趣味で友人とサイクリングやドライブによく行くのですが、経路を選定する際に他の人の経路を参考にしたいと感じたことが多々ありました．「経路を共有できるサービス」は既に存在しますが，私調べではただ経路を共有するだけのものばかりでした．そこで，独自のサービスを開発したいと思いました．走行時の感想や天候，移動手段なども併せて投稿できるようにすることで，より詳しく経路を選定することができるようになるのではないかと考えました．また，チャット機能を導入することにより，感想を伝えたり細かな情報を伝えてもらえたりすることができると考えました．
                                  </p>
                                </CardContent>
                              </CardContent>
                            </div>
                          </CardContent>
                        </Card>

                        <div className="... col-span-3 col-start-1 row-start-5 flex h-full w-[522px] items-end">
                          <Card className=" flex h-[166px] w-full items-center justify-center overflow-hidden bg-transparent p-0 py-8">
                            {/* mb-6 画面の高さが小さくなったらこれをつける*/}
                            <CardContent className="p-0">
                              <MarqueeWidget />
                            </CardContent>
                          </Card>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </ResizablePanel>
                <ResizableHandle withHandle />
                <ResizablePanel>
                  <iframe
                    src="https://273doworks.com/"
                    className="iframe-rounded size-full"
                  ></iframe>
                </ResizablePanel>
              </ResizablePanelGroup>
            </CardContent>
          </Card>

          {/* <Card className="flex size-full flex-col">
            <CardHeader>
              <CardTitle>Tools</CardTitle>
              <CardDescription>ここにツールの説明を入れます．</CardDescription>
            </CardHeader>
            <CardContent className="size-full">
              Card
              <ResizablePanelGroup
                direction="horizontal"
                className="flex size-full flex-col"
              >
                <ResizablePanel>
                  <Card className="flex size-full flex-col">
                    <CardContent className="size-full">
                  <p>One</p>
                  </CardContent>
                  </Card>
                </ResizablePanel>
                <ResizableHandle />
                <ResizablePanel>
                  <iframe
                    src="https://ui.shadcn.com/"
                    frameBorder="0"
                    className="size-full"
                  ></iframe>
                </ResizablePanel>
              </ResizablePanelGroup>
            </CardContent>
          </Card> */}
        </div>

        {/* <div className="flex h-full items-center justify-center bg-transparent">
          <Card className="flex size-full flex-col bg-transparent">
            <CardHeader>
              <CardTitle>Tools</CardTitle>
              <CardDescription>ここにツールの説明を入れます．</CardDescription>
            </CardHeader>
            <CardContent className="size-full">
              <div className="grid size-full grid-flow-col grid-cols-6 grid-rows-5 gap-4">
                <div className="... col-span-2 row-span-2 row-start-1 bg-red-600">
                  01
                </div>
                <div className="... col-span-1 row-span-2 row-start-1 bg-green-500">
                  02
                </div>
                <div className="... col-span-5 col-start-1 row-start-3 bg-blue-800">
                  03
                </div>
                <div className="... col-span-2 col-start-1 row-start-4 bg-green-500">
                  04
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
                <div className="... col-span-3 col-start-1 row-start-5 ">
                  <Card className="flex h-full w-[522px] items-center justify-center overflow-hidden bg-transparent p-0 py-8">
                    <CardContent className="p-0">
                      <MarqueeWidget />
                    </CardContent>
                  </Card>
                </div>
              </div>
            </CardContent>
          </Card>
        </div> */}
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
