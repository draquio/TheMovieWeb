import { ENV } from "../../utils";
import { BiSolidTimeFive, BiSolidCameraMovie } from "react-icons/bi";
import { BsCalendar2DateFill } from "react-icons/bs";
import { AiFillStar } from "react-icons/ai";

export function HeaderMovie(props) {
  const { movie, cast } = props;
  const hours = Math.floor(movie.runtime / 60);
  const minutes = movie.runtime % 60;
  const date = new Date(movie.release_date);
  const avarage = Math.round(movie.vote_average * 10) / 10;
  return (
    <div className="header_post">
      <img alt={movie.title} src={`${ENV.Api_image_url}${movie.poster_path}`} />
      <div className="info_post">
        <h1>{movie.title}</h1>
        <div className="genre_post">
          <ul className="genre_list">
            {movie.genres.map((movie) => (
              <li key={movie.id}>{movie.name}</li>
            ))}
          </ul>
          <div className="details_movie">
          <p className="details_movie_item">
              <BiSolidTimeFive className="icon_post" /> {hours}h {minutes}m
            </p>
            <p className="details_movie_item">
              <BsCalendar2DateFill className="icon_post" />
              {date.getFullYear()}
            </p>
            <p className="details_movie_item">
              <AiFillStar className="icon_post"/>
              {avarage}/10
            </p>
            </div>
        </div>
        <div className="overview_post">{movie.overview}</div>
        <div className="director_post">
          Dirección:
          <ul>
            {cast.directors.map((director) => (
              <li key={director.id}>{director.name}</li>
            ))}
          </ul>
        </div>
        <div className="cast_post">
          Elenco:
          <ul>
            {cast.actors.map((actor) => (
              <li key={actor.id}>{actor.name}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
