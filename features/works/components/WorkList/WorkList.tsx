import React from "react";

import Image from "next/image";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";

import type { WorkObj } from "../../types";

const WorkList = ({ worksData }: { worksData: WorkObj[] }) => {
  return (
    <div className="flex size-full flex-row items-start justify-center">
      <div className="m-3 flex w-full max-w-[700px] flex-wrap sm:m-4">
        {worksData.map((work: WorkObj) => {
          const randomNumber = Math.floor(Math.random() * 1000);
          const width = 1920;
          const height = 1080;

          const imageUrl = `https://picsum.photos/seed/${randomNumber}/${width}/${height}`;
          return (
            <Link
              key={work.id}
              href={`/works/${work.id}`}
              className="mb-6 flex w-full cursor-pointer flex-col gap-3 p-2 grayscale duration-200 hover:grayscale-0 sm:w-1/2"
            >
              <div>
                <p className="text-xl font-bold">{work.title}</p>
                <p className="text-muted-foreground">{work.description}</p>
              </div>
              <Image
                src={imageUrl}
                alt={work.title}
                width={300}
                height={200}
                className="w-full rounded-lg"
              />
              <div>
                {work.tags.map((tag: string) => (
                  <Badge key={tag} className="mr-2">
                    {tag}
                  </Badge>
                ))}
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default WorkList;
