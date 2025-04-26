import React from "react";

import { Separator } from "@/components/ui/separator";
import MarqueeWidget from "@/features/Marquee/components/Marquee";
import { WorkObj } from "../../types";
import ReactMarkdown from "react-markdown";
import { format } from "date-fns";

const Detail = ({ detail }: { detail: WorkObj }) => {
  return (
    <div className="flex size-full flex-row items-start justify-center p-3 sm:p-0">
      <div className="m-0 flex w-full max-w-[700px] flex-wrap sm:m-6">
        <div className="flex size-full flex-col gap-5">
          <div>
            <div className="flex items-center justify-between text-muted-foreground">
              <p>
                {format(
                  new Date(detail.createdAt).toLocaleDateString(),
                  "yyyy-MM-dd"
                )}
              </p>
              <p>期間 ： {detail.period}</p>
            </div>
            <div className="my-4">
              <MarqueeWidget technologyData={detail.technologiesObj} />
            </div>
            <Separator />
            <div className="mt-4 mb-3 sm:mb-6 md">
              <ReactMarkdown>{detail.body}</ReactMarkdown>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
