import type { GalleryObj } from "@/features/gallery/types";
import type { NoticeObj } from "@/features/main/types";

// 日付のフォーマットを変更する関数
export const formatDate = (dateString: Date) => {
  const date = new Date(
    new Date(dateString).toISOString().replace(/T.*/, "T00:00:00.000Z")
  );
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}/${month}/${day}`;
};

//降順にソートする関数
export const sortedArray = (arr: NoticeObj[]): NoticeObj[] => {
  return arr.sort((a, b) => {
    const dateA = new Date(a.event_date);
    const dateB = new Date(b.event_date);
    return dateB.getTime() - dateA.getTime(); // 降順
  });
};

//ランダムに順番を入れ替える関数
export const shuffleArray = (arr: GalleryObj[]): GalleryObj[] => {
  return arr.sort(() => Math.random() - 0.5);
};
