import React from "react";

import Link from "next/link";

import type { MovieObj } from "../../types";
import { fetchMovies } from "@/lib/contentful";
import { Badge } from "@/components/ui/badge";

const MovieList = async () => {
  const movieData = await fetchMovies();

  return (
    <div className="flex size-full flex-wrap items-center justify-center gap-9 overflow-y-scroll p-3 sm:p-6">
      {movieData.map((data: MovieObj) => (
        <div key={data.sys.id} className="flex flex-col gap-1">
          <Link href={data.url} target="_blank" rel="noopener noreferrer">
            <p className="text-xl font-bold">{data.title}</p>
          </Link>
          <div className="flex items-center gap-2">
            {data.tags.map((tag, index) => (
              <Badge key={index} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>
          {/* <p className="mb-2 text-muted-foreground">{data.description}</p> */}
          <iframe
            className=" movie-iframe-rounded h-[180px] w-[321px] grayscale duration-200 hover:grayscale-0 sm:h-[280px] sm:w-[500px]"
            // width="500"
            // height="280"
            src={data.url}
            title={data.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>
      ))}
    </div>
  );
};

export default MovieList;
