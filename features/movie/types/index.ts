type MovieObj = {
  sys: {
    id: string;
  };
  title: string;
  url: string;
  tags: string[];
};

type MoviesResponse = {
  moviesCollection: {
    items: MovieObj[];
  };
};

type YTProfileObj = {
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

export type { MovieObj, MoviesResponse, YTProfileObj };
