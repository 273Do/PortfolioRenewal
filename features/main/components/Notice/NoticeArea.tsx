import React, { memo } from "react";

import { format } from "date-fns";
import Link from "next/link";

import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";

import type { NoticeObj } from "../../types";

// eslint-disable-next-line react/display-name
const NoticeArea = memo(
  ({
    noticeData,
    handleHover,
  }: {
    noticeData: NoticeObj[];
    handleHover(notice_description: string): void;
  }) => {
    return (
      <ScrollArea className="size-full rounded-md border">
        <div className="p-4">
          <h4 className="mb-4 text-lg font-medium leading-none">Notice</h4>
          {noticeData && (
            <div className="flex flex-col">
              {noticeData.map((notice: NoticeObj) => (
                <div
                  key={notice.sys.id}
                  onMouseEnter={() => {
                    handleHover(notice.description);
                  }}
                  onMouseLeave={() => {
                    handleHover(null);
                  }}
                >
                  <p className="mb-1 text-xs text-muted-foreground">
                    {format(
                      new Date(notice.createdAt).toLocaleDateString(),
                      "yyyy-MM-dd"
                    )}
                  </p>
                  {notice.url ? (
                    <Link
                      href={notice.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="text-sm underline duration-200 hover:opacity-75">
                        <p>{notice.title}</p>
                      </div>
                    </Link>
                  ) : (
                    <div className="text-sm">{notice.title}</div>
                  )}
                  <Separator className="my-2" />
                </div>
              ))}
            </div>
          )}
        </div>
      </ScrollArea>
    );
  }
);

export default NoticeArea;
