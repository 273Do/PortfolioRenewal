import React from "react";
import type { MovieObj } from "../../types";
import Link from "next/link";

const MovieList = ({ movieData }: { movieData: MovieObj[] }) => {
  return (
    <div className="flex size-full flex-wrap items-center justify-center gap-5 overflow-y-scroll p-6">
      {movieData.map((data: MovieObj) => (
        <div key={data.id}>
          <iframe
            className="movie-iframe-rounded"
            width="500"
            height="280"
            src={data.url}
            title={data.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
          <Link href={data.url} target="_blank" rel="noopener noreferrer">
            <p className="mt-2">{data.title}</p>
          </Link>
          <p className="text-muted-foreground">{data.description}</p>
        </div>
      ))}
    </div>
  );
};

export default MovieList;
