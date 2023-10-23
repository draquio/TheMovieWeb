import { Link } from "react-router-dom"
import { ENV, createPath } from "../../../utils"
import "./PopularSeries.scss"
import { BsPlayFill } from "react-icons/bs"
export function PopularSeriesItem(props) {
  const {serie} = props
  const date = new Date(serie.date);
  const path = createPath(serie.title)
  const url = `/serie/${path}/${serie.id}`
  return (
    <Link to={url}>
      <div className="image_container">
        <figure>
          <img
            alt={serie.title}
            src={`${ENV.Api_image_url}${serie.img}`}
            className="movie_item_img"
          />
        </figure>
        <BsPlayFill className="icon_play" />
        <span className="view_now_class">Ver Serie</span>
        <span className="year_item">{date.getFullYear()}</span>
      </div>
      <p>{serie.title}</p>
    </Link>

  )
}
