// お知らせの型
type NoticeObj = {
  sys: {
    id: string;
  };
  title: string;
  description: string;
  url: string;
  createdAt: string;
};

type NoticesResponse = {
  noticesCollection: {
    items: NoticeObj[];
  };
};

export type { NoticeObj, NoticesResponse };
