import { useEffect, useState } from "react";
import { Movie as MovieClass } from "../../services/Movie";
import { HeaderMovie } from "./HeaderMovie";
import { BodyMovie } from "./BodyMovie";
import { Cast as CastClass } from "../../services/Cast";
import "./SingleMovie.scss"
import { ENV } from "../../utils";

export function SingleMovie(props) {
  const { id } = props;
  const [movie, setMovie] = useState(null);
  const [cast, setCast] = useState(null);
  console.log(movie);
  useEffect(() => {
    (async () => {
      try {
        const movieController = new MovieClass();
        const response = await movieController.getSingleMovie(id);
        const castController = new CastClass();
        const responsecast = await castController.getMovieCast(id);
        setMovie(response);
        setCast(responsecast);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);
  if (!movie)
    return <span className="loading loading-spinner loading-lg"></span>;
  return (
    <>
      <div className="bgtop"><img alt={movie.title} src={`${ENV.Api_image_url_backgroud}${movie.backdrop_path}`} /></div>
      <HeaderMovie cast={cast} movie={movie} />
      <BodyMovie movie={movie} />
    </>
  );
}
