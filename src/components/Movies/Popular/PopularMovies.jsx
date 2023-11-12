import { useState, useEffect } from "react";
import { Movie as MovieClass } from "../../../services/Movie";
import { PopularMoviesItem } from "./PopularMoviesItem";
import { Pagination } from "../../pagination";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Loader } from "../../Loader/Loader";
import { Background } from "../../Background";

export function PopularMovies() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [movies, setMovies] = useState(null);
  const [page, setPage] = useState(searchParams.get("page") || 1);
  useEffect(() => {
    (async () => {
      try {
        if (page < 1) window.location.href = "/movies";
        let movieController = new MovieClass();
        const response = await movieController.getPopularMovies(page);
        if (response) {
          const limitmovies = response.slice(0,18);
          setMovies(limitmovies);
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          });
        }
      } catch (error) {
        console.error(error);
      }
    })();
  }, [page]);
  const PaginationValueReceived = (actualpage) => {
    setPage(actualpage);
    navigate(`?page=${actualpage}`);
  };
  if (!movies || movies.length === 0) return <Loader />;
  return (
    <>
      <div className="title_contaniner">
        <h2 className="title_section">Películas populares</h2>
      </div>
      <section className="movies_list_content">
        {movies.map((movie) => (
          <article key={movie.id} className="movie_item">
            <PopularMoviesItem movie={movie} />
          </article>
        ))}
      </section>
      <Pagination PaginationValue={PaginationValueReceived} actualpage={page} />
      <Background movie={movies[0]} />
    </>
  );
}
