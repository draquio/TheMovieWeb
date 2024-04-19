import React from "react";
import { ENV } from "../../utils";
import { BiSolidTimeFive } from "react-icons/bi";
import { BsCalendar2DateFill } from "react-icons/bs";
import { AiFillStar } from "react-icons/ai";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

export function HeaderSerie(props) {
  const { serie, cast } = props;
  const date = new Date(serie.first_air_date);
  const avarage = Math.round(serie.vote_average * 10) / 10;
  if (!cast) return "";
  return (
    <div className="header_post">
    <LazyLoadImage alt={serie.name} src={`${ENV.Api_image_url}${serie.poster_path}`} effect="blur" width={220} height={330} />
      <div className="info_post">
      <h1>{serie.name}</h1>
        <div className="genre_post">
          <ul className="genre_list">
            {serie.genres.map((serie) => (
              <li key={serie.id}>{serie.name}</li>
            ))}
          </ul>
          <div className="details_movie">
          <p className="details_movie_item">
              <BiSolidTimeFive className="icon_post" /> {serie.episode_run_time}m
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
        <div className="overview_post">{serie.overview}</div>
      <p>Dirección:</p>
        {cast.directors.map((director) => (
          <p key={director.id}>
            {director.name} ({director.jobs[0].episode_count}{" "} 
            {director.jobs[0].episode_count === 1 ? "capitulo" : "capitulos"})
          </p>
        ))}
      <br />
      <p>Elenco:</p>
        {cast.actors.map((actor) => (
          <p key={actor.id}>
            {actor.name} - {actor.roles[0].character}
          </p>
        ))}
      </div>
    </div>
  );
}
