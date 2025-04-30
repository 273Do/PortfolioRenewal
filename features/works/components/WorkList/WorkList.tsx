import React from "react";

import Image from "next/image";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { fetchWorks } from "@/lib/contentful";

import type { WorkObj } from "../../types";

const WorkList = async () => {
  const { items: works } = await fetchWorks();

  return (
    <div className="flex size-full flex-row items-start justify-center">
      <div className="flex w-full max-w-[700px] flex-wrap">
        {works.map((work: WorkObj, i: number) => {
          return (
            <Link
              key={work.sys.id}
              href={`/works/${work.sys.id}`}
              className={`mb-4 flex w-full cursor-pointer flex-col gap-1 p-0 grayscale duration-200 hover:grayscale-0 sm:w-1/2 ${
                i % 2 === 0 ? "sm:pr-2" : "sm:pl-2"
              }`}
            >
              <div>
                <p className="text-xl font-bold">{work.name}</p>
                <p className="truncate text-muted-foreground">
                  {work.description}
                </p>
              </div>
              <Image
                src={work.thumbnail.url}
                alt={work.name}
                width={1920}
                height={1080}
                className="w-full rounded-lg"
              />
              <div>
                {work.tags.map((tag: string) => (
                  <Badge variant="secondary" key={tag} className="mr-2">
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
