import React from "react";
import movieData from "./movieData.json";
import type { movieObj } from "../../types";

const MovieList = () => {
  console.log(movieData);
  return (
    <div className="flex size-full flex-wrap items-center justify-center gap-5 overflow-y-scroll p-6">
      {movieData.map((data: movieObj) => (
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
          <p className="mt-2">{data.title}</p>
          <p className="text-muted-foreground">{data.description}</p>
        </div>
      ))}
    </div>
  );
};

export default MovieList;
