import { useState, useEffect } from "react";
import { Movie as MovieClass } from "../../../services/Movie";
import { TrendingMovieItem } from "./TrendingMovieItem";
import { AiOutlinePlus } from 'react-icons/ai';
import { Link } from "react-router-dom";
import { Loader } from "../../Loader/Loader";
import {Background} from "../../Background"

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
            window.scrollTo({
              top: 0,
              behavior: "smooth"
            });
          }
        } catch (error) {
          console.error(error);
        }
      })();
    }, []);
    if (!movies || movies.length === 0) return <Loader />
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
        <Background movie={movies[0]} />
      </>
    );
}
