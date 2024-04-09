import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { Metadata } from "next";
import { Separator } from "@/components/ui/separator";
import * as PostTabs from "@/features/post/components/PostTabs/PostTabs";

export const metadata: Metadata = {
  title: "273* Portfolio | Post",
};

const page = () => {
  return (
    <main className="h-screen">
      <div className="fixed left-1/2 top-1/2 size-full -translate-x-1/2 -translate-y-1/2 p-12 py-[104px]">
        <div className="flex h-full items-center justify-center">
          <Card className="flex size-full flex-col">
            <CardContent className="p-0">
              <CardHeader>
                <div className="flex justify-between">
                  <div>
                    <CardTitle>Post</CardTitle>
                    <CardDescription className="mt-[6px]">
                      実績やツールの投稿，編集，更新，削除を行います．
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <Separator />
            </CardContent>
            <PostTabs.default />
          </Card>
        </div>
      </div>
    </main>
  );
};

export default page;
