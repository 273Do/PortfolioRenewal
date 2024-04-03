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
import * as FAQ from "@/features/faq/components/index";

export const metadata: Metadata = {
  title: "273* Portfolio | FAQ",
};

const page = () => {
  return (
    <main className="h-screen">
      <div className="fixed left-1/2 top-1/2 size-full -translate-x-1/2 -translate-y-1/2 p-12 py-[104px]">
        <div className="flex h-full items-center justify-center">
          <Card className="flex size-full flex-col">
            <CardContent className="size-full overflow-y-hidden p-0">
              <CardHeader>
                <div className="flex justify-between">
                  <div>
                    <CardTitle>Frequently Asked Question</CardTitle>
                    <CardDescription className="mt-[6px]">
                      よくある質問をまとめました．
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <Separator />
              <FAQ.FAQList />
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
};

export default page;
