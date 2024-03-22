import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
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
                    <Separator />
                    <CardContent className="size-full overflow-y-scroll p-6">
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
                          <Card className="mb-6 flex h-[166px] w-full items-center justify-center overflow-hidden bg-transparent p-0 py-8">
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
        </div>
      </div>
    </main>
  );
};

export default page;
