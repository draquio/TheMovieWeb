import { useState, useEffect } from "react";
import { Movie as MovieClass } from "../../../services/Movie";
import { TrendingMovieItem } from "./TrendingMovieItem";
import "../../scss/singleitem.scss";
import "../../scss/titles.scss";
import { AiOutlinePlus } from 'react-icons/ai';
import { Link } from "react-router-dom";

export function TrendingMovie() {
    const [movies, setMovies] = useState(null);
    useEffect(() => {
      (async () => {
        try {
          let movieController = new MovieClass();
          const response = await movieController.getTrendingMovies();
          if (response) {
            const limitmovies = response.slice(0,12);
            setMovies(limitmovies);
            window.scrollTo(0, 0);
          }
        } catch (error) {
          console.error(error);
        }
      })();
    }, []);
    if (!movies)
      return <span className="loading loading-spinner loading-lg"></span>;
    return (
      <>
      <div className="title_contaniner">
        <h2 className="title_section">Tendencias en Peliculas</h2>
        <Link to={"/movies"} className="view_more"> <AiOutlinePlus className="icon_title"/> Ver más</Link>
      </div>
        <section className="movies_list_content">
          {movies.map((movie) => (
            <article key={movie.id} className="movie_item">
              <TrendingMovieItem movie={movie} />
            </article>
          ))}
        </section>
      </>
    );
}
