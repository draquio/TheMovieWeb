export function formatAllMovie(movies) {
  let mapmovie = movies?.map((movie) => ({
    id: movie.id || "",
    title: movie.title || "",
    img: movie.poster_path || "",
    date: movie.release_date || "1900-01-1",
    vote: movie.vote_average || "",
  }));
  return mapmovie;
}

export function formatSearch(list) {
  let maplist = list?.map((list) => ({
    id: list.id || "",
    title: list.title || list.name || "",
    img: list.poster_path || "",
    date: list.release_date || list.first_air_date || "1900-01-1",
    vote: list.vote_average || "",
    type: list.media_type || ""
  }));
  let filterlist = maplist?.filter((list) => list.img);
  return filterlist;
}


export function createPath(title) {
  let result = title
    .replaceAll(" ", "-")
    .replaceAll(":", "")
    .replaceAll("!", "")
    .toLowerCase();
  return result;
}
