import type { NoticeObj } from "@/features/main/types";

// 全てのお知らせデータを取得する
async function getNoticeAllData() {
  const response = await fetch("http://localhost:3000/api/notice", {
    cache: "no-store",
  });
  const NoticeAllData: NoticeObj[] = await response.json();
  return NoticeAllData;
}

export { getNoticeAllData };
