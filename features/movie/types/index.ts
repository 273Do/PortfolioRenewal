export type MovieObj = {
  id: number;
  url: string;
  title: string;
  description: string;
};

export type YTProfileObj = {
  kind: string;
  etag: string;
  id: string;
  statistics: {
    viewCount: string;
    subscriberCount: string;
    hiddenSubscriberCount: boolean;
    videoCount: string;
  };
};
