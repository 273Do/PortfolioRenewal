import React from "react";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";
import type { NoticeObj } from "../../types";
import { formatDate } from "@/app/utils/function";

const Notice = ({ noticeData }: { noticeData: NoticeObj[] }) => {
  return (
    <ScrollArea className="h-full rounded-md border">
      <div className="p-4">
        <h4 className="mb-4 text-lg font-medium leading-none">Notice</h4>
        <div className="flex flex-col">
          {noticeData.map((data: NoticeObj) => (
            // <div key={data.id} style={{ order: -data.id }}>
            <div key={data.id}>
              <p className="mb-1 text-xs text-muted-foreground">
                {formatDate(data.event_date)}
              </p>
              <div className="text-sm">{data.content}</div>
              <Separator className="my-2" />
            </div>
          ))}
        </div>
      </div>
    </ScrollArea>
  );
};

export default Notice;
