
export function FooterSerie(props) {
    const {seasons} = props;
  return (
    <>
      {seasons.map(season => (
        
        <div key={season.id}>
            <h3>{season.name}</h3>
            <p>{new Date(season.air_date).getFullYear()}</p>
            <p>{`${season.episode_count} capitulos` || "" } </p>
            {season.vote_average !== 0 ? <p>{season.vote_average} puntos</p> : ""}
            <p>{season.overview || "Sin descripción"}</p>
            <br/>
        </div>
      ))}
    </>
  )
}
