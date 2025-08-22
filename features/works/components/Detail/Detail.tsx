import React from "react";
import ReactMarkdown from "react-markdown";

import { format } from "date-fns";

import MarqueeWidget from "@/components/Marquee/Marquee";
import { Separator } from "@/components/ui/separator";

import type { WorkObj } from "../../types";

const Detail = ({ detail }: { detail: WorkObj }) => {
  return (
    <div className="flex size-full flex-row items-start justify-center">
      <div className=" flex w-full max-w-[700px] flex-wrap ">
        <div className="flex size-full flex-col gap-5">
          <div>
            <div className="flex items-center justify-between text-muted-foreground">
              <p>
                リリース ：{" "}
                {format(
                  new Date(detail.createdAt).toLocaleDateString(),
                  "yyyy-MM-dd"
                )}
              </p>
              <p>期間 ： {detail.period}</p>
            </div>
            <div className="my-4">
              <MarqueeWidget
                iconName={detail.techNames}
                direction="left"
                mode="detail"
              />
            </div>
            <Separator />
            <div className="md mb-3 mt-4 sm:mb-6">
              <ReactMarkdown>{detail.body}</ReactMarkdown>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
