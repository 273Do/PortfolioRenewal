import React from "react";

import Link from "next/link";

import type { MovieObj } from "../../types";

const MovieList = ({ movieData }: { movieData: MovieObj[] }) => {
  return (
    <div className="flex size-full flex-wrap items-center justify-center gap-5 overflow-y-scroll p-3 sm:p-6">
      {movieData.map((data: MovieObj) => (
        <div key={data.id}>
          <iframe
            className=" movie-iframe-rounded h-[180px] w-[321px] grayscale duration-200 hover:grayscale-0 sm:h-[280px] sm:w-[500px]"
            // width="500"
            // height="280"
            src={data.url}
            title={data.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
          <Link href={data.url} target="_blank" rel="noopener noreferrer">
            <p className="mt-1">{data.title}</p>
          </Link>
          <p className="text-muted-foreground">{data.description}</p>
        </div>
      ))}
    </div>
  );
};

export default MovieList;
