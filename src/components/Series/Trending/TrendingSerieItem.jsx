import React from 'react'
import { BsPlayFill } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { ENV, createPath } from "../../../utils"
import { LazyLoadImage } from 'react-lazy-load-image-component';
import "react-lazy-load-image-component/src/effects/blur.css";

export function TrendingSerieItem(props) {
  const {serie} = props
  const date = new Date(serie.date);
  const path = createPath(serie.title)
  const url = `/serie/${path}/${serie.id}`
  return (
    <Link to={url}>
      <div className="image_container">
        <figure>
          <LazyLoadImage
            alt={serie.title}
            src={`${ENV.Api_image_url}${serie.img}`}
            className="movie_item_img"
            effect="blur"
            width={220}
            height={330}
            aria-label='trending_serie_item'
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
