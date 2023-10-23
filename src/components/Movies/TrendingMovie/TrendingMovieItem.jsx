import { ENV, createPath } from "../../../utils";
import { Link } from "react-router-dom";
import { BsPlayFill } from "react-icons/bs";

export function TrendingMovieItem(props) {
    const { movie } = props;
    const date = new Date(movie.date);
    const path = createPath(movie.title);
    const url = `/movie/${path}/${movie.id}`;
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
          <span className="view_now_class">Ver Película</span>
          <span className="year_item">{date.getFullYear()}</span>
        </div>
        <p>{movie.title}</p>
      </Link>
    );
}
