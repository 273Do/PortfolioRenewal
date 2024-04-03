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
import type { Metadata } from "next";
import * as Gallery from "@/features/gallery/components/index";

export const metadata: Metadata = {
  title: "273* Portfolio | Gallery",
};

const page = () => {
  return (
    <main className="h-screen">
      <div className="fixed left-1/2 top-1/2 size-full -translate-x-1/2 -translate-y-1/2 p-12 py-[104px]">
        <div className="flex h-full items-center justify-center">
          <Card className="flex size-full flex-col">
            <CardContent className="size-full overflow-y-scroll p-0">
              <div className="m-4 columns-2 lg:columns-3 xl:columns-4">
                <Card className="mb-4 border-none p-2 shadow-none">
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
                  <Separator className="-mb-2 mt-3" />
                </Card>
                <Gallery.ImageList />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
};

export default page;
