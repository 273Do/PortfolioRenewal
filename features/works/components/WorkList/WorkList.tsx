import React from "react";

import Image from "next/image";

import type { WorkObj } from "../../types";

const WorkList = ({ worksData }: { worksData: WorkObj[] }) => {
  return (
    <div className="flex size-full flex-row items-start justify-center">
      <div className="m-3 w-full max-w-[700px] sm:m-4">
        {worksData.map((work: WorkObj) => {
          const randomNumber = Math.floor(Math.random() * 1000);
          const width = 1920;
          const height = 1080;

          const imageUrl = `https://picsum.photos/seed/${randomNumber}/${width}/${height}`;
          return (
            <div key={work.id} className="mb-4">
              <p className="text-xl font-bold">{work.title}</p>
              <p className="text-muted-foreground">{work.description}</p>
              <Image src={imageUrl} alt={work.title} width={300} height={200} />
              {work.tags.map((tag: string) => (
                <span
                  key={tag}
                  className="mr-2 mt-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700"
                >
                  {tag}
                </span>
              ))}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WorkList;
