import React, { useEffect, useState } from "react";
import { Movie as MovieClass } from "../../../services/Movie";
import { Loader } from "../../Loader/Loader";
import { Background } from "../../Background";
import { Pagination } from "../../pagination";
import { useSearchParams } from "react-router-dom";
import { PopularMoviesItem } from "../Popular";
import { Genre } from "../../Genre";

export function MoviesByGenre(props) {
  const { id, name } = props;
  const [movies, setMovies] = useState(null);
  const [searchParams] = useSearchParams();
  const page = searchParams.get("page") || 1;
  useEffect(() => {
    (async () => {
      try {
        const movieController = new MovieClass();
        const response = await movieController.getPopularMoviesByGenre(
          page,
          id
        );
        setMovies(response);
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      } catch (error) {
        console.error(error);
      }
    })();
  }, [id, page]);
  if (!movies || movies.length === 0) return <Loader />;
  return (
    <>
      <div className="title_contaniner">
        <h2 className="title_section">Películas - {name}</h2>
      </div>
        <Genre type="movie" />
        <section className="movies_list_content">
          {movies.map((movie) => (
            <article key={movie.id} className="movie_item">
              <PopularMoviesItem movie={movie} />
            </article>
          ))}
        </section>
      <Pagination />
      <Background movie={movies[0]} />
    </>
  );
}
