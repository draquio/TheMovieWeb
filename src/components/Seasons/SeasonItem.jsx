import "./Season.scss";
import { BsCalendar2DateFill } from "react-icons/bs";
import { AiFillPlayCircle, AiFillStar } from "react-icons/ai";
import { ENV } from "../../utils";
import { Loader } from "../Loader/Loader";
import { Emptydata } from "../Emptydata";
import { LazyLoadImage } from 'react-lazy-load-image-component';

export function SeasonItem(props) {
  const { season } = props;
  if (!season) return <Loader />
  if (season.length === 0) return <Emptydata data={"Teasers"} />
  
  return (
    <div className="season_item">
      <div className="season_item_img">
        <LazyLoadImage
          alt={season.name}
          src={`${ENV.Api_image_url}${season.poster_path}`}
          effect="blur"
        />
      </div>
      <div className="saeson_item_content">
        <h3>{season.name}</h3>
        <div className="season_item_header">
          <p>
            <BsCalendar2DateFill className="icon_post" />
            {new Date(season.air_date).getFullYear()}
          </p>
          <p>
            <AiFillPlayCircle className="icon_post" />{" "}
            {`${season.episode_count} capitulos` || ""}{" "}
          </p>
          {season.vote_average !== 0 ? (
            <p>
              <AiFillStar className="icon_post" />
              {season.vote_average} puntos
            </p>
          ) : (
            ""
          )}
        </div>
        <p>{season.overview || "Sin descripción"}</p>
      </div>
    </div>
  );
}
