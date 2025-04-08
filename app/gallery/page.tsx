import React from "react";

import type { Metadata } from "next";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import * as Gallery from "@/features/gallery/components/index";
import type { GalleryObj } from "@/features/gallery/types";

import { getGalleryData } from "../utils/api/Gallery/GalleryApi";
import { shuffleArray } from "../utils/function";
export const metadata: Metadata = {
  title: "273* Portfolio | Gallery",
};

export default async function page() {
  const galleryData: GalleryObj[] = await getGalleryData();

  const shuffleGalleryData = shuffleArray(galleryData) as GalleryObj[];

  return (
    <main className="h-screen">
      <div className="fixed left-1/2 top-1/2 size-full -translate-x-1/2 -translate-y-1/2 p-3 py-[70px] sm:p-12 sm:py-[104px]">
        <div className="flex h-full items-center justify-center">
          <Card className="flex size-full flex-col">
            <CardContent className="size-full overflow-y-scroll p-0">
              <div className="m-3 columns-1 sm:m-4 sm:columns-2 lg:columns-3 xl:columns-4">
                <Card className="mb-3 border-none p-0 shadow-none sm:mb-4 sm:p-2">
                  <CardHeader className="p-0">
                    <CardTitle>Gallery</CardTitle>
                    <CardDescription>
                      以下は趣味一覧です．様々なことに挑戦しています．
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="p-0 pt-3">
                    趣味でピアノやサイクリング，アウトドアなどを楽しんでいます．
                    また，ものづくりやチーム開発に取り組んでいます．
                  </CardContent>
                  <Separator className="-mb-2 mt-3" />
                </Card>
                <Gallery.ImageList galleryData={shuffleGalleryData} />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
}
