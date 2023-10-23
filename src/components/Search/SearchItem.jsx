import { Link } from "react-router-dom";
import { ENV, createPath } from "../../utils";
import { BsPlayFill } from "react-icons/bs";

export function SearchItem(props) {
  const { movie } = props;
  const path = createPath(movie.title);
  const date = new Date(movie.date);
  const type = movie.type === "movie" ? "movie" : "serie";
  const url = `/${type}/${path}/${movie.id}`;
  return (
    <Link to={url}>
      <div className="image_container">
        <figure>
          <img
            alt={movie.title}
            src={`${ENV.Api_image_url}${movie.img}`}
            className="movie_item_img"
          />
        </figure>
        <BsPlayFill className="icon_play" />
        <span className="view_now_class">
          Ver {movie.type === "movie" ? "Película" : "Serie"}
        </span>
        <span className="year_item">{date.getFullYear()}</span>
      </div>
      <p>{movie.title}</p>
    </Link>
  );
}
