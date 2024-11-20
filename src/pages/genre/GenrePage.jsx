import React from "react";
import { useParams } from "react-router-dom";
import { MoviesByGenre } from "../../components/Movies/ByGenre/MoviesByGenre";
import { SeriesByGenre } from "../../components/Series/ByGenre/SeriesByGenre";

export function GenrePage() {
  const params = useParams();
  const { name, id, type } = params;
  return (
    <>
      {type === "movie" ? (
        <MoviesByGenre id={id} name={name} />
      ) : (
        <SeriesByGenre id={id} name={name} />
      )}
    </>
  );
}
