import "./Inside.scss";
export function TrailerInside(props) {
  const { trailers } = props;
  return (
    <>
      {trailers.map((trailer) => (
        <div key={trailer.id}>
          <p>{trailer.name}</p>
          <img alt={trailer.name} className="image_trailer" src={`https://i.ytimg.com/vi/${trailer.key}/hqdefault.jpg`} />
          {/* <iframe
            width="560"
            height="315"
            src={`https://www.youtube.com/embed/${trailer.key}`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe> */}    
        </div>
      ))}
    </>
  );
}
