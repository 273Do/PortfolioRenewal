import type { GalleryObj } from "@/features/gallery/types";
import type { NoticeObj } from "@/features/main/types";
import type { MovieObj } from "@/features/movie/types";
import type { ToolObj } from "@/features/tool/types";

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

// 降順にソートする関数
export const sortedNoticeArray = (arr: NoticeObj[]): NoticeObj[] => {
  return arr.sort((a, b) => {
    const dateA = new Date(a.event_date);
    const dateB = new Date(b.event_date);
    return dateB.getTime() - dateA.getTime(); // 降順
  });
};

// 降順にソートする関数
export const sortedToolArray = (arr: ToolObj[]): ToolObj[] => {
  return arr.sort((a, b) => {
    const dateA = new Date(a.createdAt);
    const dateB = new Date(b.createdAt);
    return dateB.getTime() - dateA.getTime(); // 降順
  });
};

// ランダムに順番を入れ替える関数
export const shuffleArray = (
  arr: GalleryObj[] | MovieObj[]
): GalleryObj[] | MovieObj[] => {
  return arr.sort(() => Math.random() - 0.5);
};

// データとidを入力すると，そのidが何番目なのか，前と次のidは何かを返す関数
export const getNextId = (arr: ToolObj[], id: number) => {
  // const index = sortedToolArray(arr).findIndex((item) => item.id === id);
  // console.log(arr);
  // console.log(index);
  // return [];
  let targetIndex = -1;

  // 対象データのインデックスを探す
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].id === id) {
      targetIndex = i;
      break;
    }
  }

  // インデックスが見つからない場合
  if (targetIndex === -1) {
    return {
      targetIndex: -1,
      previousId: -1,
      nextId: -1,
    };
  }

  // 前のデータと次のデータのIDを取得
  const previousId = targetIndex > 0 ? arr[targetIndex - 1].id : -1;
  const nextId = targetIndex < arr.length - 1 ? arr[targetIndex + 1].id : -1;

  console.log({ targetIndex, previousId, nextId });
  return {
    targetIndex,
    previousId,
    nextId,
  };
};
