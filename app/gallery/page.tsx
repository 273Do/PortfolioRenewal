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
          <Card className="flex size-full flex-col overflow-y-scroll">
            <CardHeader className="p-3 sm:p-6">
              <CardTitle>Gallery</CardTitle>
              <CardDescription>
                以下は趣味一覧です。様々なことに挑戦しています。
              </CardDescription>
            </CardHeader>
            <Separator />
            <CardContent className="size-full p-3 sm:overflow-y-scroll sm:p-6">
              <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4">
                <Gallery.ImageList galleryData={shuffleGalleryData} />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
}
