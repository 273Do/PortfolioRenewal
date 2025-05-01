"use client";
import React, { useDeferredValue, useState } from "react";

import useSWR from "swr";

import { Card, CardContent } from "@/components/ui/card";
import { fetchNotices } from "@/lib/contentful";

import NoticeArea from "./NoticeArea";
import Welcome from "./Welcome";

const fetcher = async () => {
  const data = await fetchNotices();
  return data;
};

const Notice = () => {
  const { data: notices } = useSWR("notices", fetcher);

  const [selectedNoticeDesc, setSelectedNoticeDesc] = useState<string | null>(
    null
  );

  const notice_description = useDeferredValue(selectedNoticeDesc);

  return (
    <>
      <Card className="... col-span-2 col-start-2 row-span-2 row-start-1 flex items-center justify-center bg-transparent p-0">
        <CardContent className="p-0">
          <Welcome notice_description={notice_description} />
        </CardContent>
      </Card>

      <div className="... col-span-1 row-span-2 row-start-1 flex items-center justify-center p-0">
        <NoticeArea
          noticeData={notices?.items}
          handleHover={setSelectedNoticeDesc}
        />
      </div>
    </>
  );
};

export default Notice;
