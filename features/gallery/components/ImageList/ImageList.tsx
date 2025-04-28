import React from "react";

import Image from "next/image";
import { format } from "date-fns";
import type { GalleryObj } from "../../types";
import { fetchGalleries } from "@/lib/contentful";

const ImageList = async () => {
  const galleryData = await fetchGalleries();

  return (
    <>
      {galleryData.map((data: GalleryObj) => (
        <div
          className="mb-3 duration-150 hover:scale-[1.025] sm:mb-4"
          key={data.sys.id}
        >
          <div className="relative grayscale duration-200 before:absolute before:inset-0 before:rounded-md before:bg-black before:bg-opacity-20 before:content-[''] hover:grayscale-0 sm:mb-4">
            <Image
              className="rounded-lg"
              // placeholder="blur"
              src={data.image.url}
              alt="img"
              width={1000}
              height={1000}
              // blurDataURL={data.blurDataURL}
            />
            <div className="test__body absolute inset-0 flex flex-col justify-between p-3 text-white">
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
        </div>
      ))}
    </>
  );
};

export default ImageList;
