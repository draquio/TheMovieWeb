import React from "react";

export function HeaderSerie(props) {
  const { serie, cast } = props;
  if (!cast) return "";
  return (
    <>
      <h1>{serie.name}</h1>
      <ul>
        {serie.genres.map((serie) => (
          <li key={serie.id}>{serie.name}</li>
        ))}
      </ul>
      <p>{serie.first_air_date}</p>
      <p>{serie.overview}</p>
      <p>Dirección:</p>
      <ul>
        {cast.directors.map((director) => (
          <li key={director.id}>
            {director.name} - {director.jobs[0].episode_count} {" "} 
            {director.jobs[0].episode_count === 1 ? "capitulo" : "capitulos"}
          </li>
        ))}
      </ul>
      <br />
      <p>Elenco:</p>
      <ul>
        {cast.actors.map((actor) => (
          <li key={actor.id}>
            {actor.name} - {actor.roles[0].character}
          </li>
        ))}
      </ul>
    </>
  );
}
