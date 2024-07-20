/* eslint-disable tailwindcss/migration-from-tailwind-2 */
import React from "react";

import Image from "next/image";

import { formatDate } from "@/app/utils/function";

import type { GalleryObj } from "../../types";

const ImageList = ({ galleryData }: { galleryData: GalleryObj[] }) => {
  return (
    <>
      {galleryData.map((data: GalleryObj) => (
        <div
          className="mb-3 duration-150 hover:scale-[1.025] sm:mb-4"
          key={data.id}
        >
          <div className="relative before:absolute before:inset-0 before:rounded-md before:bg-black before:bg-opacity-20 before:content-[''] sm:mb-4">
            <Image
              className="rounded-lg"
              // placeholder="blur"
              src={data.url}
              alt="img"
              width={1000}
              height={1000}
              // blurDataURL={data.blurDataURL}
            />
            <div className="test__body absolute inset-0 flex flex-col justify-between p-3 text-white">
              <div className="relative">
                <h1 className="mb-1 text-3xl font-bold">{data.title}</h1>
                <p className="test__author font-sm font-light">
                  {data.description}
                </p>
              </div>
              <p className="test__author text-xs  font-light">
                {formatDate(data.event_date)}
              </p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default ImageList;
