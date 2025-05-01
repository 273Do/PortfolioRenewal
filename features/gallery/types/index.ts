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

export type { GalleryObj, GalleriesResponse };
