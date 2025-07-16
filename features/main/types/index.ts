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

type GalleryObj = {
  sys: {
    id: string;
  };
  title: string;
  description: string;
  image: {
    url: string;
  };
  eventDate: string;
};

type GalleriesResponse = {
  galleriesCollection: {
    items: GalleryObj[];
  };
};

export type { NoticeObj, NoticesResponse, GalleryObj, GalleriesResponse };
