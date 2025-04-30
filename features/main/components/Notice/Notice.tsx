"use client";
import React, { useDeferredValue, useEffect, useState } from "react";

import { Card, CardContent } from "@/components/ui/card";
import { fetchNotices } from "@/lib/contentful";

import type { NoticeObj } from "../../types";

import NoticeArea from "./NoticeArea";
import Welcome from "./Welcome";

const Notice = () => {
  const [notices, setNotices] = useState<{
    items: NoticeObj[];
  } | null>(null);

  const [selectedNoticeDesc, setSelectedNoticeDesc] = useState<string | null>(
    null
  );

  const notice_description = useDeferredValue(selectedNoticeDesc);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchNotices();
      setNotices(data);
    };
    fetchData();
  }, []);

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
