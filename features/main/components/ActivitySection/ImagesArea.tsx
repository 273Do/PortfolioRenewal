import { format } from "date-fns";
import Image from "next/image";

import type { GalleryObj } from "@/features/gallery/types";
import { fetchGalleries } from "@/lib/contentful";

const RandomImageList = async () => {
  const galleryData = await fetchGalleries();

  return (
    <div className="columns-2 gap-2 px-2 sm:columns-2 sm:gap-4 lg:columns-3 xl:columns-4">
      {galleryData.map((data: GalleryObj) => (
        <div
          // eslint-disable-next-line tailwindcss/migration-from-tailwind-2
          className="group relative grayscale duration-200 before:absolute before:inset-0 before:rounded-md before:bg-black before:bg-opacity-20 before:content-[''] hover:grayscale-0 sm:mb-4"
          key={data.sys.id}
        >
          <Image
            className="rounded-lg"
            src={data.image.url}
            alt="img"
            width={1000}
            height={1000}
          />
          <div className="absolute inset-0 flex flex-col justify-between p-3 text-white opacity-0 duration-200 group-hover:opacity-100">
            <div className="relative">
              <h1 className="text-3xl font-bold">{data.title}</h1>
              <p className="font-sm font-light">{data.description}</p>
            </div>
            <p className="text-xs font-light">
              {format(
                new Date(data.eventDate).toLocaleDateString(),
                "yyyy-MM-dd"
              )}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RandomImageList;
