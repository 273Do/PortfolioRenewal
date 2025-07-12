import { useMemo } from "react";

import Image from "next/image";

const getRandomHeight = () => {
  const heights = [300, 400, 500, 600];
  return heights[Math.floor(Math.random() * heights.length)];
};

const RandomImageList = () => {
  const imageList = useMemo(
    () =>
      Array.from({ length: 12 }, (_, i) => {
        const height = getRandomHeight();
        return {
          id: i,
          src: `https://picsum.photos/id/${i * 7}/600/${height}`,
          height,
        };
      }),
    []
  );

  return (
    <div className="columns-2 gap-4 sm:columns-2 lg:columns-3 xl:columns-4">
      {imageList.map((image) => (
        <div
          key={image.id}
          className="mb-4 break-inside-avoid overflow-hidden rounded-lg"
        >
          <div
            className="relative w-full grayscale transition-all duration-300 hover:grayscale-0"
            style={{ aspectRatio: `600 / ${image.height}` }}
          >
            <Image
              src={image.src}
              alt={`Image ${image.id}`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw,
                     (max-width: 1200px) 50vw,
                     33vw"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default RandomImageList;
