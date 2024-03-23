import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "273* Portfolio | Gallery",
};

type galleryObj = {
  id: number;
  title: string;
  url: string;
  description: string;
};

// 10個のオブジェクトを格納するための空の配列を作成
const galleryData: galleryObj[] = [];

// 10回のループでオブジェクトを生成して配列に追加
for (let i = 1; i <= 10; i++) {
  const obj = {
    id: i,
    title: `タイトル${i}`,
    url: `https://source.unsplash.com/random/${i}`,
    description: `説明をここに入れる${i}`,
  };
  galleryData.push(obj);
}

const page = () => {
  return (
    <main className="h-screen">
      <div className="fixed left-1/2 top-1/2 size-full -translate-x-1/2 -translate-y-1/2 p-12 py-[104px]">
        <div className="flex h-full items-center justify-center">
          <Card className="flex size-full flex-col">
            <CardContent className="size-full overflow-y-scroll p-0">
              <div className="m-4 columns-2 lg:columns-3 xl:columns-4">
                <Card className="mb-4 border-none">
                  <CardHeader className="p-0">
                    <CardTitle>Gallery</CardTitle>
                    <CardDescription>
                      以下は趣味一覧です．様々なことに挑戦しています．
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="p-0 pt-3">
                    趣味でピアノやサイクリング，カラーグレーディングなどを楽しんでいます．
                    数人の友人とマイコンを用いてプラモデルの無線化に取り組んだんりしています．
                  </CardContent>
                  <Separator className="mt-1" />
                </Card>

                {galleryData.map((data: galleryObj) => (
                  <div
                    className="mb-4 duration-150 hover:scale-[1.025]"
                    key={data.id}
                  >
                    <HoverCard>
                      <HoverCardTrigger>
                        <Image
                          className="rounded-lg"
                          src={data.url}
                          alt="img"
                          width={1000}
                          height={1000}
                        />
                      </HoverCardTrigger>
                      <HoverCardContent>
                        <p>{data.title}</p>
                        <p className="text-muted-foreground">
                          {data.description}
                        </p>
                      </HoverCardContent>
                    </HoverCard>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
};

export default page;
