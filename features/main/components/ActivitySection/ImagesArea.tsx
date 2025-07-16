import { format } from "date-fns";
import Image from "next/image";

import { fetchGalleries } from "@/lib/contentful";

import type { GalleryObj } from "../../types";

const RandomImageList = async () => {
  const galleries = await fetchGalleries();

  return (
    <div className="columns-2 gap-2 px-2 sm:columns-2 sm:gap-4 lg:columns-3 xl:columns-4">
      {galleries.map((data: GalleryObj) => (
        <div
          // eslint-disable-next-line tailwindcss/migration-from-tailwind-2
          className="group relative mb-2 grayscale duration-200 before:absolute before:inset-0 before:rounded-md before:bg-black before:bg-opacity-20 before:content-[''] hover:grayscale-0 sm:mb-4"
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
              <h1 className="text-xl font-bold sm:text-3xl">{data.title}</h1>
              <p className="text-xs font-light sm:text-sm">
                {data.description}
              </p>
            </div>
            <p className="text-xs font-light sm:text-sm">
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
