import { ENV, createPath } from "../../../utils";
import { BsPlayFill } from "react-icons/bs";
import { LazyLoadImage } from "react-lazy-load-image-component";
import defaultimg from "../../../assets/default.webp";
import { Link } from "react-router-dom";

export function RecommendationMovieItem(props) {
  const { recommendation } = props;
  const date = new Date(recommendation.date);
  const path = createPath(recommendation.title);
  const url = `/movie/${path}/${recommendation.id}`;
  return (
    <Link to={url}>
      <div className="image_container">
        <figure>
          <LazyLoadImage
            alt={recommendation.title}
            src={`${ENV.Api_image_url}${recommendation.img}`}
            placeholderSrc={defaultimg}
            className="movie_item_img"
            effect="blur"
          />
        </figure>
        <BsPlayFill className="icon_play" />
        <span className="view_now_class">Ver Película</span>
        <span className="year_item">{date.getFullYear()}</span>
      </div>
      <p>{recommendation.title}</p>
    </Link>
  );
}
