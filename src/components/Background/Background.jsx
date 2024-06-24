import React from "react";
import { ENV } from "../../utils";

export function Background(props) {
    const {movie} = props;
  if (!movie) return ""
  return (
    <div className="bgtop" style={{ opacity: 0.7 }}>
      <img src={`${ENV.Api_image_url_original}${movie.backdrop_path}`} alt="movie_background" loading="eager" />
    </div>
  );
}
