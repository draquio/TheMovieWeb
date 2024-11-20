import { Link } from "react-router-dom";
import { ENV, createPath } from "../../utils";
import { BsPlayFill } from "react-icons/bs";
import { LazyLoadImage } from "react-lazy-load-image-component"
import "react-lazy-load-image-component/src/effects/blur.css";
import defaultImage from "../../assets/default.webp"
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
          <LazyLoadImage
            alt={movie.title}
            src={`${ENV.Api_image_url}${movie.img}`}
            effect="blur"
            className="movie_item_img"
            aria-label="result_item"
            onError={(e) => {
              e.target.onerror = null; 
              e.target.src = defaultImage;
            }}
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
