import { useState, useEffect } from "react";
import { Movie as MovieClass } from "../../../services/Movie";
import { PopularMoviesItem } from "./PopularMoviesItem";
import "../../scss/singleitem.scss";
import "../../scss/titles.scss";
import { AiOutlinePlus } from 'react-icons/ai';
import { Link } from "react-router-dom";
import { Pagination } from "../../pagination";
import { useNavigate, useSearchParams } from "react-router-dom";

export function PopularMovies() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [movies, setMovies] = useState(null);
  const [page, setPage] = useState(searchParams.get("page") || 1);
  useEffect(() => {
    (async () => {
      try {
        let movieController = new MovieClass();
        const response = await movieController.getPopularMovies(page);
        if (response) {
          const limitmovies = response.slice(0,12);
          setMovies(limitmovies);
          window.scrollTo(0, 0);
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
  if (!movies)
    return <span className="loading loading-spinner loading-lg"></span>;
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
        <Pagination PaginationValue={PaginationValueReceived} actualpage={page} />
      </section>
    </>
  );
}
