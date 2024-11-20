import { useState, useEffect } from "react";
import { Movie as MovieClass } from "../../../services/Movie";
import { PopularMoviesItem } from "./PopularMoviesItem";
import { Pagination } from "../../pagination";
import { Link, useSearchParams } from "react-router-dom";
import { Loader } from "../../Loader/Loader";
import { Background } from "../../Background";
import { AiOutlinePlus } from "react-icons/ai";
export function PopularMovies() {
  const [movies, setMovies] = useState(null);
  const [searchParams] = useSearchParams();
  const page = searchParams.get("page") || 1;
  useEffect(() => {
    (async () => {
      try {
        if (page < 1) window.location.href = "/movies";
        let movieController = new MovieClass();
        const response = await movieController.getPopularMovies(page);
        if (response) {
          setMovies(response);
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
  if (!movies || movies.length === 0) return <Loader />;
  return (
    <>
      <div className="title_contaniner">
        <h2 className="title_section">Películas populares</h2>
        <Link to={"/genre/movie/Acción/28"} className="view_more"> <AiOutlinePlus className="icon_title"/> Géneros</Link>
      </div>
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
